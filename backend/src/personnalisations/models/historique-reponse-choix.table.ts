import { sql } from 'drizzle-orm';
import { integer, pgSchema, timestamp, varchar } from 'drizzle-orm/pg-core';
import { collectiviteTable } from '../../collectivites/models/collectivite.table';

export const historiqueSchema = pgSchema('historique');
export const historiqueReponseChoixTable = historiqueSchema.table(
  'reponse_choix',
  {
    modified_at: timestamp('modified_at', {
      withTimezone: true,
      mode: 'string',
    })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    collectivite_id: integer('collectivite_id')
      .references(() => collectiviteTable.id)
      .notNull(),
    // TODO: Reference question
    question_id: varchar('question_id', { length: 30 }).notNull(),
    // TODO: Reference choix_id
    reponse: varchar('reponse', { length: 30 }),
    // TODO: Reference choix_id
    previous_reponse: varchar('previous_reponse', { length: 30 }),
  },
);
