import { z } from 'zod';
import { axeSchema } from './axe.schema';
import { ObjectToSnake } from 'ts-case-convert/lib/caseConvert';
import {
  niveauPrioriteSchema,
  statutSchema,
} from '@tet/api/plan-actions/fiche-resumes.list';

/**
 * Schéma zod d'un résumé d'une fiche action
 */
export const resumeSchema = z.object({
  ameliorationContinue: z.boolean(),
  collectiviteId: z.number(),
  dateFinProvisoire: z.string().date(),
  id: z.number(),
  modifiedAt: z.string().date(),
  niveauPriorite: niveauPrioriteSchema,
  pilotes: z
    .object({
      nom: z.string().nullable(),
      collectiviteId: z.number(),
      tagId: z.number().nullable(),
      userId: z.string().nullable(),
    })
    .array(),
  plans: axeSchema.array(),
  restreint: z.boolean(),
  statut: statutSchema,
  titre: z.string(),

  services: z
    .array(
      z.object({
        nom: z.string().nullable(),
        collectiviteId: z.number().nullable(),
        id: z.number().nullish(),
      })
    )
    .nullable(),
});

/**
 * Type TS d'un résumé d'une fiche action
 */
export type FicheResume = z.input<typeof resumeSchema>;

export type FicheResumeLegacy = ObjectToSnake<FicheResume>;