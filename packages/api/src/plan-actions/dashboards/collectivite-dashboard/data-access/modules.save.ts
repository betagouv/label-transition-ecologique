import { TablesInsert } from '@/api/database.types';
import { DBClient } from '@/api/typeUtils';
import { objectToSnake } from 'ts-case-convert';
import {
  ModuleInsert,
  moduleCommonSchemaInsert,
  moduleFicheActionCountBySchema,
  modulePlanActionListSchema,
} from '../domain/module.schema';

export async function moduleDelete({
  dbClient,
  moduleId,
}: {
  dbClient: DBClient;
  moduleId: string;
}) {
  try {
    console.log(`moduleDelete with id ${moduleId}`);
    const { error } = await dbClient
      .from('tableau_de_bord_module')
      .delete()
      .eq('id', moduleId);

    if (error) {
      throw error;
    }

    return {};
  } catch (error) {
    console.error(error);
    return { error };
  }
}

type Props = {
  dbClient: DBClient;
  module: ModuleInsert;
};

export async function modulesSave({ dbClient, module: unsafeModule }: Props) {
  const myModule = parseModule(unsafeModule);

  const savedModule = objectToSnake(
    myModule
  ) as TablesInsert<'tableau_de_bord_module'>;
  savedModule.options = myModule.options; // Keep options in camelCase A bit weird here but will be less weird in backend :D
  try {
    const { error } = await dbClient
      .from('tableau_de_bord_module')
      .upsert(savedModule, {
        onConflict: 'id',
      })
      .eq('id', myModule.id);

    if (error) {
      throw error;
    }

    return {};
  } catch (error) {
    console.error(error);
    return { error };
  }
}

function parseModule(module: ModuleInsert) {
  const commonPart = moduleCommonSchemaInsert.parse(module);

  if (module.type === 'plan-action.list') {
    return {
      ...modulePlanActionListSchema.parse(module),
      ...commonPart,
    };
  }

  if (module.type === 'fiche-action.count-by') {
    return {
      ...moduleFicheActionCountBySchema.parse(module),
      ...commonPart,
    };
  }

  throw new Error(`Invalid module type ${module.type}`);
}
