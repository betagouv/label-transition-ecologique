import { Injectable } from '@nestjs/common';
import { ficheActionEtapeTable } from './fiche-action-etape.table';
import { eq, and, gte, sql, lt, gt, lte } from 'drizzle-orm';
import {
  FicheActionEtapeType,
  UpsertFicheActionEtapeType,
} from './fiche-action-etape.table';
import { AuthenticatedUser } from '../../auth/models/auth.models';
import FicheService from '../services/fiche.service';
import DatabaseService from '../../common/services/database.service';

@Injectable()
export class FicheActionEtapeService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly ficheService: FicheService
  ) {}

  /**
   * Ajoute ou modifie une étape d'une fiche
   * et réorganise les autres étapes en fonction
   * @param etape
   * @param tokenInfo
   */
  async upsertEtape(
    etape: UpsertFicheActionEtapeType,
    tokenInfo: AuthenticatedUser
  ) : Promise<FicheActionEtapeType> {
    const { id, ficheId, nom, ordre, realise = false } = etape;
    await this.ficheService.canWriteFiche(ficheId, tokenInfo);
    const userId = tokenInfo?.id;

    return await this.databaseService.db.transaction(async (trx) => {
      if (id) {
        // Si on déplace une étape existante (drag and drop)
        const currentEtape = await trx
          .select({
            ordre: ficheActionEtapeTable.ordre,
          })
          .from(ficheActionEtapeTable)
          .where(
            and(
              eq(ficheActionEtapeTable.id, id),
              eq(ficheActionEtapeTable.ficheId, ficheId)
            )
          )
          .limit(1);

        if (currentEtape.length === 0) {
          throw new Error("L'étape spécifiée n'existe pas.");
        }

        const currentOrdre = currentEtape[0].ordre;

        if (currentOrdre !== ordre) {
          if (currentOrdre < ordre) {
            // Si l'étape descend (ex : de 2 à 4)
            await trx
              .update(ficheActionEtapeTable)
              .set({ ordre: sql`${ficheActionEtapeTable.ordre} - 1` })
              .where(
                and(
                  eq(ficheActionEtapeTable.ficheId, ficheId),
                  gt(ficheActionEtapeTable.ordre, currentOrdre),
                  lte(ficheActionEtapeTable.ordre, ordre)
                )
              );
          } else {
            // Si l'étape monte (ex : de 4 à 2)
            await trx
              .update(ficheActionEtapeTable)
              .set({ ordre: sql`${ficheActionEtapeTable.ordre} + 1` })
              .where(
                and(
                  eq(ficheActionEtapeTable.ficheId, ficheId),
                  gte(ficheActionEtapeTable.ordre, ordre),
                  lt(ficheActionEtapeTable.ordre, currentOrdre)
                )
              );
          }
        }
      } else {
        // Si on insère une nouvelle étape
        await trx
          .update(ficheActionEtapeTable)
          .set({ ordre: sql`${ficheActionEtapeTable.ordre} + 1` })
          .where(
            and(
              eq(ficheActionEtapeTable.ficheId, ficheId),
              gte(ficheActionEtapeTable.ordre, ordre)
            )
          );
      }

      // Insertion ou mise à jour de l'étape avec `RETURNING`
      const [result] = await trx
        .insert(ficheActionEtapeTable)
        .values({
          id, // Si `id` est défini, mise à jour via `onConflict`
          ficheId,
          nom,
          ordre,
          realise,
          createdBy: userId,
          modifiedBy: userId,
          createdAt: new Date(),
          modifiedAt: new Date(),
        })
        .onConflictDoUpdate({
          target: [ficheActionEtapeTable.id],
          set: {
            nom,
            ordre,
            realise,
            modifiedBy: userId,
            modifiedAt: new Date(),
          },
        })
        .returning();
      return result;
    });
  }

  /**
   * Supprime une étape d'une fiche et réorganise les autres étapes en fonction
   * @param etapeId
   * @param tokenInfo
   */
  async deleteEtape(etapeId: number, tokenInfo: AuthenticatedUser) {
    return this.databaseService.db.transaction(async (trx) => {
      // Récupérer l'ordre et la fiche de l'étape à supprimer
      const stepToDelete = await trx
        .select({
          ordre: ficheActionEtapeTable.ordre,
          ficheId: ficheActionEtapeTable.ficheId,
        })
        .from(ficheActionEtapeTable)
        .where(eq(ficheActionEtapeTable.id, etapeId))
        .then((res) => res[0]);

      if (!stepToDelete) {
        throw new Error('Step not found');
      }

      const { ordre: deletedOrder, ficheId } = stepToDelete;
      await this.ficheService.canWriteFiche(ficheId, tokenInfo);

      // Supprimer l'étape
      await trx
        .delete(ficheActionEtapeTable)
        .where(eq(ficheActionEtapeTable.id, etapeId));

      // Réorganiser les étapes après celle supprimée
      await trx
        .update(ficheActionEtapeTable)
        .set({ ordre: sql`${ficheActionEtapeTable.ordre} - 1` })
        .where(
          and(
            eq(ficheActionEtapeTable.ficheId, ficheId),
            gte(ficheActionEtapeTable.ordre, deletedOrder)
          )
        );
    });
  }

  /**
   * Récupère les étapes d'une fiche
   * @param ficheId
   * @param tokenInfo
   */
  async getEtapesByFicheId(
    ficheId: number,
    tokenInfo: AuthenticatedUser
  ): Promise<FicheActionEtapeType[]> {
    await this.ficheService.canReadFiche(ficheId, tokenInfo);
    return this.databaseService.db
      .select()
      .from(ficheActionEtapeTable)
      .where(eq(ficheActionEtapeTable.ficheId, ficheId))
      .orderBy(ficheActionEtapeTable.ordre);
  }
}