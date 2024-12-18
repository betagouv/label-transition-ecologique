import z from 'zod';
import { ficheSchema } from './fiche-action.table';

export const ficheActionWithRelationsSchema = ficheSchema.extend({
  partenaireTagIds: z.number().array().describe('Partenaires'),
  piloteTagIds: z
    .number()
    .array()
    .describe('Personnes pilote (non enregistrées)'),
  piloteUserIds: z.number().array().describe('Personnes pilote'),
  serviceTagIds: z.number().array().describe('Directions ou services pilote'),
  axeIds: z.number().array().describe('Axes'),
  planIds: z.number().array().describe("Plans d'action"),
});

export type FicheActionWithRelationsType = z.infer<
  typeof ficheActionWithRelationsSchema
>;
