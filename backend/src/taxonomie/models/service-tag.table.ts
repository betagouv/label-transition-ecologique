import { pgTable, uniqueIndex } from 'drizzle-orm/pg-core';
import { TagBase } from './tag.basetable';

export const serviceTagTable = pgTable('service_tag', TagBase, (table) => {
  return {
    service_tag_nom_collectivite_id_key: uniqueIndex(
      'service_tag_nom_collectivite_id_key',
    ).on(table.nom, table.collectivite_id),
  };
});