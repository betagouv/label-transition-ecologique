import { useQuery } from 'react-query';

import { supabaseClient } from '@/app/core-logic/api/supabase';
import { useCollectiviteId } from '@/app/core-logic/hooks/params';
import { TFicheActionServicePiloteRow } from '@/app/types/alias';

export const useServicePiloteListe = () => {
  const collectivite_id = useCollectiviteId()!;

  return useQuery(['services_pilotes', collectivite_id], async () => {
    const { data } = await supabaseClient
      .from('service_tag')
      .select()
      .eq('collectivite_id', collectivite_id)
      .order('nom');
    return data as unknown as TFicheActionServicePiloteRow[];
  });
};
