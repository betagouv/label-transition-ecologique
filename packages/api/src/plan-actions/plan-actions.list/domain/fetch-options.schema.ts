import { getPaginationSchema } from '@/backend/utils';
import { z } from 'zod';
import { filtreRessourceLieesSchema } from '../../../collectivites/shared/domain/filtre-ressource-liees.schema';

/**
 * Schema de filtre pour le fetch des plan actions.
 */
export const fetchFilterSchema = filtreRessourceLieesSchema.pick({
  planActionIds: true,
  utilisateurPiloteIds: true,
  personnePiloteIds: true,
});

export type FetchFilter = z.infer<typeof fetchFilterSchema>;

const sortValues = ['nom', 'created_at'] as const;

export type SortPlansActionValue = (typeof sortValues)[number];

const fetchSortSchema = z.object({
  field: z.enum(sortValues),
  direction: z.enum(['asc', 'desc']).default('desc'),
});

export type FetchSort = z.infer<typeof fetchSortSchema>;

export const fetchOptionsSchema = getPaginationSchema(sortValues).extend({
  filtre: fetchFilterSchema.optional(),
});

export type FetchOptions = z.input<typeof fetchOptionsSchema>;
