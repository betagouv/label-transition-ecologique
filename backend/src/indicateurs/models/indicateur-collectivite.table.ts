import { boolean, integer, pgTable, text } from 'drizzle-orm/pg-core';
import { collectiviteTable } from '../../collectivites/models/collectivite.table';
import { indicateurDefinitionTable } from './indicateur-definition.table';
import { primaryKey } from 'drizzle-orm/pg-core';

export const indicateurCollectiviteTable = pgTable(
  'indicateur_collectivite',
  {
    collectiviteId: integer('collectivite_id')
      .notNull()
      .references(() => collectiviteTable.id, {
        onDelete: 'cascade',
      }),
    indicateurId: integer('indicateur_id')
      .notNull()
      .references(() => indicateurDefinitionTable.id, {
        onDelete: 'cascade',
      }),
    commentaire: text('commentaire'),
    confidentiel: boolean('confidentiel').default(false).notNull(),
    favoris: boolean('favoris').default(false).notNull(),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.collectiviteId, table.indicateurId] }),
    };
  }
);