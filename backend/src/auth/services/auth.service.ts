import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { and, eq, inArray, SQL, SQLWrapper } from 'drizzle-orm';
import CollectivitesService from '../../collectivites/services/collectivites.service';
import DatabaseService from '../../common/services/database.service';
import {
  NiveauAcces,
  niveauAccessOrdonne,
  utilisateurDroitTable,
  UtilisateurDroitType,
} from '../models/private-utilisateur-droit.table';
import {
  AuthenticatedUser,
  UserRole,
} from '../models/authenticated-user.models';
import { utilisateurSupportTable } from '../models/utilisateur-support.table';
import { utilisateurVerifieTable } from '../models/utilisateur-verifie.table';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly databaseService: DatabaseService,
    private readonly collectiviteService: CollectivitesService
  ) {}

  aDroitsSuffisants(
    role: UserRole,
    droits: UtilisateurDroitType[],
    collectiviteIds: number[],
    niveauAccessMinimum: NiveauAcces
  ): boolean {
    if (role === UserRole.SERVICE_ROLE) {
      this.logger.log(
        `Rôle de service détecté, accès autorisé à toutes les collectivités`
      );
      return true;
    } else if (role === UserRole.AUTHENTICATED) {
      const niveauAccessMinimumIndex =
        niveauAccessOrdonne.indexOf(niveauAccessMinimum);

      for (const collectiviteId of collectiviteIds) {
        const droit = droits.find(
          (droit) =>
            droit.collectiviteId.toString() === collectiviteId.toString() // Etrangement collectiviteId est un string
        );
        if (!droit) {
          this.logger.log(
            `Droit introuvable pour la collectivité ${collectiviteId}`
          );
          return false;
        }

        if (!droit.active) {
          this.logger.log(
            `Droit inactif pour la collectivité ${collectiviteId} et l'utilisateur ${droit.userId}`
          );
          return false;
        }

        const droitNiveauAccessIndex = niveauAccessOrdonne.indexOf(
          droit.niveauAcces
        );
        if (droitNiveauAccessIndex < niveauAccessMinimumIndex) {
          this.logger.log(
            `Niveau d'accès insuffisant pour la collectivité ${collectiviteId} et l'utilisateur ${droit.userId} (niveau d'accès: ${droit.niveauAcces}, demandé: ${niveauAccessMinimum})`
          );
          return false;
        }
      }
      return true;
    }
    return false;
  }

  async getDroitsUtilisateur(
    userId: string,
    collectiviteIds?: number[]
  ): Promise<UtilisateurDroitType[]> {
    this.logger.log(
      `Récupération des droits de l'utilisateur ${userId} et les collectivités ${collectiviteIds?.join(
        ', '
      )}`
    );
    const conditions: (SQLWrapper | SQL)[] = [
      eq(utilisateurDroitTable.userId, userId),
    ];
    if (collectiviteIds?.length) {
      conditions.push(
        inArray(utilisateurDroitTable.collectiviteId, collectiviteIds)
      );
    }
    const droits = await this.databaseService.db
      .select()
      .from(utilisateurDroitTable)
      .where(and(...conditions));
    this.logger.log(`${droits.length} droits récupérés`);
    return droits;
  }

  async verifieAccesAuxCollectivites(
    user: AuthenticatedUser,
    collectiviteIds: number[],
    niveauAccessMinimum: NiveauAcces,
    doNotThrow?: boolean
  ): Promise<boolean> {
    let droits: UtilisateurDroitType[] = [];
    const userId = user.id;
    if (user.role === UserRole.AUTHENTICATED && userId) {
      droits = await this.getDroitsUtilisateur(userId, collectiviteIds);
    }
    const authorise = this.aDroitsSuffisants(
      user?.role,
      droits,
      collectiviteIds,
      niveauAccessMinimum
    );
    if (!authorise && !doNotThrow) {
      throw new UnauthorizedException(`Droits insuffisants`);
    }
    return authorise;
  }

  /**
   * Vérifie si l'utilisateur a un rôle support
   * @param user token de l'utilisateur
   * @return vrai si l'utilisateur a un rôle support
   */
  async estSupport(user: AuthenticatedUser): Promise<boolean> {
    const userId = user.id;
    if (user.role === UserRole.AUTHENTICATED && userId) {
      const result = await this.databaseService.db
        .select()
        .from(utilisateurSupportTable)
        .where(eq(utilisateurSupportTable.userId, userId));
      return result[0].support || false;
    }
    return false;
  }

  /**
   * Vérifie si l'utilisateur est vérifié
   * @param user token de l'utilisateur
   * @return vrai si l'utilisateur est vérifié
   */
  async estVerifie(user: AuthenticatedUser): Promise<boolean> {
    const userId = user.id;
    if (user.role === UserRole.AUTHENTICATED && userId) {
      const result = await this.databaseService.db
        .select()
        .from(utilisateurVerifieTable)
        .where(eq(utilisateurVerifieTable.userId, userId));
      return result[0].verifie || false;
    }
    return false;
  }

  /**
   * Vérifie si un utilisateur a accès en lecture à une collectivité
   * en prenant en compte la restriction possible de la collectivité
   * @param user token de l'utilisateur
   * @param collectiviteId identifiant de la collectivité
   * @param doNotThrow vrai pour ne pas générer une exception
   */
  async verifieAccesRestreintCollectivite(
    user: AuthenticatedUser,
    collectiviteId: number,
    doNotThrow?: boolean
  ): Promise<boolean> {
    if (user.role === UserRole.SERVICE_ROLE) {
      this.logger.log(
        `Rôle de service détecté, accès autorisé à toutes les collectivités`
      );
      return true;
    } else if (user.role === UserRole.AUTHENTICATED) {
      let authorise = false;
      const collectivite = await this.collectiviteService.getCollectivite(
        collectiviteId
      );
      if (collectivite.collectivite.accessRestreint) {
        // Si la collectivité est en accès restreint, l'utilisateur doit :
        // avoir un droit en lecture sur la collectivité, ou avoir un rôle support,
        // ou être un auditeur d'un audit courant de la collectivité.
        authorise =
          (await this.verifieAccesAuxCollectivites(
            user,
            [collectiviteId],
            NiveauAcces.LECTURE,
            doNotThrow
          )) || (await this.estSupport(user)); // TODO || private.est_auditeur(collectivite_id)
      } else {
        // Si la collectivité n'est pas en accès restreint, l'utilisateur doit :
        // être vérifié, ou s'il ne l'est pas, avoir un droit en lecture sur la collectivité.
        authorise =
          (await this.estVerifie(user)) ||
          (await this.verifieAccesAuxCollectivites(
            user,
            [collectiviteId],
            NiveauAcces.LECTURE,
            doNotThrow
          ));
      }
      if (!authorise && !doNotThrow) {
        throw new UnauthorizedException(`Droits insuffisants`);
      }
      return authorise;
    }
    return false;
  }
}
