import { Injectable, Logger } from '@nestjs/common';
import {
  and,
  eq,
  gte,
  inArray,
  isNotNull,
  isNull,
  lte,
  or,
  sql,
  SQL,
  SQLWrapper,
} from 'drizzle-orm';
import { groupBy, partition } from 'es-toolkit';
import * as _ from 'lodash';
import {
  NiveauAcces,
  SupabaseJwtPayload,
  SupabaseRole,
} from '../../auth/models/auth.models';
import { AuthService } from '../../auth/services/auth.service';
import DatabaseService from '../../common/services/database.service';
import { DeleteIndicateursValeursRequestType } from '../models/deleteIndicateurs.models';
import {
  GetIndicateursValeursRequestType,
  GetIndicateursValeursResponseType,
} from '../models/getIndicateurs.models';
import {
  CreateIndicateurValeurType,
  IndicateurAvecValeursParSource,
  IndicateurAvecValeursType,
  indicateurDefinitionTable,
  IndicateurDefinitionType,
  indicateurSourceMetadonneeTable,
  IndicateurSourceMetadonneeType,
  IndicateurValeurAvecMetadonnesDefinition,
  IndicateurValeurGroupee,
  IndicateurValeursGroupeeParSource,
  indicateurValeurTable,
  IndicateurValeurType,
  MinimalIndicateurDefinitionType,
} from '../models/indicateur.models';

@Injectable()
export default class IndicateursService {
  private readonly logger = new Logger(IndicateursService.name);

  /**
   * Quand la source_id est NULL, cela signifie que ce sont des donnees saisies par la collectivite
   */
  public readonly NULL_SOURCE_ID = 'collectivite';

  public readonly UNKOWN_SOURCE_ID = 'unknown';

  constructor(
    private readonly databaseService: DatabaseService,
    private readonly authService: AuthService,
  ) {}

  private getIndicateurValeursSqlConditions(
    options: GetIndicateursValeursRequestType,
  ): (SQLWrapper | SQL)[] {
    const conditions: (SQLWrapper | SQL)[] = [
      eq(indicateurValeurTable.collectivite_id, options.collectivite_id),
    ];
    if (
      options.identifiants_referentiel &&
      options.identifiants_referentiel.length > 0
    ) {
      conditions.push(
        inArray(
          indicateurDefinitionTable.identifiant_referentiel,
          options.identifiants_referentiel,
        ),
      );
    }
    if (options.date_debut) {
      conditions.push(
        gte(indicateurValeurTable.date_valeur, options.date_debut),
      );
    }
    if (options.date_fin) {
      conditions.push(lte(indicateurValeurTable.date_valeur, options.date_fin));
    }
    if (options.indicateur_id) {
      conditions.push(eq(indicateurValeurTable.id, options.indicateur_id));
    }
    if (options.sources?.length) {
      const nullSourceId = options.sources.includes(this.NULL_SOURCE_ID);
      if (nullSourceId) {
        const autreSourceIds = options.sources.filter(
          (s) => s !== this.NULL_SOURCE_ID,
        );
        if (autreSourceIds.length) {
          const orCondition = or(
            isNull(indicateurSourceMetadonneeTable.source_id),
            inArray(indicateurSourceMetadonneeTable.source_id, autreSourceIds),
          );
          if (orCondition) {
            conditions.push(orCondition);
          }
        } else {
          conditions.push(isNull(indicateurSourceMetadonneeTable.source_id));
        }
      } else {
        conditions.push(
          inArray(indicateurSourceMetadonneeTable.source_id, options.sources),
        );
      }
    }
    return conditions;
  }

  /**
   * Récupère les valeurs d'indicateurs selon les options données
   * @param options
   */
  async getIndicateursValeurs(options: GetIndicateursValeursRequestType) {
    this.logger.log(
      `Récupération des valeurs des indicateurs selon ces options : ${JSON.stringify(options)}`,
    );

    const conditions = this.getIndicateurValeursSqlConditions(options);

    let result = await this.databaseService.db
      .select()
      .from(indicateurValeurTable)
      .leftJoin(
        indicateurDefinitionTable,
        eq(indicateurValeurTable.indicateur_id, indicateurDefinitionTable.id),
      )
      .leftJoin(
        indicateurSourceMetadonneeTable,
        eq(
          indicateurValeurTable.metadonnee_id,
          indicateurSourceMetadonneeTable.id,
        ),
      )
      .where(and(...conditions));

    this.logger.log(`Récupération de ${result.length} valeurs d'indicateurs`);
    if (!options.ignore_dedoublonnage) {
      // Gère le cas où plusieurs fois la même source avec des métadonnées différentes > on garde les données de la métadonnée la plus récente
      result = this.dedoublonnageIndicateurValeursParSource(result);

      this.logger.log(
        `${result.length} valeurs d'indicateurs après dédoublonnage`,
      );
    }

    return result;
  }

  async deleteIndicateurValeurs(options: DeleteIndicateursValeursRequestType) {
    this.logger.log(
      `Suppression des valeurs des indicateurs selon ces options : ${JSON.stringify(options)}`,
    );

    const conditions: (SQLWrapper | SQL)[] = [
      eq(indicateurValeurTable.collectivite_id, options.collectivite_id),
    ];
    if (options.indicateur_id) {
      conditions.push(
        eq(indicateurValeurTable.indicateur_id, options.indicateur_id),
      );
    }
    if (options.metadonnee_id) {
      conditions.push(
        eq(indicateurValeurTable.metadonnee_id, options.metadonnee_id),
      );
    }

    const deleteQuery = this.databaseService.db
      .delete(indicateurValeurTable)
      .where(and(...conditions));

    const deletedIds = await deleteQuery.returning({
      id: indicateurValeurTable.id,
    });
    this.logger.log(
      `${deletedIds.length} valeurs d'indicateurs ont été supprimées`,
    );
    return { indicateur_valeur_ids_supprimes: deletedIds };
  }

  async getIndicateurValeursGroupees(
    options: GetIndicateursValeursRequestType,
    tokenInfo: SupabaseJwtPayload,
  ): Promise<GetIndicateursValeursResponseType> {
    await this.authService.verifieAccesAuxCollectivites(
      tokenInfo,
      [options.collectivite_id],
      NiveauAcces.LECTURE,
    );

    const indicateurValeurs = await this.getIndicateursValeurs(options);
    const indicateurValeursSeules = indicateurValeurs.map(
      (v) => v.indicateur_valeur,
    );
    const initialDefinitionsAcc: { [key: string]: IndicateurDefinitionType } =
      {};
    let uniqueIndicateurDefinitions: IndicateurDefinitionType[];
    if (!options.identifiants_referentiel?.length) {
      uniqueIndicateurDefinitions = Object.values(
        indicateurValeurs.reduce((acc, v) => {
          if (v.indicateur_definition?.id) {
            acc[v.indicateur_definition.id.toString()] =
              v.indicateur_definition;
          }
          return acc;
        }, initialDefinitionsAcc),
      ) as IndicateurDefinitionType[];
    } else {
      uniqueIndicateurDefinitions =
        await this.getReferentielIndicateurDefinitions(
          options.identifiants_referentiel,
        );
      options.identifiants_referentiel.forEach((identifiant) => {
        if (
          !uniqueIndicateurDefinitions.find(
            (d) => d.identifiant_referentiel === identifiant,
          )
        ) {
          this.logger.warn(
            `Définition de l'indicateur avec l'identifiant référentiel ${identifiant} introuvable`,
          );
        }
      });
    }

    uniqueIndicateurDefinitions.sort((a, b) => {
      if (!a.identifiant_referentiel && !b.identifiant_referentiel) {
        return 0;
      }
      if (!a.identifiant_referentiel) {
        return 1;
      }
      if (!b.identifiant_referentiel) {
        return -1;
      }
      return a.identifiant_referentiel.localeCompare(b.identifiant_referentiel);
    });

    const initialMetadonneesAcc: {
      [key: string]: IndicateurSourceMetadonneeType;
    } = {};
    const uniqueIndicateurMetadonnees = Object.values(
      indicateurValeurs.reduce((acc, v) => {
        if (v.indicateur_source_metadonnee?.id) {
          acc[v.indicateur_source_metadonnee.id.toString()] =
            v.indicateur_source_metadonnee;
        }
        return acc;
      }, initialMetadonneesAcc),
    ) as IndicateurSourceMetadonneeType[];

    const indicateurValeurGroupeesParSource =
      this.groupeIndicateursValeursParIndicateurEtSource(
        indicateurValeursSeules,
        uniqueIndicateurDefinitions,
        uniqueIndicateurMetadonnees,
        false,
      );
    return { indicateurs: indicateurValeurGroupeesParSource };
  }

  async getReferentielIndicateurDefinitions(identifiantsReferentiel: string[]) {
    this.logger.log(
      `Récupération des définitions des indicateurs ${identifiantsReferentiel.join(',')}`,
    );
    const definitions = await this.databaseService.db
      .select()
      .from(indicateurDefinitionTable)
      .where(
        inArray(
          indicateurDefinitionTable.identifiant_referentiel,
          identifiantsReferentiel,
        ),
      );
    this.logger.log(`${definitions.length} définitions trouvées`);
    return definitions;
  }

  async upsertIndicateurValeurs(
    indicateurValeurs: CreateIndicateurValeurType[],
    tokenInfo?: SupabaseJwtPayload,
  ): Promise<IndicateurValeurType[]> {
    if (tokenInfo) {
      const collectiviteIds = [
        ...new Set(indicateurValeurs.map((v) => v.collectivite_id)),
      ];
      await this.authService.verifieAccesAuxCollectivites(
        tokenInfo,
        collectiviteIds,
        NiveauAcces.EDITION,
      );

      if (tokenInfo.role === SupabaseRole.AUTHENTICATED && tokenInfo.sub) {
        indicateurValeurs.forEach((v) => {
          v.created_by = tokenInfo.sub;
          v.modified_by = tokenInfo.sub;
        });
      }
    }

    this.logger.log(
      `Upsert des ${indicateurValeurs.length} valeurs des indicateurs pour l'utilisateur ${tokenInfo?.sub} (role ${tokenInfo?.role})`,
    );
    // On doit distinguer les valeurs avec et sans métadonnées car la clause d'unicité est différente (onConflictDoUpdate)
    const [indicateurValeursAvecMetadonnees, indicateurValeursSansMetadonnees] =
      partition(indicateurValeurs, (v) => Boolean(v.metadonnee_id));

    const indicateurValeursResultat: IndicateurValeurType[] = [];
    if (indicateurValeursAvecMetadonnees.length) {
      this.logger.log(
        `Upsert des ${indicateurValeursAvecMetadonnees.length} valeurs avec métadonnées des indicateurs ${[
          ...new Set(
            indicateurValeursAvecMetadonnees.map((v) => v.indicateur_id),
          ),
        ].join(
          ',',
        )} pour les collectivités ${[...new Set(indicateurValeursAvecMetadonnees.map((v) => v.collectivite_id))].join(',')}`,
      );
      const indicateurValeursAvecMetadonneesResultat =
        await this.databaseService.db
          .insert(indicateurValeurTable)
          .values(indicateurValeursAvecMetadonnees)
          .onConflictDoUpdate({
            target: [
              indicateurValeurTable.indicateur_id,
              indicateurValeurTable.collectivite_id,
              indicateurValeurTable.date_valeur,
              indicateurValeurTable.metadonnee_id,
            ],
            targetWhere: isNotNull(indicateurValeurTable.metadonnee_id),
            set: {
              resultat: sql.raw(
                `excluded.${indicateurValeurTable.resultat.name}`,
              ),
              resultat_commentaire: sql.raw(
                `excluded.${indicateurValeurTable.resultat_commentaire.name}`,
              ),
              objectif: sql.raw(
                `excluded.${indicateurValeurTable.objectif.name}`,
              ),
              objectif_commentaire: sql.raw(
                `excluded.${indicateurValeurTable.objectif_commentaire.name}`,
              ),
              modified_by: sql.raw(
                `excluded.${indicateurValeurTable.modified_by.name}`,
              ),
            },
          })
          .returning();
      indicateurValeursResultat.push(
        ...indicateurValeursAvecMetadonneesResultat,
      );
    }

    if (indicateurValeursSansMetadonnees.length) {
      this.logger.log(
        `Upsert des ${indicateurValeursSansMetadonnees.length} valeurs sans métadonnées des indicateurs ${[
          ...new Set(
            indicateurValeursSansMetadonnees.map((v) => v.indicateur_id),
          ),
        ].join(
          ',',
        )} pour les collectivités ${[...new Set(indicateurValeursSansMetadonnees.map((v) => v.collectivite_id))].join(',')}`,
      );
      const indicateurValeursSansMetadonneesResultat =
        await this.databaseService.db
          .insert(indicateurValeurTable)
          .values(indicateurValeursSansMetadonnees)
          .onConflictDoUpdate({
            target: [
              indicateurValeurTable.indicateur_id,
              indicateurValeurTable.collectivite_id,
              indicateurValeurTable.date_valeur,
            ],
            targetWhere: isNull(indicateurValeurTable.metadonnee_id),
            set: {
              resultat: sql.raw(
                `excluded.${indicateurValeurTable.resultat.name}`,
              ),
              resultat_commentaire: sql.raw(
                `excluded.${indicateurValeurTable.resultat_commentaire.name}`,
              ),
              objectif: sql.raw(
                `excluded.${indicateurValeurTable.objectif.name}`,
              ),
              objectif_commentaire: sql.raw(
                `excluded.${indicateurValeurTable.objectif_commentaire.name}`,
              ),
              modified_by: sql.raw(
                `excluded.${indicateurValeurTable.modified_by.name}`,
              ),
            },
          })
          .returning();
      indicateurValeursResultat.push(
        ...indicateurValeursSansMetadonneesResultat,
      );
    }
    return indicateurValeursResultat;
  }

  dedoublonnageIndicateurValeursParSource(
    indicateurValeurs: IndicateurValeurAvecMetadonnesDefinition[],
  ): IndicateurValeurAvecMetadonnesDefinition[] {
    const initialAcc: {
      [key: string]: IndicateurValeurAvecMetadonnesDefinition;
    } = {};
    const uniqueIndicateurValeurs = Object.values(
      indicateurValeurs.reduce((acc, v) => {
        const cleUnicite = `${v.indicateur_valeur.indicateur_id}_${v.indicateur_valeur.collectivite_id}_${v.indicateur_valeur.date_valeur}_${v.indicateur_source_metadonnee?.source_id || this.NULL_SOURCE_ID}`;
        if (!acc[cleUnicite]) {
          acc[cleUnicite] = v;
        } else {
          // On garde la valeur la plus récente en priorité
          if (
            v.indicateur_source_metadonnee &&
            acc[cleUnicite].indicateur_source_metadonnee &&
            v.indicateur_source_metadonnee.date_version >
              acc[cleUnicite].indicateur_source_metadonnee.date_version
          ) {
            acc[cleUnicite] = v;
          }
        }
        return acc;
      }, initialAcc),
    ) as IndicateurValeurAvecMetadonnesDefinition[];
    return uniqueIndicateurValeurs;
  }

  groupeIndicateursValeursParIndicateur(
    indicateurValeurs: IndicateurValeurType[],
    indicateurDefinitions: IndicateurDefinitionType[],
    commentairesNonInclus = false,
  ): IndicateurAvecValeursType[] {
    const initialDefinitionsAcc: {
      [key: string]: MinimalIndicateurDefinitionType;
    } = {};
    const uniqueIndicateurDefinitions = Object.values(
      indicateurDefinitions.reduce((acc, def) => {
        if (def?.id) {
          const minimaleIndicateurDefinition = _.pick<IndicateurDefinitionType>(
            def,
            [
              'id',
              'identifiant_referentiel',
              'titre',
              'titre_long',
              'description',
              'unite',
              'borne_min',
              'borne_max',
            ],
          ) as MinimalIndicateurDefinitionType;
          acc[def.id.toString()] = minimaleIndicateurDefinition;
        }
        return acc;
      }, initialDefinitionsAcc),
    ) as IndicateurDefinitionType[];

    const indicateurAvecValeurs = uniqueIndicateurDefinitions.map(
      (indicateurDefinition) => {
        const valeurs = indicateurValeurs
          .filter((v) => v.indicateur_id === indicateurDefinition.id)
          .map((v) => {
            const indicateurValeurGroupee: IndicateurValeurGroupee = {
              id: v.id,
              date_valeur: v.date_valeur,
              resultat: v.resultat,
              objectif: v.objectif,
              metadonnee_id: null,
            };
            if (!commentairesNonInclus) {
              indicateurValeurGroupee.resultat_commentaire =
                v.resultat_commentaire;
              indicateurValeurGroupee.objectif_commentaire =
                v.objectif_commentaire;
            }
            return _.omitBy(
              indicateurValeurGroupee,
              _.isNil,
            ) as IndicateurValeurGroupee;
          });
        // Trie les valeurs par date
        valeurs.sort((a, b) => {
          return a.date_valeur.localeCompare(b.date_valeur);
        });
        const indicateurAvecValeurs: IndicateurAvecValeursType = {
          definition: indicateurDefinition,
          valeurs,
        };
        return indicateurAvecValeurs;
      },
    );
    return indicateurAvecValeurs.filter((i) => i.valeurs.length > 0);
  }

  groupeIndicateursValeursParIndicateurEtSource(
    indicateurValeurs: IndicateurValeurType[],
    indicateurDefinitions: IndicateurDefinitionType[],
    indicateurMetadonnees: IndicateurSourceMetadonneeType[],
    supprimeIndicateursSansValeurs = true,
  ): IndicateurAvecValeursParSource[] {
    const initialDefinitionsAcc: { [key: string]: IndicateurDefinitionType } =
      {};
    const uniqueIndicateurDefinitions = Object.values(
      indicateurDefinitions.reduce((acc, def) => {
        if (def?.id) {
          acc[def.id.toString()] = def;
        }
        return acc;
      }, initialDefinitionsAcc),
    ) as IndicateurDefinitionType[];

    const indicateurAvecValeurs = uniqueIndicateurDefinitions.map(
      (indicateurDefinition) => {
        const valeurs = indicateurValeurs
          .filter((v) => v.indicateur_id === indicateurDefinition.id)
          .map((v) => {
            const indicateurValeurGroupee: IndicateurValeurGroupee = {
              id: v.id,
              date_valeur: v.date_valeur,
              resultat: v.resultat,
              resultat_commentaire: v.resultat_commentaire,
              objectif: v.objectif,
              objectif_commentaire: v.objectif_commentaire,
              metadonnee_id: v.metadonnee_id,
            };
            return _.omitBy(
              indicateurValeurGroupee,
              _.isNil,
            ) as IndicateurValeurGroupee;
          });

        const metadonneesUtilisees: Record<
          string,
          Record<string, IndicateurSourceMetadonneeType>
        > = {};
        const valeursParSource = groupBy(valeurs, (valeur) => {
          if (!valeur.metadonnee_id) {
            return this.NULL_SOURCE_ID;
          }
          const metadonnee = indicateurMetadonnees.find(
            (m) => m.id === valeur.metadonnee_id,
          );
          if (!metadonnee) {
            this.logger.warn(
              `Metadonnée introuvable pour l'identifiant ${valeur.metadonnee_id}`,
            );
            return this.UNKOWN_SOURCE_ID;
          } else {
            if (!metadonneesUtilisees[metadonnee.source_id]) {
              metadonneesUtilisees[metadonnee.source_id] = {};
            }
            if (!metadonneesUtilisees[metadonnee.source_id][metadonnee.id]) {
              metadonneesUtilisees[metadonnee.source_id][metadonnee.id] =
                metadonnee;
            }
            return metadonnee.source_id;
          }
        });
        const sourceMap: Record<string, IndicateurValeursGroupeeParSource> = {};
        for (const sourceId of Object.keys(valeursParSource)) {
          // Trie les valeurs par date
          valeursParSource[sourceId] = valeursParSource[sourceId].sort(
            (a, b) => {
              return a.date_valeur.localeCompare(b.date_valeur);
            },
          );
          sourceMap[sourceId] = {
            source: sourceId,
            metadonnees: Object.values(metadonneesUtilisees[sourceId] || {}),
            valeurs: valeursParSource[sourceId],
          };
        }
        const IndicateurAvecValeursParSource: IndicateurAvecValeursParSource = {
          definition: indicateurDefinition,
          sources: sourceMap,
        };
        return IndicateurAvecValeursParSource;
      },
    );

    if (supprimeIndicateursSansValeurs) {
      return indicateurAvecValeurs.filter(
        (i) => Object.keys(i.sources).length > 0,
      );
    } else {
      return indicateurAvecValeurs;
    }
  }
}