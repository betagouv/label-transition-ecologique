import {
  FetchFilter as FetchFilterPlanActions,
  fetchOptionsSchema as planActionsFetchOptionsSchema,
} from '@/api/plan-actions';
import { z } from 'zod';
import { countByPropertyEnumSchema } from '../../../../../../../backend/src/plans/fiches/count-by/count-by-property-options.enum';
import {
  Filtre as FiltreFichesSynthese,
  filtreSchema,
} from './fiches-synthese.schema';

export const moduleTypeSchema = z.enum([
  // "Avancée des plans d'actions de la collectivité"
  'plan-action.list',
  // "Count by des actions (ex: suivi de l'avancement des actions = count by status)"
  'fiche-action.count-by',
]);

export const moduleCommonSchemaInsert = z.object({
  id: z.string().uuid(),
  collectiviteId: z.number(),
  titre: z.string(),
  defaultKey: z
    .string()
    .optional()
    .nullable()
    .describe(`Key used to identify default modules`),
  type: moduleTypeSchema,
});

export const moduleCommonSchemaSelect = moduleCommonSchemaInsert.extend({
  createdAt: z.string().datetime(),
  modifiedAt: z.string().datetime(),
});

export const modulePlanActionListSchema = z.object({
  type: z.literal(moduleTypeSchema.enum['plan-action.list']),
  options: planActionsFetchOptionsSchema,
});

export const modulePlanActionListSelectSchema = moduleCommonSchemaSelect.merge(
  modulePlanActionListSchema
);

export type ModulePlanActionListSelect = z.input<
  typeof modulePlanActionListSelectSchema
>;

export const moduleFicheActionCountBySchema = z.object({
  type: z.literal(moduleTypeSchema.enum['fiche-action.count-by']),
  options: z.object({
    countByProperty: countByPropertyEnumSchema,
    filtre: filtreSchema,
  }),
});

export const moduleFicheActionCountBySelectSchema =
  moduleCommonSchemaSelect.merge(moduleFicheActionCountBySchema);

export type ModuleFicheActionCountBySelect = z.input<
  typeof moduleFicheActionCountBySelectSchema
>;

export const moduleFicheActionCountByInsertSchema =
  moduleCommonSchemaInsert.merge(moduleFicheActionCountBySchema);

export type ModuleFicheActionCountByInsert = z.input<
  typeof moduleFicheActionCountByInsertSchema
>;

export const moduleSchemaSelect = z.discriminatedUnion('type', [
  modulePlanActionListSelectSchema,
  moduleFicheActionCountBySelectSchema,
]);

export const moduleSchemaInsert = z.discriminatedUnion('type', [
  moduleCommonSchemaInsert.merge(modulePlanActionListSchema),
  moduleCommonSchemaInsert.merge(moduleFicheActionCountBySchema),
]);

export type ModuleSelect = z.input<typeof moduleSchemaSelect>;
export type ModuleInsert = z.input<typeof moduleSchemaInsert>;

export const collectiviteDefaultModuleKeysSchema = z.enum([
  'suivi-plan-actions',
  'fiche-actions-par-statut',
]);

export type CollectiviteDefaultModuleKeys = z.infer<
  typeof collectiviteDefaultModuleKeysSchema
>;

export type Filter = FetchFilterPlanActions | FiltreFichesSynthese;

type Props = {
  collectiviteId: number;
  getPlanActionIds: () => Promise<number[]>;
};

/**
 * Retourne le module de base par défaut correspondant à la clé donnée.
 */
export async function getDefaultModule(
  key: string,
  { collectiviteId, getPlanActionIds }: Props
) {
  const tbdSetUpDate = '2024-10-16T12:00:00.000Z'; // Utilisation de la date de création du tableau de bord pour mettre ces modules en premier
  const planActionIds = await getPlanActionIds();

  if (key === collectiviteDefaultModuleKeysSchema.enum['suivi-plan-actions']) {
    return {
      id: crypto.randomUUID(),
      collectiviteId,
      titre: 'Suivi des plans d’action',
      type: 'plan-action.list',
      defaultKey: key,
      options: {
        filtre: {
          // Le filtre par défaut se base sur tous les plans d'actions de la collectivité
          planActionIds,
        },
      },
      createdAt: tbdSetUpDate,
      modifiedAt: tbdSetUpDate,
    } as ModulePlanActionListSelect;
  }

  if (
    key === collectiviteDefaultModuleKeysSchema.enum['fiche-actions-par-statut']
  ) {
    return {
      id: crypto.randomUUID(),
      collectiviteId,
      titre: "Suivi de l'avancement des actions",
      type: 'fiche-action.count-by',
      defaultKey: key,
      options: {
        filtre: {
          // Le filtre par défaut se base sur tous les plans d'actions de la collectivité
          planActionIds,
        },
      },
      createdAt: tbdSetUpDate,
      modifiedAt: tbdSetUpDate,
    } as ModuleFicheActionCountBySelect;
  }

  throw new Error(`La clé ${key} n'est pas une clé de module par défaut.`);
}
