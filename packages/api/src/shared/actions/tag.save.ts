import { Tag, TagInsert, TagType } from '@/backend/collectivites';
import { objectToCamel, objectToSnake } from 'ts-case-convert';
import { DBClient } from '../../typeUtils';

/**
 * Ajoute des tags
 * @param dbClient client supabase
 * @param tagType type de tag
 * @param tags listes des tags à ajouter
 * @return liste de tags ajoutés avec leur identifiant
 */
export async function insertTags(
  dbClient: DBClient,
  tagType: TagType,
  tags: TagInsert[]
): Promise<Tag[]> {
  const { data } = await dbClient
    .from(`${tagType}_tag` as const)
    .insert(objectToSnake(tags))
    .select();

  return data ? (objectToCamel(data) as Tag[]) : [];
}
