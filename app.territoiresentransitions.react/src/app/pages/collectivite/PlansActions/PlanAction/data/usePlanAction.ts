import {useQuery} from 'react-query';

import {supabaseClient} from 'core-logic/api/supabase';
import {FlatAxe} from './types';
import {useCollectiviteId} from 'core-logic/hooks/params';
import {flatAxesToPlanNodes} from './utils';

export const usePlanAction = (axe_id: number) => {
  const collectivite_id = useCollectiviteId();

  return useQuery(['flat_axes', axe_id], async () => {
    const {data} = await supabaseClient.rpc('flat_axes', {axe_id});
    const planNodes = data && flatAxesToPlanNodes(data as FlatAxe[]);
    return planNodes;
  });
};
