import { modifiedSinceSchema } from '@/backend/utils/modified-since.enum';
import { z } from 'zod';
import { ciblesEnumSchema } from './models/fiche-action.table';

export const fetchFichesFilterRequestSchema = z
  .object({
    cibles: z
      .string()
      .transform((value) => value.split(','))
      .pipe(ciblesEnumSchema.array())
      .optional()
      .describe('Liste des cibles séparées par des virgules'),
    partenaire_tag_ids: z
      .string()
      .transform((value) => value.split(','))
      .pipe(z.coerce.number().array())
      .optional()
      .describe(
        'Liste des identifiants de tags de partenaires séparés par des virgules ouaich'
      ),
    pilote_tag_ids: z
      .string()
      .transform((value) => value.split(','))
      .pipe(z.coerce.number().array())
      .optional()
      .describe(
        'Liste des identifiants de tags des personnes pilote séparées par des virgules'
      ),
    pilote_user_ids: z
      .string()
      .transform((value) => value.split(','))
      .pipe(z.string().array())
      .optional()
      .describe(
        'Liste des identifiants des utilisateurs pilote séparées par des virgules'
      ),
    service_tag_ids: z
      .string()
      .transform((value) => value.split(','))
      .pipe(z.coerce.number().array())
      .optional()
      .describe(
        'Liste des identifiants de tags de services séparés par des virgules'
      ),
    plan_ids: z
      .string()
      .transform((value) => value.split(','))
      .pipe(z.coerce.number().array())
      .optional()
      .describe(
        "Liste des identifiants des plans d'action séparés par des virgules"
      ),
    modified_after: z
      .string()
      .datetime()
      .optional()
      .describe('Uniquement les fiches modifiées après cette date'),
    modified_since: modifiedSinceSchema
      .optional()
      .describe(
        'Filtre sur la date de modification en utilisant des valeurs prédéfinies'
      ),
  })
  .describe('Filtre de récupération des fiches action');

export type GetFichesActionFilterRequestType = z.infer<
  typeof fetchFichesFilterRequestSchema
>;
