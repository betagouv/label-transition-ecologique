import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

export const deleteIndicateursValeursResponseSchema = extendApi(
  z
    .object({
      indicateurValeurIdsSupprimes: z.array(z.number().int()),
    })
    .openapi({
      title: 'Identifiant des valeurs supprimées',
    })
);

export type DeleteIndicateursValeursResponseType = z.infer<
  typeof deleteIndicateursValeursResponseSchema
>;
