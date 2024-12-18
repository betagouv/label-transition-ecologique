import { moduleFetch } from '@/api/plan-actions/dashboards/collectivite-dashboard/data-access/module.fetch';
import { CollectiviteDefaultModuleKeys } from '@/api/plan-actions/dashboards/collectivite-dashboard/domain/module.schema';
import { supabaseClient } from '@/app/core-logic/api/supabase';
import { useCollectiviteId } from '@/app/core-logic/hooks/params';
import { QueryKey, useQuery } from 'react-query';

/**
 * Fetch un module spécifique du tableau de bord d'une collectivité.
 */
export const useCollectiviteModuleFetch = (
  defaultModuleKey: CollectiviteDefaultModuleKeys
) => {
  const collectiviteId = useCollectiviteId();

  return useQuery(getQueryKey(defaultModuleKey), async () => {
    if (!collectiviteId) {
      throw new Error('Aucune collectivité associée');
    }

    return await moduleFetch({
      dbClient: supabaseClient,
      collectiviteId,
      defaultModuleKey,
    });
  });
};

export const getQueryKey = (
  defaultModuleKey?: CollectiviteDefaultModuleKeys
): QueryKey => ['collectivite-dashboard-module', defaultModuleKey];
