import { useQuery } from 'react-query';

import {
  planActionsFetch,
  WithSelect,
} from '@/api/plan-actions/plan-actions.list/data-access/plan-actions.fetch';
import { FetchOptions } from '@/api/plan-actions/plan-actions.list/domain/fetch-options.schema';
import { supabaseClient as dbClient } from 'core-logic/api/supabase';
import { useCollectiviteId } from 'core-logic/hooks/params';

type Props = {
  options?: FetchOptions;
  withSelect?: WithSelect[];
};

/**
 * Récupère uniquement les axes racines des plans d'action.
 *
 * Pour ajouter les axes enfants il faut donner `withSelect: ['axes']` en paramètre.
 */
export const usePlansActionsListe = ({ options, withSelect }: Props) => {
  const collectiviteId = useCollectiviteId();

  return useQuery(['plans_actions', collectiviteId!, options, withSelect], () =>
    planActionsFetch({
      dbClient,
      collectiviteId: collectiviteId!,
      options,
      withSelect,
    })
  );
};
