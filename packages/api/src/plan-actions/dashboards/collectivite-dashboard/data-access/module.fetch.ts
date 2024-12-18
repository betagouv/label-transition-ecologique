import { planActionsFetch } from '@/api/plan-actions';
import { DBClient } from '@/api/typeUtils';
import { objectToCamel } from 'ts-case-convert';
import {
  CollectiviteDefaultModuleKeys,
  getDefaultModule,
  ModuleFicheActionCountBySelect,
  ModulePlanActionListSelect,
} from '../domain/module.schema';

export type ReturnType<S extends CollectiviteDefaultModuleKeys> =
  S extends 'suivi-plan-actions'
    ? ModulePlanActionListSelect
    : ModuleFicheActionCountBySelect;

/**
 * Fetch un module spécifique du tableau de bord d'une collectivité et d'un user.
 */
export async function moduleFetch<S extends CollectiviteDefaultModuleKeys>({
  dbClient,
  collectiviteId,
  defaultModuleKey,
}: {
  dbClient: DBClient;
  collectiviteId: number;
  defaultModuleKey: S;
}): Promise<ReturnType<S>> {
  try {
    const query = dbClient
      .from('tableau_de_bord_module')
      .select('*')
      .eq('collectivite_id', collectiviteId)
      .eq('default_key', defaultModuleKey)
      .limit(1);

    const { data: rawData, error } = await query;

    if (error) {
      throw error;
    }

    const data = objectToCamel(rawData);

    const tdbModule = data.length
      ? data[0]
      : await getDefaultModule(defaultModuleKey, {
          collectiviteId,
          getPlanActionIds: () =>
            planActionsFetch({ dbClient, collectiviteId }).then(({ plans }) =>
              plans.map((plan) => plan.id)
            ),
        });

    if (
      defaultModuleKey === 'suivi-plan-actions' ||
      defaultModuleKey === 'fiche-actions-par-statut'
    ) {
      return tdbModule as ReturnType<typeof defaultModuleKey>;
    }

    throw new Error(`Module: clé inconnue '${defaultModuleKey}'`);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
