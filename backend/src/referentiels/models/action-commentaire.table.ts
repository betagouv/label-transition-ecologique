import { InferInsertModel, InferSelectModel, sql } from 'drizzle-orm';
import {
  foreignKey,
  integer,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { authUsersTable } from '../../auth/models/auth-users.table';
import { collectiviteTable } from '../../collectivites/models/collectivite.table';
import { actionIdVarchar } from './action-definition.table';
import { actionRelationTable } from './action-relation.table';

export const actionCommentaireTable = pgTable(
  'action_commentaire',
  {
    collectiviteId: integer('collectivite_id').notNull(),
    actionId: actionIdVarchar.notNull(),
    commentaire: text('commentaire').notNull(),
    modifiedBy: uuid('modified_by')
      .default(sql`auth.uid()`)
      .notNull(),
    modifiedAt: timestamp('modified_at', { withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => {
    return {
      actionCommentaireActionIdFkey: foreignKey({
        columns: [table.actionId],
        foreignColumns: [actionRelationTable.id],
        name: 'action_commentaire_action_id_fkey',
      }),
      actionCommentaireCollectiviteIdFkey: foreignKey({
        columns: [table.collectiviteId],
        foreignColumns: [collectiviteTable.id],
        name: 'action_commentaire_collectivite_id_fkey',
      }),
      actionCommentaireModifiedByFkey: foreignKey({
        columns: [table.modifiedBy],
        foreignColumns: [authUsersTable.id],
        name: 'action_commentaire_modified_by_fkey',
      }),
      actionCommentairePkey: primaryKey({
        columns: [table.collectiviteId, table.actionId],
        name: 'action_commentaire_pkey',
      }),
    };
  }
);

export type ActionCommentaireType = InferSelectModel<
  typeof actionCommentaireTable
>;
export type CreateActionCommentaireTypeType = InferInsertModel<
  typeof actionCommentaireTable
>;

export const actionCommentaireSchema = createSelectSchema(
  actionCommentaireTable
);
export const createActionCommmentaireSchema = createInsertSchema(
  actionCommentaireTable
);