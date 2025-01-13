import { planActionsFetch } from '@/api/plan-actions';
import { DBClient } from '@/api/typeUtils';
import { DateTime } from 'luxon';
import { objectToCamel } from 'ts-case-convert';
import {
  ModuleSelect,
  collectiviteDefaultModuleKeysSchema,
  getDefaultModule,
  moduleTypeSchema,
} from '../domain/module.schema';

export type FetchReturnValue = Array<ModuleSelect>;

type Props = {
  dbClient: DBClient;
  collectiviteId: number;
};

/**
 * Fetch les modules du tableau de bord d'une collectivité et d'un user.
 */
export async function modulesFetch({ dbClient, collectiviteId }: Props) {
  try {
    const query = dbClient
      .from('tableau_de_bord_module')
      .select('*')
      .eq('collectivite_id', collectiviteId)
      .is('user_id', null);

    const { data: rawData, error } = await query;

    if (error) {
      throw error;
    }

    const data = objectToCamel(rawData) as unknown as FetchReturnValue;

    const modules = await mergeWithDefaultModules(data, {
      dbClient,
      collectiviteId,
    });

    return { data: modules };
  } catch (error) {
    console.error(error);
    return { error };
  }
}

async function mergeWithDefaultModules(
  fetchedModules: FetchReturnValue,
  props: Props
) {
  // On crée une map des modules récupérés avec la defaultKey ou l'id (si pas module par défaut) comme clé
  const fetchedModulesMap = new Map(
    fetchedModules.map((module) => [module.defaultKey || module.id, module])
  );

  // On ajoute les modules par défaut non présents dans les modules récupérés
  for (const defaultKey of collectiviteDefaultModuleKeysSchema.options) {
    if (fetchedModulesMap.get(defaultKey)) {
      continue;
    }

    const defaultModule = await getDefaultModule(defaultKey, {
      ...props,
      getPlanActionIds: () =>
        planActionsFetch(props).then((data) =>
          data.plans.map((plan) => plan.id)
        ),
    });

    fetchedModulesMap.set(defaultKey, defaultModule);
  }

  // Ordonne manuellement les modules pour qu'ils apparaissent dans l'ordre voulu
  return Array.from(fetchedModulesMap.values()).sort((a, b) => {
    const moduleATypeIndex = moduleTypeSchema.options.indexOf(a.type);
    const moduleBTypeIndex = moduleTypeSchema.options.indexOf(b.type);
    if (moduleATypeIndex !== moduleBTypeIndex) {
      return moduleATypeIndex - moduleBTypeIndex;
    } else {
      const aCreationDate = DateTime.fromISO(a.createdAt);
      const bCreationDate = DateTime.fromISO(b.createdAt);
      return aCreationDate.toMillis() - bCreationDate.toMillis();
    }
  });
}
