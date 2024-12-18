import z from 'zod';
import { ficheActionWithRelationsSchema } from '../shared/models/fiche-action-with-relations.dto';

export const ficheActionForCountBySchema = ficheActionWithRelationsSchema.pick({
  cibles: true,
  piliersEci: true,
  statut: true,
  priorite: true,
  ameliorationContinue: true,
  participationCitoyenneType: true,
});

export const countByPropertyOptions =
  ficheActionForCountBySchema.keyof().options;

export const countByPropertyEnumSchema = z.enum(countByPropertyOptions);

export type CountByPropertyEnumType = z.infer<typeof countByPropertyEnumSchema>;
