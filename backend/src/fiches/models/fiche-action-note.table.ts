import { date, integer, pgTable, primaryKey, text } from 'drizzle-orm/pg-core';
import { InferSelectModel } from 'drizzle-orm';
import { z } from 'zod';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { ficheActionTable } from './fiche-action.table';
import {
  createdAt,
  createdBy,
  modifiedAt,
  modifiedBy,
} from '../../common/models/column.helpers';

export const ficheActionNoteTable = pgTable(
  'fiche_action_note',
  {
    ficheId: integer('fiche_id')
      .references(() => ficheActionTable.id)
      .notNull(),
    dateNote: date('date_note').notNull(),
    note: text('note').notNull(),
    createdAt,
    modifiedAt,
    createdBy,
    modifiedBy,
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.ficheId, table.dateNote] }),
    };
  }
);

export const ficheActionNoteSchema = createSelectSchema(ficheActionNoteTable);

export const upsertFicheActionNoteSchema = createInsertSchema(
  ficheActionNoteTable
).pick({ dateNote: true, note: true });

export const deleteFicheActionNoteSchema = upsertFicheActionNoteSchema.omit({
  note: true,
});

export type FicheActionNoteType = InferSelectModel<typeof ficheActionNoteTable>;
export type UpsertFicheActionNoteType = z.infer<
  typeof upsertFicheActionNoteSchema
>;
export type DeleteFicheActionNoteType = z.infer<
  typeof deleteFicheActionNoteSchema
>;