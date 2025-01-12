import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { pgTable, text } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { actionIdReference } from '../../referentiels/models/action-definition.table';

export const personnalisationTable = pgTable('personnalisation', {
  actionId: actionIdReference.primaryKey().notNull(),
  titre: text('titre').notNull(),
  description: text('description').notNull(),
});

export type PersonnalisationType = InferSelectModel<
  typeof personnalisationTable
>;
export type CreatePersonnalisationRegleType = InferInsertModel<
  typeof personnalisationTable
>;
export const personnalisationSchema = createSelectSchema(personnalisationTable);
export const createPersonnalisationSchema = createInsertSchema(
  personnalisationTable
);
