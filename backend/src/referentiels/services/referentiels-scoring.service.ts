import {
  HttpException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { and, asc, desc, eq, like, lte, SQL, SQLWrapper } from 'drizzle-orm';
import { chunk, isNil } from 'es-toolkit';
import * as _ from 'lodash';
import { DateTime } from 'luxon';
import { NiveauAcces } from '../../auth/models/private-utilisateur-droit.table';
import { SupabaseJwtPayload } from '../../auth/models/supabase-jwt.models';
import { AuthService } from '../../auth/services/auth.service';
import { CollectiviteAvecType } from '../../collectivites/models/identite-collectivite.dto';
import CollectivitesService from '../../collectivites/services/collectivites.service';
import DatabaseService from '../../common/services/database.service';
import { roundTo } from '../../common/services/number.helper';
import { GetPersonnalitionConsequencesResponseType } from '../../personnalisations/models/get-personnalisation-consequences.response';
import ExpressionParserService from '../../personnalisations/services/expression-parser.service';
import PersonnalisationsService from '../../personnalisations/services/personnalisations-service';
import {
  ActionPointScoreType,
  ActionPointScoreWithAvancementType,
} from '../models/action-point-score.dto';
import { ActionScoreType } from '../models/action-score.dto';
import {
  actionStatutTable,
  ActionStatutType,
} from '../models/action-statut.table';
import { ActionType } from '../models/action-type.enum';
import {
  clientScoresTable,
  ClientScoresType,
} from '../models/client-scores.table';
import { ComputeScoreMode } from '../models/compute-scores-mode.enum';
import { GetActionScoresResponseType } from '../models/get-action-scores.response';
import { GetActionStatutsResponseType } from '../models/get-action-statuts.response';
import { GetCheckScoresResponseType } from '../models/get-check-scores.response';
import { GetReferentielMultipleScoresRequestType } from '../models/get-referentiel-multiple-scores.request';
import { GetReferentielMultipleScoresResponseType } from '../models/get-referentiel-multiple-scores.response';
import { GetReferentielScoresRequestType } from '../models/get-referentiel-scores.request';
import { GetReferentielScoresResponseType } from '../models/get-referentiel-scores.response';
import { GetReferentielResponseType } from '../models/get-referentiel.response';
import { historiqueActionStatutTable } from '../models/historique-action-statut.table';
import { LabellisationAuditType } from '../models/labellisation-audit.table';
import { LabellisationEtoileMetaType } from '../models/labellisation-etoile.table';
import { postAuditScoresTable } from '../models/post-audit-scores.table';
import { preAuditScoresTable } from '../models/pre-audit-scores.table';
import { ReferentielActionWithScoreType } from '../models/referentiel-action-avec-score.dto';
import { ReferentielActionOrigineWithScoreType } from '../models/referentiel-action-origine-with-score.dto';
import { ReferentielActionType } from '../models/referentiel-action.dto';
import { ReferentielType } from '../models/referentiel.enum';
import { ScoreJalon } from '../models/score-jalon.enum';
import LabellisationService from './labellisation.service';
import ReferentielsService from './referentiels.service';

@Injectable()
export default class ReferentielsScoringService {
  private readonly logger = new Logger(ReferentielsScoringService.name);

  private static DEFAULT_ROUNDING_DIGITS = 3;
  private static MULTIPLE_COLLECTIVITE_CHUNK_SIZE = 10;

  constructor(
    private readonly authService: AuthService,
    private readonly collectivitesService: CollectivitesService,
    private readonly databaseService: DatabaseService,
    private readonly referentielsService: ReferentielsService,
    private readonly personnalisationService: PersonnalisationsService,
    private readonly expressionParserService: ExpressionParserService,
    private readonly labellisationService: LabellisationService
  ) {}

  async checkCollectiviteAndReferentielWithAccess(
    collectiviteId: number,
    referentielId: ReferentielType,
    date?: string,
    tokenInfo?: SupabaseJwtPayload,
    niveauAccesMinimum = NiveauAcces.LECTURE
  ): Promise<CollectiviteAvecType> {
    // Check read access if a date is given (historical data)
    if (tokenInfo && date) {
      await this.authService.verifieAccesAuxCollectivites(
        tokenInfo,
        [collectiviteId],
        niveauAccesMinimum
      );
    }
    await this.referentielsService.getReferentielDefinition(referentielId);

    return this.collectivitesService.getCollectiviteAvecType(collectiviteId);
  }

  buildReferentielAvecScore(
    referentiel: ReferentielActionType,
    fillOrigineActionMap?: {
      [origineActionId: string]: ReferentielActionOrigineWithScoreType;
    },
    existingScores?: GetActionScoresResponseType
  ): ReferentielActionWithScoreType {
    const actionId = referentiel.actionId!;
    const referentielAvecScore: ReferentielActionWithScoreType = {
      ...referentiel,
      score:
        existingScores && existingScores[actionId]
          ? existingScores[actionId]
          : {
              actionId: actionId,
              pointReferentiel: !_.isNil(referentiel.points)
                ? referentiel.points
                : null,
              pointPotentiel: null,
              pointPotentielPerso: null,
              pointFait: null,
              pointPasFait: null,
              pointNonRenseigne: null,
              pointProgramme: null,
              concerne: true,
              completedTachesCount: null,
              totalTachesCount: 1,
              faitTachesAvancement: null,
              programmeTachesAvancement: null,
              pasFaitTachesAvancement: null,
              pasConcerneTachesAvancement: null,
              desactive: false,
              renseigne: true,
            },
      actionsOrigine: [],
      actionsEnfant: [],
      scoresTag: {},
    };
    if (!referentiel.actionsOrigine) {
      delete referentielAvecScore.actionsOrigine;
    }
    referentiel.actionsEnfant.forEach((actionEnfant) => {
      // Examples are not included in the score
      if (actionEnfant.actionType !== ActionType.EXEMPLE) {
        const actionEnfantAvecScore = this.buildReferentielAvecScore(
          actionEnfant,
          fillOrigineActionMap,
          existingScores
        );
        referentielAvecScore.actionsEnfant.push(actionEnfantAvecScore);
      }
    });

    if (referentiel.actionsOrigine) {
      referentielAvecScore.actionsOrigine = referentiel.actionsOrigine.map(
        (actionOrigine) => {
          // TODO: only for level sous-action?
          // WARNING: an action origin can be used several times be sure to not overwrite it in the map
          const actionOrigineWithScore: ReferentielActionOrigineWithScoreType =
            (fillOrigineActionMap &&
              fillOrigineActionMap[actionOrigine.actionId]) || {
              ...actionOrigine,
              score: null,
            };
          if (fillOrigineActionMap) {
            fillOrigineActionMap[actionOrigine.actionId] =
              actionOrigineWithScore;
          }

          return actionOrigineWithScore;
        }
      );
    }

    const totalTachesCount = referentielAvecScore.actionsEnfant.length
      ? referentielAvecScore.actionsEnfant.reduce(
          (acc, enfant) => acc + (enfant.score.totalTachesCount || 1),
          0
        )
      : 1;
    referentielAvecScore.score.totalTachesCount = totalTachesCount;

    return referentielAvecScore;
  }

  appliquePersonnalisationPotentielPerso(
    referentielActionAvecScore: ReferentielActionWithScoreType,
    personnalisationConsequences: GetPersonnalitionConsequencesResponseType,
    potentielPerso?: number
  ) {
    let recursivePotentielPerso = potentielPerso;
    const actionPersonnalisationConsequences =
      personnalisationConsequences[referentielActionAvecScore.actionId!];
    // Si il y a un potentiel perso on l'applique et on le propagera aux enfants
    if (!_.isNil(actionPersonnalisationConsequences?.potentielPerso)) {
      recursivePotentielPerso =
        actionPersonnalisationConsequences.potentielPerso *
        (potentielPerso || 1);
      referentielActionAvecScore.score.pointPotentielPerso =
        recursivePotentielPerso *
        (referentielActionAvecScore.score.pointReferentiel || 0);
    }

    if (
      !_.isNil(recursivePotentielPerso) &&
      referentielActionAvecScore.score.pointReferentiel
    ) {
      referentielActionAvecScore.score.pointPotentiel =
        recursivePotentielPerso *
        referentielActionAvecScore.score.pointReferentiel;
    }

    referentielActionAvecScore.actionsEnfant.forEach((actionEnfant) => {
      this.appliquePersonnalisationPotentielPerso(
        actionEnfant,
        personnalisationConsequences,
        recursivePotentielPerso
      );
    });

    // Maintenant qu'on l'a appliqué aux enfants, on recalcule le potentiel perso du parent s'il n'a pas déjà été calculé
    if (_.isNil(referentielActionAvecScore.score.pointPotentiel)) {
      if (referentielActionAvecScore.actionsEnfant.length) {
        referentielActionAvecScore.score.pointPotentiel =
          referentielActionAvecScore.actionsEnfant.reduce((acc, enfant) => {
            if (_.isNil(enfant.score.pointPotentiel)) {
              return acc + (enfant.score.pointReferentiel || 0);
            }
            return acc + enfant.score.pointPotentiel;
          }, 0);
      } else {
        referentielActionAvecScore.score.pointPotentiel =
          referentielActionAvecScore.score.pointReferentiel || 0;
      }
    }
  }

  appliquePersonnalisationDesactivation(
    referentielActionAvecScore: ReferentielActionWithScoreType,
    personnalisationConsequences: GetPersonnalitionConsequencesResponseType,
    setPotentielPersoToZero = false,
    parentDesactivation?: boolean
  ) {
    const actionPersonnalisationConsequences =
      personnalisationConsequences[referentielActionAvecScore.actionId!];
    // Si le parent n'est pas déjà désactivé et il y a une desactivation on l'applique et on le propagera aux enfants
    if (!parentDesactivation && actionPersonnalisationConsequences?.desactive) {
      parentDesactivation = actionPersonnalisationConsequences?.desactive;
    }
    referentielActionAvecScore.score.desactive = parentDesactivation || false;
    if (referentielActionAvecScore.score.desactive) {
      // Si l'action est désactivée, on place le flag concerné à false
      referentielActionAvecScore.score.concerne = false;
      if (setPotentielPersoToZero) {
        referentielActionAvecScore.score.pointPotentiel = 0;
      }
    }

    referentielActionAvecScore.actionsEnfant.forEach((actionEnfant) => {
      this.appliquePersonnalisationDesactivation(
        actionEnfant,
        personnalisationConsequences,
        setPotentielPersoToZero,
        parentDesactivation
      );
    });
  }

  appliqueActionStatutNonConcerneEtRemonteAuxParents(
    referentielActionAvecScore: ReferentielActionWithScoreType,
    actionStatuts: GetActionStatutsResponseType,
    parentConcerne = true
  ) {
    const actionStatut = actionStatuts[referentielActionAvecScore.actionId!];
    // Si le parent n'est pas déjà désactivé et il y a une desactivation on l'applique et on le propagera aux enfants
    if (parentConcerne && actionStatut && !actionStatut.concerne) {
      parentConcerne = actionStatut.concerne;
    }

    // On applique parent concerne que si il est à faut
    // Ceci afin d'éviter de réactiver une action qui a été désactivée par une règle de personnalisation
    if (!parentConcerne) {
      referentielActionAvecScore.score.concerne = parentConcerne;
    }

    referentielActionAvecScore.actionsEnfant.forEach((actionEnfant) => {
      this.appliqueActionStatutNonConcerneEtRemonteAuxParents(
        actionEnfant,
        actionStatuts,
        parentConcerne
      );
    });

    // Maintant qu'on l'a appliqué aux enfants, on remonte aux parents
    // Si tous ces enfants sont non concernés, alors il est non concerné
    if (
      referentielActionAvecScore.actionsEnfant.length &&
      referentielActionAvecScore.actionsEnfant.every(
        (enfant) => !enfant.score.concerne
      )
    ) {
      this.logger.log(
        `Tous les enfants de ${referentielActionAvecScore.actionId} sont non concernés, donc il est non concerné`
      );
      referentielActionAvecScore.score.concerne = false;
    }
  }

  redistribuePotentielActionsDesactiveesNonConcernees(
    referentielActionAvecScore: ReferentielActionWithScoreType,
    actionLevel: number
  ) {
    // Appelle recursif sur les enfants pour commencer par le bas de l'arbre
    referentielActionAvecScore.actionsEnfant.forEach((actionEnfant) => {
      this.redistribuePotentielActionsDesactiveesNonConcernees(
        actionEnfant,
        actionLevel
      );
    });

    if (!referentielActionAvecScore.score.concerne) {
      // WARNING: on ne peut pas encore le mettre à 0 car on doit redistribuer les points
      //referentielActionAvecScore.score.point_potentiel = 0;
    } else {
      // On ne redistribue que pour les enfants de type sous-actions et taches
      // Autrement dit, que pour un parent au moins de type action
      if (referentielActionAvecScore.level >= actionLevel) {
        // On ne redistribue qu'aux actions concernées et qui n'ont pas un potentiel à 0'
        const enfantsConcernes: ReferentielActionWithScoreType[] = [];
        referentielActionAvecScore.actionsEnfant.forEach((enfant) => {
          if (enfant.score.concerne) {
            if (enfant.score.pointPotentiel) {
              enfantsConcernes.push(enfant);
            }
          }
        });

        if (enfantsConcernes.length) {
          const pointsARedistribuer =
            referentielActionAvecScore.actionsEnfant.reduce((acc, enfant) => {
              if (!enfant.score.concerne) {
                const actionPointARedistribuer =
                  enfant.score.pointPotentiel || 0;
                return acc + actionPointARedistribuer;
              }
              return acc;
            }, 0);

          const pointsParEnfant = pointsARedistribuer / enfantsConcernes.length;
          /*this.logger.log(
            `Points à redistribuer pour les ${enfantsConcernes.length} enfants actifs (sur ${referentielActionAvecScore.actions_enfant.length}) de l'action ${referentielActionAvecScore.action_id}: ${pointsParEnfant}`,
          );*/
          enfantsConcernes.forEach((enfant) => {
            if (_.isNil(enfant.score.pointPotentiel)) {
              this.logger.warn(
                `Potentiel non renseigné pour ${enfant.actionId}, ne devrait pas être le cas à cette étape`
              );
              enfant.score.pointPotentiel = enfant.score.pointReferentiel || 0;
            }
            const nouveauPotentiel =
              enfant.score.pointPotentiel + pointsParEnfant;
            const redistributionFactor =
              nouveauPotentiel / enfant.score.pointPotentiel;
            this.appliqueRedistributionPotentiel(enfant, redistributionFactor);
          });
        } else {
          // TODO: que doit-on faire ?
        }
      }

      // On met à jour le potentiel du parent
      if (referentielActionAvecScore.actionsEnfant.length) {
        const potentielParent = referentielActionAvecScore.actionsEnfant.reduce(
          (acc, enfant) =>
            acc +
            (enfant.score.concerne ? enfant.score.pointPotentiel || 0 : 0),
          0
        );
        referentielActionAvecScore.score.pointPotentiel = potentielParent;
      }
    }
  }

  appliqueRedistributionPotentiel(
    referentielActionAvecScore: ReferentielActionWithScoreType,
    redistributionFactor: number
  ) {
    referentielActionAvecScore.score.pointPotentiel =
      referentielActionAvecScore.score.pointPotentiel! * redistributionFactor;
    referentielActionAvecScore.actionsEnfant.forEach((actionEnfant) => {
      this.appliqueRedistributionPotentiel(actionEnfant, redistributionFactor);
    });
  }

  appliqueActionAvancementEtRemonteAuxParents(
    referentielActionAvecScore: ReferentielActionWithScoreType,
    actionStatuts: GetActionStatutsResponseType
  ) {
    referentielActionAvecScore.actionsEnfant.forEach((actionEnfant) => {
      this.appliqueActionAvancementEtRemonteAuxParents(
        actionEnfant,
        actionStatuts
      );
    });

    // voir fonction update_action_scores_from_status
    if (!referentielActionAvecScore.score.concerne) {
      referentielActionAvecScore.score.pointFait = 0;
      referentielActionAvecScore.score.pointPasFait = 0;
      referentielActionAvecScore.score.pointProgramme = 0;
      referentielActionAvecScore.score.pointPotentiel = 0;
      referentielActionAvecScore.score.pointNonRenseigne = 0;
      referentielActionAvecScore.score.completedTachesCount =
        referentielActionAvecScore.score.totalTachesCount;
      referentielActionAvecScore.score.faitTachesAvancement = 0;
      referentielActionAvecScore.score.programmeTachesAvancement = 0;
      referentielActionAvecScore.score.pasFaitTachesAvancement = 0;
      referentielActionAvecScore.score.pasConcerneTachesAvancement =
        referentielActionAvecScore.score.totalTachesCount;
      referentielActionAvecScore.score.renseigne = true;
      /* todo: 
            point_potentiel_perso=tache_points_personnalise
            if is_personnalise and not is_desactive
            else None,
            */
    } else {
      const actionStatut = actionStatuts[referentielActionAvecScore.actionId!];
      if (actionStatut && actionStatut.avancementDetaille?.length === 3) {
        referentielActionAvecScore.score.aStatut = true;
        const pointsPotentiel =
          referentielActionAvecScore.score.pointPotentiel ||
          referentielActionAvecScore.score.pointReferentiel ||
          0;
        const pourcentageFait = actionStatut.avancementDetaille[0];
        const pourcentageProgramme = actionStatut.avancementDetaille[1];
        const pourcentagePasFait = actionStatut.avancementDetaille[2];
        referentielActionAvecScore.score.pointFait =
          pourcentageFait * pointsPotentiel;
        referentielActionAvecScore.score.pointPasFait =
          pourcentagePasFait * pointsPotentiel;
        referentielActionAvecScore.score.pointProgramme =
          pourcentageProgramme * pointsPotentiel;
        referentielActionAvecScore.score.pointNonRenseigne = 0;
        referentielActionAvecScore.score.completedTachesCount =
          referentielActionAvecScore.score.totalTachesCount;
        referentielActionAvecScore.score.faitTachesAvancement =
          pourcentageFait * referentielActionAvecScore.score.totalTachesCount;
        referentielActionAvecScore.score.programmeTachesAvancement =
          pourcentageProgramme *
          referentielActionAvecScore.score.totalTachesCount;
        referentielActionAvecScore.score.pasFaitTachesAvancement =
          pourcentagePasFait *
          referentielActionAvecScore.score.totalTachesCount;
        referentielActionAvecScore.score.pasConcerneTachesAvancement = 0;
        referentielActionAvecScore.score.renseigne = true;

        // Il s'agit d'une tache sans statut, tous les points sont non renseignés
      } else if (!referentielActionAvecScore.actionsEnfant?.length) {
        referentielActionAvecScore.score.pointFait = 0;
        referentielActionAvecScore.score.pointPasFait = 0;
        referentielActionAvecScore.score.pointProgramme = 0;
        referentielActionAvecScore.score.pointNonRenseigne =
          referentielActionAvecScore.score.pointPotentiel;
        referentielActionAvecScore.score.completedTachesCount = 0;
        referentielActionAvecScore.score.faitTachesAvancement = 0;
        referentielActionAvecScore.score.programmeTachesAvancement = 0;
        referentielActionAvecScore.score.pasFaitTachesAvancement = 0;
        referentielActionAvecScore.score.pasConcerneTachesAvancement = 0;
        referentielActionAvecScore.score.renseigne = false;
      } else {
        this.mergeScoresEnfants(
          referentielActionAvecScore.score,
          referentielActionAvecScore.actionsEnfant.map((enfant) => enfant.score)
        );
      }
    }
  }

  mergePointScoresEnfants(
    scoreParent: ActionPointScoreType,
    scoreEnfants: ActionPointScoreType[],
    includePointPotentielAndReferentiel = false
  ) {
    // only focus on point properties
    scoreParent.pointPasFait = scoreEnfants.reduce(
      (acc, enfant) => acc + (enfant.pointPasFait || 0),
      0
    );
    scoreParent.pointFait = scoreEnfants.reduce(
      (acc, enfant) => acc + (enfant.pointFait || 0),
      0
    );
    scoreParent.pointProgramme = scoreEnfants.reduce(
      (acc, enfant) => acc + (enfant.pointProgramme || 0),
      0
    );
    scoreParent.pointNonRenseigne = scoreEnfants.reduce(
      (acc, enfant) => acc + (enfant.pointNonRenseigne || 0),
      0
    );
    if (includePointPotentielAndReferentiel) {
      scoreParent.pointPotentiel = scoreEnfants.reduce(
        (acc, enfant) => acc + (enfant.pointPotentiel || 0),
        0
      );
      scoreParent.pointReferentiel = scoreEnfants.reduce(
        (acc, enfant) => acc + (enfant.pointReferentiel || 0),
        0
      );
    }
  }

  mergeScoresEnfants(
    scoreParent: ActionScoreType,
    scoreEnfants: ActionScoreType[]
  ) {
    this.mergePointScoresEnfants(scoreParent, scoreEnfants);
    scoreParent.completedTachesCount = scoreEnfants.reduce(
      (acc, enfant) => acc + (enfant.completedTachesCount || 0),
      0
    );
    scoreParent.faitTachesAvancement = scoreEnfants.reduce(
      (acc, enfant) => acc + (enfant.faitTachesAvancement || 0),
      0
    );
    scoreParent.programmeTachesAvancement = scoreEnfants.reduce(
      (acc, enfant) => acc + (enfant.programmeTachesAvancement || 0),
      0
    );
    scoreParent.pasFaitTachesAvancement = scoreEnfants.reduce(
      (acc, enfant) => acc + (enfant.pasFaitTachesAvancement || 0),
      0
    );
    scoreParent.pasConcerneTachesAvancement = scoreEnfants.reduce(
      (acc, enfant) => acc + (enfant.pasConcerneTachesAvancement || 0),
      0
    );
    if (
      scoreParent.concerne &&
      scoreParent.pointNonRenseigne &&
      scoreParent.pointNonRenseigne > 0
    ) {
      scoreParent.renseigne = false;
    }
  }

  appliquePersonnalisationScore(
    referentielActionAvecScore: ReferentielActionWithScoreType,
    personnalisationConsequences: GetPersonnalitionConsequencesResponseType,
    scoreMap: { [key: string]: number },
    overridenScoreFactor?: number
  ) {
    const actionPersonnalisationConsequences =
      personnalisationConsequences[referentielActionAvecScore.actionId!];
    // Si il y a un potentiel perso on l'applique et on le propagera aux enfants
    if (
      !_.isNil(actionPersonnalisationConsequences?.scoreFormule) &&
      referentielActionAvecScore.score.pointPotentiel // if point_potentiel equals 0., no worthy reduction
    ) {
      const originalScore = scoreMap[referentielActionAvecScore.actionId!];
      const overridenScore =
        this.expressionParserService.parseAndEvaluateExpression(
          actionPersonnalisationConsequences.scoreFormule,
          null,
          null,
          scoreMap
        ) as number;

      if (!_.isNil(overridenScore) && originalScore > 0) {
        overridenScoreFactor = overridenScore / originalScore;
      }
    }

    if (!_.isNil(overridenScoreFactor)) {
      referentielActionAvecScore.score.pointFait =
        (referentielActionAvecScore.score.pointFait || 0) *
        overridenScoreFactor;
    }

    referentielActionAvecScore.actionsEnfant.forEach((actionEnfant) => {
      this.appliquePersonnalisationScore(
        actionEnfant,
        personnalisationConsequences,
        scoreMap,
        overridenScoreFactor
      );
    });

    // Maintenant qu'on a appliqué aux enfants, on reactualise les points des parents
    if (referentielActionAvecScore.actionsEnfant.length) {
      // Lorsque le statut d'un parent est renseigné, il prévaut sur la somme de ses enfants
      // Un peu étrange mais uniquement conservé pour conserver le statut des enfants
      if (!referentielActionAvecScore.score.aStatut) {
        referentielActionAvecScore.score.pointFait =
          referentielActionAvecScore.actionsEnfant.reduce(
            (acc, enfant) => acc + (enfant.score.pointFait || 0),
            0
          );
      }
    }
  }

  computeEtoiles(
    referentielActionAvecScore: ReferentielActionWithScoreType,
    etoilesDefinition: LabellisationEtoileMetaType[],
    recursive = false
  ) {
    // Compute etoiles only for root level by default
    if (recursive) {
      referentielActionAvecScore.actionsEnfant.forEach((actionEnfant) => {
        this.computeEtoiles(actionEnfant, etoilesDefinition);
      });
    }

    //
    // WARNING the etoiles definition is supposed to have been sorted by minRealisePercentage desc
    for (const etoileDefinition of etoilesDefinition) {
      const scorePercentage = referentielActionAvecScore.score.pointPotentiel
        ? ((referentielActionAvecScore.score.pointFait || 0) * 100) /
          referentielActionAvecScore.score.pointPotentiel
        : 0;
      if (scorePercentage >= etoileDefinition.minRealisePercentage) {
        referentielActionAvecScore.score.etoiles = parseInt(
          etoileDefinition.etoile
        );
        break;
      }
    }
  }

  appliqueRounding(
    referentielActionAvecScore: ReferentielActionWithScoreType,
    ndigits: number = ReferentielsScoringService.DEFAULT_ROUNDING_DIGITS
  ) {
    referentielActionAvecScore.actionsEnfant.forEach((actionEnfant) => {
      this.appliqueRounding(actionEnfant, ndigits);
    });

    referentielActionAvecScore.score.pointPotentiel = roundTo(
      referentielActionAvecScore.score.pointPotentiel,
      ndigits
    );
    referentielActionAvecScore.score.pointFait = roundTo(
      referentielActionAvecScore.score.pointFait,
      ndigits
    );
    referentielActionAvecScore.score.pointProgramme = roundTo(
      referentielActionAvecScore.score.pointProgramme,
      ndigits
    );
    referentielActionAvecScore.score.pointNonRenseigne = roundTo(
      referentielActionAvecScore.score.pointNonRenseigne,
      ndigits
    );
    referentielActionAvecScore.score.pointPasFait = roundTo(
      referentielActionAvecScore.score.pointPasFait,
      ndigits
    );
    referentielActionAvecScore.score.pointReferentiel = roundTo(
      referentielActionAvecScore.score.pointReferentiel,
      ndigits
    );
    if (referentielActionAvecScore.score.pointPotentielPerso) {
      referentielActionAvecScore.score.pointPotentielPerso = roundTo(
        referentielActionAvecScore.score.pointPotentielPerso,
        ndigits
      );
    }
  }

  fillAvancementDetailleFromAvancement(
    actionStatut: Pick<ActionStatutType, 'avancement' | 'avancementDetaille'>
  ) {
    if (actionStatut.avancement === 'fait') {
      actionStatut.avancementDetaille = [1, 0, 0];
    } else if (actionStatut.avancement === 'programme') {
      actionStatut.avancementDetaille = [0, 1, 0];
    } else if (actionStatut.avancement === 'pas_fait') {
      actionStatut.avancementDetaille = [0, 0, 1];
    } else if (!actionStatut.avancementDetaille) {
      actionStatut.avancementDetaille = [0, 0, 0];
    }
  }

  async getReferentielActionStatuts(
    referentielId: ReferentielType,
    collectiviteId: number,
    date?: string,
    tokenInfo?: SupabaseJwtPayload,
    noCheck?: boolean
  ): Promise<GetActionStatutsResponseType> {
    const getActionStatuts: GetActionStatutsResponseType = {};

    this.logger.log(
      `Getting collectivite ${collectiviteId} action statuts for referentiel ${referentielId} and date ${date}`
    );

    if (!noCheck) {
      await this.checkCollectiviteAndReferentielWithAccess(
        collectiviteId,
        referentielId,
        date,
        tokenInfo
      );
    }

    const table = date ? historiqueActionStatutTable : actionStatutTable;

    const actionStatutsConditions: (SQLWrapper | SQL)[] = [
      eq(table.collectiviteId, collectiviteId),
      like(table.actionId, `${referentielId}%`),
    ];
    if (date) {
      actionStatutsConditions.push(lte(table.modifiedAt, date));
    }
    // TODO: colonne referentiel dans les actionStatutTable ?
    const referentielActionStatuts = await this.databaseService.db
      .select()
      .from(table)
      .where(and(...actionStatutsConditions))
      .orderBy(asc(table.actionId), desc(table.modifiedAt));
    this.logger.log(
      `${referentielActionStatuts.length} statuts trouvees pour le referentiel ${referentielId} et la collectivite ${collectiviteId}`
    );
    referentielActionStatuts.forEach((actionStatut) => {
      if (!getActionStatuts[actionStatut.actionId]) {
        getActionStatuts[actionStatut.actionId] = actionStatut;
        this.fillAvancementDetailleFromAvancement(actionStatut);
      } else {
        // On ne garde que le dernier statut, déjà pris en compte par l'orderBy
      }
    });

    return getActionStatuts;
  }

  getActionPointScore(actionScore: ActionScoreType): ActionPointScoreType {
    const actionPointScore: ActionPointScoreType = {
      pointPotentiel: actionScore.pointPotentiel || 0,
      pointFait: actionScore.pointFait || 0,
      pointProgramme: actionScore.pointProgramme || 0,
      pointPasFait: actionScore.pointPasFait || 0,
      pointNonRenseigne: actionScore.pointNonRenseigne || 0,
      pointReferentiel: actionScore.pointReferentiel || 0,
    };
    if (!isNil(actionScore.etoiles)) {
      actionPointScore.etoiles = actionScore.etoiles;
    }
    return actionPointScore;
  }

  getActionPointScoreWithAvancement(
    actionScore: ActionScoreType
  ): ActionPointScoreWithAvancementType {
    const actionPointScore = this.getActionPointScore(actionScore);
    const actionPointScoreWithAvancement: ActionPointScoreWithAvancementType = {
      ...actionPointScore,
      totalTachesCount: actionScore.totalTachesCount || 0,
      faitTachesAvancement: actionScore.faitTachesAvancement || 0,
      programmeTachesAvancement: actionScore.programmeTachesAvancement || 0,
      pasFaitTachesAvancement: actionScore.pasFaitTachesAvancement || 0,
      pasConcerneTachesAvancement: actionScore.pasConcerneTachesAvancement || 0,
    };
    return actionPointScoreWithAvancement;
  }

  async computeScoreForMultipleCollectivite(
    referentielId: ReferentielType,
    parameters: GetReferentielMultipleScoresRequestType,
    tokenInfo?: SupabaseJwtPayload
  ): Promise<GetReferentielMultipleScoresResponseType> {
    this.logger.log(
      `Calcul des scores pour les collectivités ${parameters.collectiviteIds.join(
        ','
      )} pour le referentiel ${referentielId} à la date ${
        parameters.date
      } (Depuis referentiels origine: ${parameters.avecReferentielsOrigine})`
    );

    const referentiel = await this.referentielsService.getReferentiel(
      referentielId,
      true,
      parameters.avecReferentielsOrigine
    );

    const getReferentielMultipleScoresResponseType: GetReferentielMultipleScoresResponseType =
      {
        referentielVersion: referentiel.version,
        collectiviteScores: [],
      };

    const collectiviteChunks = chunk(
      parameters.collectiviteIds,
      ReferentielsScoringService.MULTIPLE_COLLECTIVITE_CHUNK_SIZE
    );
    for (const collectiviteChunk of collectiviteChunks) {
      const collectiviteScores = await Promise.all(
        collectiviteChunk.map((collectiviteId) =>
          this.computeScoreForCollectivite(
            referentielId,
            collectiviteId,
            parameters,
            tokenInfo,
            referentiel,
            true
          )
        )
      );
      getReferentielMultipleScoresResponseType.collectiviteScores.push(
        ...collectiviteScores
      );
    }

    return getReferentielMultipleScoresResponseType;
  }

  async computeScoreForCollectivite(
    referentielId: ReferentielType,
    collectiviteId: number,
    parameters: GetReferentielScoresRequestType,
    tokenInfo?: SupabaseJwtPayload,
    referentiel?: GetReferentielResponseType,
    noCheck?: boolean
  ): Promise<GetReferentielScoresResponseType> {
    if (!parameters.mode) {
      parameters.mode = ComputeScoreMode.RECALCUL;
    }

    this.logger.log(
      `Calcul du score (mode ${parameters.mode}) de la collectivité ${collectiviteId} pour le referentiel ${referentielId} à la date ${parameters.date} et pour le jalon ${parameters.jalon} (Depuis referentiels origine: ${parameters.avecReferentielsOrigine})`
    );
    let auditId: number | undefined = undefined;
    if (parameters.jalon) {
      if (parameters.date) {
        throw new HttpException(
          `Date should not be provided when a jalon is defined`,
          400
        );
      }
      // Later we can have snapshots for other jalon
      if (
        (parameters.jalon === ScoreJalon.DEBUT_AUDIT ||
          parameters.jalon === ScoreJalon.FIN_AUDIT) &&
        !parameters.avecReferentielsOrigine
      ) {
        const audits = await this.labellisationService.getAuditsForCollectivite(
          collectiviteId,
          referentielId,
          true
        );
        if (!audits.length) {
          throw new HttpException(
            `Aucun audit trouvé pour la collectivité ${collectiviteId}`,
            400
          );
        }

        // Audits are sorted by date desc
        let audit: LabellisationAuditType | undefined = audits[0];
        if (parameters.anneeAudit) {
          audit = audits.find(
            (a) =>
              a.dateFin &&
              DateTime.fromJSDate(a.dateFin).year === parameters.anneeAudit
          );
          if (!audit) {
            throw new HttpException(
              `Aucun audit trouvé pour la collectivité ${collectiviteId} et l'année ${parameters.anneeAudit}`,
              400
            );
          }
        }
        auditId = audit.id;
        parameters.date =
          (parameters.jalon === ScoreJalon.DEBUT_AUDIT
            ? audit.dateDebut?.toISOString()
            : audit.dateFin?.toISOString()) || undefined;
        this.logger.log(
          `Audit ${auditId} trouvé pour la collectivité ${collectiviteId} et le referentiel ${referentielId} avec le jaon ${parameters.jalon}: ${parameters.date}`
        );
      }
    } else {
      parameters.jalon = parameters.date
        ? ScoreJalon.DATE_PERSONNALISEE
        : ScoreJalon.SCORE_COURANT;
    }

    let collectiviteInfo: undefined | CollectiviteAvecType;
    if (!noCheck) {
      collectiviteInfo = await this.checkCollectiviteAndReferentielWithAccess(
        collectiviteId,
        referentielId,
        parameters.date,
        tokenInfo
      );
    } else {
      collectiviteInfo =
        await this.collectivitesService.getCollectiviteAvecType(collectiviteId);
    }

    if (!referentiel) {
      referentiel = await this.referentielsService.getReferentiel(
        referentielId,
        true,
        parameters.avecReferentielsOrigine
      );
    }

    const etoilesDefinitions =
      await this.labellisationService.getEtoileDefinitions();

    const personnalisationConsequences =
      await this.personnalisationService.getPersonnalisationConsequencesForCollectivite(
        collectiviteId,
        {
          date: parameters.date,
          referentiel: referentielId as ReferentielType,
        },
        undefined, // already checked
        collectiviteInfo
      );

    if (!parameters.avecReferentielsOrigine) {
      const actionStatuts = await this.getReferentielActionStatuts(
        referentielId,
        collectiviteId,
        parameters.date
      );

      const actionLevel = referentiel.orderedItemTypes.indexOf(
        ActionType.ACTION
      );
      if (actionLevel === -1) {
        throw new HttpException(
          `Action type ${ActionType.ACTION} not found for referentiel ${referentielId}`,
          500
        );
      }
      let referentielWithScore: ReferentielActionWithScoreType;
      if (parameters.mode === ComputeScoreMode.DEPUIS_SAUVEGARDE) {
        this.logger.log(
          `Récupération des scores depuis la sauvegarde dans la base de données`
        );
        const scoresResult = await this.getScoresResultFromDb(
          referentiel.itemsTree!,
          collectiviteId,
          parameters.jalon,
          auditId
        );
        referentielWithScore = scoresResult.referentielWithScore;
        parameters.date = scoresResult.date;
      } else {
        this.logger.log(`Recalcul des scores `);
        referentielWithScore = this.computeScore(
          referentiel.itemsTree!,
          personnalisationConsequences,
          actionStatuts,
          actionLevel,
          etoilesDefinitions
        );
      }
      return {
        mode: parameters.mode!,
        jalon: parameters.jalon,
        auditId,
        referentielVersion: referentiel.version,
        collectiviteId,
        collectiviteInfo,
        date: parameters.date || new Date().toISOString(),
        scores: referentielWithScore,
      };
    } else {
      const scores = await this.computeScoreFromReferentielsOrigine(
        collectiviteId,
        parameters,
        referentiel.itemsTree!,
        personnalisationConsequences,
        etoilesDefinitions
      );

      return {
        mode: parameters.mode!,
        jalon: parameters.jalon,
        collectiviteId,
        referentielVersion: referentiel.version,
        collectiviteInfo,
        date: parameters.date || new Date().toISOString(),
        scores: scores,
      };
    }
  }

  updateFromOrigineActions(
    referentielActionWithScore: ReferentielActionWithScoreType,
    roundingDigits = ReferentielsScoringService.DEFAULT_ROUNDING_DIGITS
  ) {
    const initialScore = referentielActionWithScore.score;
    const origineActions = referentielActionWithScore.actionsOrigine;

    const originePointsPotentiels = origineActions?.reduce(
      (acc, origineAction) =>
        acc +
        (origineAction.score?.pointPotentiel || 0) *
          (origineAction.ponderation || 1),
      0
    );
    const referentielPointsPotentiels = !isNil(initialScore.pointPotentiel)
      ? initialScore.pointPotentiel
      : initialScore.pointReferentiel;
    const ratio = originePointsPotentiels
      ? (referentielPointsPotentiels || 0) / originePointsPotentiels
      : 0;

    initialScore.pointFait = roundTo(
      ratio *
        (origineActions?.reduce(
          (acc, origineAction) =>
            acc +
            ((origineAction.score?.faitTachesAvancement || 0) /
              (origineAction.score?.totalTachesCount || 1)) *
              (origineAction.score?.pointReferentiel || 0) *
              (origineAction.ponderation || 1),
          0
        ) || 0),
      roundingDigits
    );

    initialScore.pointProgramme = roundTo(
      ratio *
        (origineActions?.reduce(
          (acc, origineAction) =>
            acc +
            ((origineAction.score?.programmeTachesAvancement || 0) /
              (origineAction.score?.totalTachesCount || 1)) *
              (origineAction.score?.pointReferentiel || 0) *
              (origineAction.ponderation || 1),
          0
        ) || 0),
      roundingDigits
    );
    initialScore.pointPasFait = roundTo(
      ratio *
        (origineActions?.reduce(
          (acc, origineAction) =>
            acc +
            ((origineAction.score?.pasFaitTachesAvancement || 0) /
              (origineAction.score?.totalTachesCount || 1)) *
              (origineAction.score?.pointReferentiel || 0) *
              (origineAction.ponderation || 1),
          0
        ) || 0),
      roundingDigits
    );

    // If new action (no origine actions), set non renseigne to all points
    initialScore.pointNonRenseigne = roundTo(
      (referentielPointsPotentiels || 0) -
        (initialScore.pointFait || 0) -
        (initialScore.pointProgramme || 0) -
        (initialScore.pointPasFait || 0),
      roundingDigits
    );

    // Update origine score
    referentielActionWithScore.scoresOrigine = {};
    referentielActionWithScore.referentielsOrigine?.forEach((referentielid) => {
      const origineReferentielActions =
        referentielActionWithScore.actionsOrigine?.filter(
          (action) => action.referentielId === referentielid
        );
      referentielActionWithScore.scoresOrigine![referentielid] = {
        pointFait: roundTo(
          origineReferentielActions?.reduce(
            (acc, action) =>
              acc + (action.score?.pointFait || 0) * action.ponderation,
            0
          ) || 0,
          roundingDigits
        ),
        pointProgramme: roundTo(
          origineReferentielActions?.reduce(
            (acc, action) =>
              acc + (action.score?.pointProgramme || 0) * action.ponderation,
            0
          ) || 0,
          roundingDigits
        ),
        pointPasFait: roundTo(
          origineReferentielActions?.reduce(
            (acc, action) =>
              acc + (action.score?.pointPasFait || 0) * action.ponderation,
            0
          ) || 0,
          roundingDigits
        ),
        pointNonRenseigne: roundTo(
          origineReferentielActions?.reduce(
            (acc, action) =>
              acc + (action.score?.pointNonRenseigne || 0) * action.ponderation,
            0
          ) || 0,
          roundingDigits
        ),
        pointPotentiel: roundTo(
          origineReferentielActions?.reduce(
            (acc, action) =>
              acc + (action.score?.pointPotentiel || 0) * action.ponderation,
            0
          ) || 0,
          roundingDigits
        ),
        pointReferentiel: roundTo(
          origineReferentielActions?.reduce(
            (acc, action) =>
              acc + (action.score?.pointReferentiel || 0) * action.ponderation,
            0
          ) || 0,
          roundingDigits
        ),
      };
    });
  }

  affectScoreRecursivelyFromOrigineActions(
    referentielActionWithScore: ReferentielActionWithScoreType
  ) {
    if (referentielActionWithScore.actionsEnfant?.length) {
      referentielActionWithScore.actionsEnfant.forEach((actionEnfant) => {
        this.affectScoreRecursivelyFromOrigineActions(actionEnfant);
      });
    }

    if (referentielActionWithScore.actionType === ActionType.SOUS_ACTION) {
      this.updateFromOrigineActions(referentielActionWithScore);
    } else {
      // Consolidate score from children
      this.mergeScoresEnfants(
        referentielActionWithScore.score,
        referentielActionWithScore.actionsEnfant.map((enfant) => enfant.score)
      );
      referentielActionWithScore.scoresOrigine = {};
      referentielActionWithScore.referentielsOrigine?.forEach(
        (referentielId) => {
          const originalConsolidatedScore: ActionPointScoreType = {
            pointFait: 0,
            pointProgramme: 0,
            pointPasFait: 0,
            pointNonRenseigne: 0,
            pointPotentiel: 0,
            pointReferentiel: 0,
          };
          this.mergePointScoresEnfants(
            originalConsolidatedScore,
            referentielActionWithScore.actionsEnfant.map((enfant) =>
              enfant.scoresOrigine && enfant.scoresOrigine[referentielId]
                ? enfant.scoresOrigine[referentielId]
                : {
                    pointFait: 0,
                    pointProgramme: 0,
                    pointPasFait: 0,
                    pointNonRenseigne: 0,
                    pointPotentiel: 0,
                    pointReferentiel: 0,
                  }
            ),
            true
          );
          referentielActionWithScore.scoresOrigine![referentielId] =
            originalConsolidatedScore;
        }
      );
    }

    // now that the score has been consolidated, we can compute the score by tag
    if (referentielActionWithScore.tags) {
      referentielActionWithScore.tags.forEach((tag) => {
        referentielActionWithScore.scoresTag[tag] =
          referentielActionWithScore.score;
      });
    }
    // Get all tags from children
    const allTags = [
      ...new Set(
        referentielActionWithScore.actionsEnfant
          .map((enfant) => Object.keys(enfant.scoresTag))
          .flat()
      ).values(),
    ];
    allTags.forEach((tag) => {
      // if the full score has not bee affected yet (= tag on parent)
      if (!referentielActionWithScore.scoresTag[tag]) {
        const scoreEnfant = referentielActionWithScore.actionsEnfant.map(
          (enfant) =>
            enfant.scoresTag[tag] || {
              point_fait: 0,
              point_programme: 0,
              point_pas_fait: 0,
              point_non_renseigne: 0,
              point_potentiel: enfant.score.pointPotentiel,
              point_referentiel: enfant.score.pointReferentiel,
            }
        );
        const consolidatedScore: ActionPointScoreType = {
          pointFait: 0,
          pointProgramme: 0,
          pointPasFait: 0,
          pointNonRenseigne: 0,
          pointPotentiel: 0,
          pointReferentiel: 0,
        };
        this.mergePointScoresEnfants(consolidatedScore, scoreEnfant, true);
        referentielActionWithScore.scoresTag[tag] = consolidatedScore;
      }
    });
  }

  fillScoreMap(
    score: ReferentielActionWithScoreType,
    scoreMap: GetActionScoresResponseType
  ) {
    scoreMap[score.actionId!] = score.score;
    score.actionsEnfant.forEach((actionEnfant) => {
      this.fillScoreMap(actionEnfant, scoreMap);
    });
    return scoreMap;
  }

  fillScorePercentageMap(
    score: ReferentielActionWithScoreType,
    scorePercentageMap: { [actionId: string]: number }
  ) {
    scorePercentageMap[score.actionId!] = score.score.pointPotentiel
      ? (score.score.pointFait || 0) / score.score.pointPotentiel
      : 0;
    score.actionsEnfant.forEach((actionEnfant) => {
      this.fillScorePercentageMap(actionEnfant, scorePercentageMap);
    });
    return scorePercentageMap;
  }

  computeScoreMap(
    referentiel: ReferentielActionType,
    personnalisationConsequences: GetPersonnalitionConsequencesResponseType,
    actionStatuts: GetActionStatutsResponseType,
    actionLevel: number
  ): GetActionScoresResponseType {
    const score = this.computeScore(
      referentiel,
      personnalisationConsequences,
      actionStatuts,
      actionLevel
    );

    const getActionScores: GetActionScoresResponseType = {};
    this.fillScoreMap(score, getActionScores);
    return getActionScores;
  }

  async computeScoreFromReferentielsOrigine(
    collectiviteId: number,
    parameters: GetReferentielScoresRequestType,
    referentiel: ReferentielActionType,
    personnalisationConsequences: GetPersonnalitionConsequencesResponseType,
    etoilesDefinitions?: LabellisationEtoileMetaType[]
  ): Promise<ReferentielActionWithScoreType> {
    const actionsOrigineMap: {
      [origineActionId: string]: ReferentielActionOrigineWithScoreType;
    } = {};

    const referentielAvecScore = this.buildReferentielAvecScore(
      referentiel,
      actionsOrigineMap
    );

    // On applique recursivement le facteur de potentiel perso
    this.appliquePersonnalisationPotentielPerso(
      referentielAvecScore,
      personnalisationConsequences
    );

    // On applique recursivement la desactivation liée à la personnalisation
    // la desactivation mais également le flag concerné à false
    this.appliquePersonnalisationDesactivation(
      referentielAvecScore,
      personnalisationConsequences,
      true // On met le point potentiel à 0 si c'est désactivé
    );

    // Recompute scores for origine referentiels
    // TODO: get already computed scores from database
    const referentielsOrigine = referentiel.referentielsOrigine || [];

    const scoreMap: GetActionScoresResponseType = {};
    if (parameters.mode === ComputeScoreMode.DEPUIS_SAUVEGARDE) {
      const referentielsOriginePromiseScores: Promise<{
        date: string;
        scoresMap: GetActionScoresResponseType;
      }>[] = [];
      if (parameters.date) {
        throw new HttpException(
          `Une date ne doit pas être fournie lorsqu'on veut récupérer les scores depuis une sauvegarde`,
          400
        );
      } else if (parameters.jalon) {
        // TODO:
      } else {
        // Get scores from sauvegarde
        referentielsOrigine.forEach((referentielOrigine) => {
          referentielsOriginePromiseScores.push(
            this.getClientScoresForCollectivite(
              referentielOrigine as ReferentielType,
              collectiviteId
            )
          );
        });
      }
      const referentielsOrigineScores = await Promise.all(
        referentielsOriginePromiseScores
      );
      referentielsOrigineScores.forEach((referentielOrigineScore) => {
        Object.keys(referentielOrigineScore.scoresMap).forEach((actionId) => {
          scoreMap[actionId] = referentielOrigineScore.scoresMap[actionId];
        });
      });
    } else {
      const referentielsOriginePromiseScores: Promise<GetReferentielScoresResponseType>[] =
        [];
      referentielsOrigine.forEach((referentielOrigine) => {
        referentielsOriginePromiseScores.push(
          this.computeScoreForCollectivite(
            referentielOrigine as ReferentielType,
            collectiviteId,
            {
              ...parameters,
              avecReferentielsOrigine: false,
            }
          )
        );
      });
      const referentielsOrigineScores = await Promise.all(
        referentielsOriginePromiseScores
      );
      referentielsOrigineScores.forEach((referentielOrigineScore) => {
        this.fillScoreMap(referentielOrigineScore.scores, scoreMap);
      });
    }

    // Apply scores to origine actions
    const actionOrigines = Object.keys(actionsOrigineMap);
    actionOrigines.forEach((origineActionId) => {
      const origineAction = actionsOrigineMap[origineActionId];
      if (scoreMap[origineActionId]) {
        origineAction.score = this.getActionPointScoreWithAvancement(
          scoreMap[origineActionId]
        );
      } else {
        this.logger.warn(
          `Score not found for origine action ${origineActionId}`
        );
      }
    });

    this.affectScoreRecursivelyFromOrigineActions(referentielAvecScore);
    //Reset original scores at the root level (not exactly the same in case some action have been removed in new referentiel)
    referentielsOrigine.forEach((referentielOrigine) => {
      referentielAvecScore.scoresOrigine![referentielOrigine] =
        this.getActionPointScore(scoreMap[referentielOrigine]);
    });

    if (etoilesDefinitions) {
      this.computeEtoiles(referentielAvecScore, etoilesDefinitions);
    }

    return referentielAvecScore;
  }

  computeScore(
    referentiel: ReferentielActionType,
    personnalisationConsequences: GetPersonnalitionConsequencesResponseType,
    actionStatuts: GetActionStatutsResponseType,
    actionLevel: number,
    etoilesDefinitions?: LabellisationEtoileMetaType[]
  ): ReferentielActionWithScoreType {
    const actionStatutsKeys = Object.keys(actionStatuts);
    for (const actionStatutKey of actionStatutsKeys) {
      const actionStatut = actionStatuts[actionStatutKey];
      // force le remplissage de l'avancement détaillé si il n'est pas renseigné
      this.fillAvancementDetailleFromAvancement(actionStatut);
    }

    const referentielAvecScore = this.buildReferentielAvecScore(referentiel);

    // On applique recursivement le facteur de potentiel perso
    this.appliquePersonnalisationPotentielPerso(
      referentielAvecScore,
      personnalisationConsequences
    );

    // On applique recursivement la desactivation liée à la personnalisation
    // la desactivation mais également le flag concerné à false
    this.appliquePersonnalisationDesactivation(
      referentielAvecScore,
      personnalisationConsequences
    );

    // On désactive les actions non concernées
    // on remonte aux parents pour les rendre non concernés si tous les enfants sont non concernés
    this.appliqueActionStatutNonConcerneEtRemonteAuxParents(
      referentielAvecScore,
      actionStatuts
    );

    // On redistribue les points liés aux actions désactivées et non concernées aux action frères/soeurs
    this.redistribuePotentielActionsDesactiveesNonConcernees(
      referentielAvecScore,
      actionLevel
    );

    // On prend en compte les avancements des actions
    this.appliqueActionAvancementEtRemonteAuxParents(
      referentielAvecScore,
      actionStatuts
    );

    // personalisation scores
    const scorePercentages = this.fillScorePercentageMap(
      referentielAvecScore,
      {}
    );
    this.appliquePersonnalisationScore(
      referentielAvecScore,
      personnalisationConsequences,
      scorePercentages
    );

    this.appliqueRounding(referentielAvecScore);

    if (etoilesDefinitions) {
      this.computeEtoiles(referentielAvecScore, etoilesDefinitions);
    }

    return referentielAvecScore;
  }

  async getCamelcaseKeysFunction(): Promise<any> {
    const module = await (eval(`import('camelcase-keys')`) as Promise<any>);
    return module.default;
  }

  async getScoresResultFromDb(
    referentiel: ReferentielActionType,
    collectiviteId: number,
    jalon: ScoreJalon,
    auditId?: number
  ): Promise<{
    date: string;
    referentielWithScore: ReferentielActionWithScoreType;
  }> {
    let scoresResult:
      | {
          date: string;
          scoresMap: GetActionScoresResponseType;
        }
      | undefined = undefined;
    if (jalon === ScoreJalon.SCORE_COURANT) {
      scoresResult = await this.getClientScoresForCollectivite(
        referentiel.actionId as ReferentielType,
        collectiviteId
      );
    } else if (jalon === ScoreJalon.DEBUT_AUDIT) {
      scoresResult = await this.getPreAuditScoresForCollectivite(
        referentiel.actionId as ReferentielType,
        collectiviteId,
        auditId!
      );
    } else if (jalon === ScoreJalon.FIN_AUDIT) {
      scoresResult = await this.getPostAuditScoresForCollectivite(
        referentiel.actionId as ReferentielType,
        collectiviteId,
        auditId!
      );
    }

    if (!scoresResult) {
      throw new HttpException(
        `Score non enregistré en base de données pour la collectivité ${collectiviteId}, le référentiel ${referentiel.actionId} et le jalon ${jalon}`,
        400
      );
    }

    const referentielWithScore = this.buildReferentielAvecScore(
      referentiel,
      undefined,
      scoresResult.scoresMap
    );
    return {
      date: scoresResult.date,
      referentielWithScore,
    };
  }

  async getClientScoresForCollectivite(
    referentielId: ReferentielType,
    collectiviteId: number
  ): Promise<{
    date: string;
    scoresMap: GetActionScoresResponseType;
  }> {
    this.logger.log(
      `Récupération des scores courants de la collectivité ${collectiviteId} pour le referentiel ${referentielId}`
    );

    const scores = await this.databaseService.db
      .select()
      .from(clientScoresTable)
      .where(
        and(
          eq(clientScoresTable.referentiel, referentielId),
          eq(clientScoresTable.collectiviteId, collectiviteId)
        )
      );
    return this.getFirstDatabaseScoreFromJsonb(scores);
  }

  async getFirstDatabaseScoreFromJsonb(
    scoreRecords: ClientScoresType[]
  ): Promise<{
    date: string;
    scoresMap: GetActionScoresResponseType;
  }> {
    if (!scoreRecords.length) {
      throw new NotFoundException(`No scores found`);
    }

    if (!scoreRecords[0].payloadTimestamp || !scoreRecords[0].scores) {
      throw new HttpException(`Invalid scores`, 500);
    }

    const getActionScoresResponse: GetActionScoresResponseType = {};

    const lastScoreDate = scoreRecords[0].payloadTimestamp;
    this.logger.log(`Last score date: ${lastScoreDate.toISOString()}`);

    // Due to esm import
    // See https://stackoverflow.com/questions/74830166/unable-to-import-esm-module-in-nestjs
    const camelcaseKeys = await this.getCamelcaseKeysFunction();
    const scoreList = (scoreRecords[0].scores as any[]).map(
      (score) => camelcaseKeys(score) as ActionScoreType
    ) as ActionScoreType[];
    scoreList.forEach((score) => {
      getActionScoresResponse[score.actionId] = score;
    });

    return {
      date: lastScoreDate.toISOString(),
      scoresMap: getActionScoresResponse,
    };
  }

  async getPreAuditScoresForCollectivite(
    referentielId: ReferentielType,
    collectiviteId: number,
    auditId: number
  ): Promise<{
    date: string;
    scoresMap: GetActionScoresResponseType;
  }> {
    this.logger.log(
      `Récupération des pre-audit scores de la collectivité ${collectiviteId} pour le referentiel ${referentielId}`
    );

    const scores = await this.databaseService.db
      .select()
      .from(preAuditScoresTable)
      .where(
        and(
          eq(preAuditScoresTable.referentiel, referentielId),
          eq(preAuditScoresTable.collectiviteId, collectiviteId),
          eq(preAuditScoresTable.auditId, auditId)
        )
      );
    return this.getFirstDatabaseScoreFromJsonb(scores);
  }

  async getPostAuditScoresForCollectivite(
    referentielId: ReferentielType,
    collectiviteId: number,
    auditId: number
  ): Promise<{
    date: string;
    scoresMap: GetActionScoresResponseType;
  }> {
    this.logger.log(
      `Récupération des post-audit scores de la collectivité ${collectiviteId} pour le referentiel ${referentielId}`
    );

    const scores = await this.databaseService.db
      .select()
      .from(postAuditScoresTable)
      .where(
        and(
          eq(postAuditScoresTable.referentiel, referentielId),
          eq(postAuditScoresTable.collectiviteId, collectiviteId),
          eq(postAuditScoresTable.auditId, auditId)
        )
      );
    return this.getFirstDatabaseScoreFromJsonb(scores);
  }

  async checkScoreForCollectivite(
    referentielId: ReferentielType,
    collectiviteId: number
  ): Promise<GetCheckScoresResponseType> {
    this.logger.log(
      `Vérification du score de la collectivité ${collectiviteId} pour le referentiel ${referentielId}`
    );

    const savedScoreResult = await this.getClientScoresForCollectivite(
      referentielId,
      collectiviteId
    );

    const { scores } = await this.computeScoreForCollectivite(
      referentielId,
      collectiviteId,
      { date: savedScoreResult.date, mode: ComputeScoreMode.RECALCUL }
    );
    const scoreMap = this.fillScoreMap(scores, {});
    const getReferentielScores: GetCheckScoresResponseType = {
      date: savedScoreResult.date,
      differences: {},
    };
    const actionIds = Object.keys(scoreMap);
    actionIds.forEach((actionId) => {
      const savedScore = savedScoreResult.scoresMap[actionId];
      if (!_.isEqual(savedScore, scoreMap[actionId])) {
        const scoreDiff = this.getScoreDiff(scoreMap[actionId], savedScore);
        if (scoreDiff) {
          getReferentielScores.differences[actionId] = scoreDiff;
        }
      }
    });
    return getReferentielScores;
  }

  getScoreDiff(
    computedScore: ActionScoreType,
    savedScore: ActionScoreType | undefined | null
  ): {
    sauvegarde: Partial<ActionScoreType>;
    calcule: Partial<ActionScoreType>;
  } | null {
    const savedScoreDiff: any = {};
    let scoreMapDiff: any = {};
    const scoreMapKeys = [
      ...new Set(
        Object.keys(computedScore).concat(Object.keys(savedScore || {}))
      ).values(),
    ] as (keyof ActionScoreType)[];
    let hasDiff = false;
    if (savedScore) {
      for (const key of scoreMapKeys) {
        // We ignore renseigne (weird value in python) and point_potentiel_perso for now
        if (
          key !== 'aStatut' && // Not existing in python code
          key !== 'etoiles' && // Not existing in python code
          key !== 'renseigne' &&
          key !== 'pointPotentielPerso'
        ) {
          // @ts-ignore
          if (!_.isEqual(savedScore[key], computedScore[key])) {
            hasDiff = true;

            if (
              key !== 'pointFait' &&
              key !== 'pointPotentiel' &&
              key !== 'pointReferentiel' &&
              key !== 'pointNonRenseigne' &&
              key !== 'pointProgramme' &&
              key !== 'pointPasFait'
            ) {
              hasDiff = true;
            } else {
              if (
                typeof savedScore[key] === 'number' &&
                typeof computedScore[key] === 'number'
              ) {
                const diff = Math.abs(savedScore[key] - computedScore[key]);
                const diffThreshold =
                  1 /
                    Math.pow(
                      10,
                      ReferentielsScoringService.DEFAULT_ROUNDING_DIGITS
                    ) +
                  Number.EPSILON;
                if (diff <= diffThreshold) {
                  hasDiff = false;
                } else {
                  hasDiff = true;
                }
              } else {
                hasDiff = true;
              }
            }

            if (hasDiff) {
              // @ts-ignore
              savedScoreDiff[key] = savedScore[key];
              // @ts-ignore
              scoreMapDiff[key] = computedScore[key];
            }
          }
        }
      }
    } else {
      scoreMapDiff = computedScore;
    }

    if (hasDiff) {
      return {
        sauvegarde: savedScoreDiff,
        calcule: scoreMapDiff,
      };
    }
    return null;
  }
}