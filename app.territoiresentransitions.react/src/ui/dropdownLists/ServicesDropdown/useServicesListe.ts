import {useQuery} from 'react-query';
import {supabaseClient} from 'core-logic/api/supabase';
import {useCollectiviteId} from 'core-logic/hooks/params';
import {TFicheActionServicePiloteRow} from 'types/alias';

export const useServicesListe = () => {
  const collectivite_id = useCollectiviteId()!;

  return useQuery(['services_pilotes', collectivite_id], async () => {
    const {error, data} = await supabaseClient
      .from('service_tag')
      .select()
      .eq('collectivite_id', collectivite_id)
      .order('nom');

    if (error) throw new Error(error.message);

    return data as TFicheActionServicePiloteRow[];
  });
};