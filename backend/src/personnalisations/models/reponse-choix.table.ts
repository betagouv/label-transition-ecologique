import { sql } from 'drizzle-orm';
import { integer, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core';
import { collectiviteTable } from '../../collectivites/models/collectivite.table';

export const reponseChoixTable = pgTable('reponse_choix', {
  modifiedAt: timestamp('modified_at', { withTimezone: true, mode: 'string' })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  collectiviteId: integer('collectivite_id')
    .references(() => collectiviteTable.id)
    .notNull(),
  // TODO: Reference question
  questionId: varchar('question_id', { length: 30 }).notNull(),
  // TODO: Reference choix_id
  reponse: varchar('reponse', { length: 30 }),
});