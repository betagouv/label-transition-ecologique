import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import {
  foreignKey,
  integer,
  jsonb,
  pgTable,
  primaryKey,
  timestamp,
} from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { labellisationAuditTable } from './labellisation-audit.table';
import { referentielEnum } from './referentiel.enum';

export const preAuditScoresTable = pgTable(
  'pre_audit_scores',
  {
    collectiviteId: integer('collectivite_id').notNull(),
    referentiel: referentielEnum('referentiel').notNull(),
    scores: jsonb('scores').notNull(),
    modifiedAt: timestamp('modified_at', {
      withTimezone: true,
    }).notNull(),
    payloadTimestamp: timestamp('payload_timestamp', {
      withTimezone: true,
    }),
    auditId: integer('audit_id').notNull(),
  },
  (table) => {
    return {
      preAuditScoresAuditIdFkey: foreignKey({
        columns: [table.auditId],
        foreignColumns: [labellisationAuditTable.id],
        name: 'pre_audit_scores_audit_id_fkey',
      }).onDelete('cascade'),
      preAuditScoresPkey: primaryKey({
        columns: [table.collectiviteId, table.referentiel, table.auditId],
        name: 'pre_audit_scores_pkey',
      }),
    };
  }
);

export type PreAuditScoresType = InferSelectModel<typeof preAuditScoresTable>;
export type CreatePreAuditScoresType = InferInsertModel<
  typeof preAuditScoresTable
>;

export const preAuditScoresSchema = createSelectSchema(preAuditScoresTable);
export const createPreAuditScoresTable =
  createInsertSchema(preAuditScoresTable);