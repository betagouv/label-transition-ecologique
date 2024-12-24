import { z } from 'zod';
import { indicateurAvecValeursSchema } from '../index-domain';

export const calculTrajectoireResponseDonneesSchema = z
  .object({
    emissionsGes: z.array(indicateurAvecValeursSchema),
    consommationsFinales: z.array(indicateurAvecValeursSchema),
    sequestrations: z.array(indicateurAvecValeursSchema),
  })
  .describe('Données de la trajectoire SNBC');

export type CalculTrajectoireResponseDonnees = z.infer<
  typeof calculTrajectoireResponseDonneesSchema
>;
