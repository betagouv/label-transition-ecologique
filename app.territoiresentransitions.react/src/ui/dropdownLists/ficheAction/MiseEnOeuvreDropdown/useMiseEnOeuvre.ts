import { useQuery } from 'react-query';
import { supabaseClient } from 'core-logic/api/supabase';

/**
 * Charge les temps de mise en oeuvre
 */
export const useMiseEnOeuvre = () =>
  useQuery(['temps_de_mise_en_oeuvre'], async () => {
    const { data, error } = await supabaseClient
      .from('action_impact_temps_de_mise_en_oeuvre')
      .select();

    if (error) throw new Error(error.message);

    return data;
  });