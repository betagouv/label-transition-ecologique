import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';
import { getCheckScoresResponseSchema } from './get-check-scores.response';

export const getMultipleCheckScoresResponseSchema = extendApi(
  z.object({
    count: z.number(),
    countByStatus: z.record(z.string(), z.number()),
    referentielCountByStatus: z.record(
      z.string(),
      z.record(z.string(), z.number())
    ),
    resultats: getCheckScoresResponseSchema.array(),
  })
).openapi({
  title: 'Résultat de la vérification multiple de calcul de score',
});
export type GetMultipleCheckScoresResponseType = z.infer<
  typeof getMultipleCheckScoresResponseSchema
>;