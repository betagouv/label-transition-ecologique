import { objectToSnake } from 'ts-case-convert';
import { DBClient } from '@tet/api/typeUtils';
import {
  ModuleInsert,
  moduleCommonSchemaInsert,
  moduleFichesSchema,
  moduleIndicateursSchema,
} from '../domain/module.schema';
import { TablesInsert } from '@tet/api/database.types';

type Props = {
  dbClient: DBClient;
  module: ModuleInsert;
};

export async function modulesSave({ dbClient, module: unsafeModule }: Props) {
  const myModule = parseModule(unsafeModule);

  try {
    const { error } = await dbClient
      .from('tableau_de_bord_module')
      .upsert(
        objectToSnake(myModule) as TablesInsert<'tableau_de_bord_module'>,
        {
          onConflict: 'id',
        }
      )
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

  if (module.type === 'fiche_action.list') {
    return {
      ...moduleFichesSchema.parse(module),
      ...commonPart,
    };
  }

  if (module.type === 'indicateur.list') {
    return {
      ...moduleIndicateursSchema.parse(module),
      ...commonPart,
    };
  }

  throw new Error('Invalid module type');
}