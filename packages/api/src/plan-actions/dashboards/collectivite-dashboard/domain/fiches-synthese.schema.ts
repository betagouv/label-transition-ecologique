import { z } from 'zod';

import { filtreRessourceLieesSchema } from '@tet/api/collectivites/shared/domain/filtre_ressource_liees.schema';
import {
  cibleSchema,
  modifiedSinceSchema,
} from '@tet/api/plan-actions/fiche-resumes.list';

export const filtreSpecifiqueSchema = z.object({
  cibles: cibleSchema.array().optional(),
  partenaireIds: z.number().array().optional(),
  modifiedSince: modifiedSinceSchema.optional(),
});

export type FiltreSpecifique = z.infer<typeof filtreSpecifiqueSchema>;

export const filtreSchema = filtreRessourceLieesSchema
  .pick({
    utilisateurPiloteIds: true,
    personnePiloteIds: true,
    servicePiloteIds: true,
    planActionIds: true,
  })
  .merge(filtreSpecifiqueSchema);

export type Filtre = z.infer<typeof filtreSchema>;