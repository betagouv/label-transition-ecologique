import { NonNullableFields, Views } from '@/api';
import {
  DISABLE_AUTO_REFETCH,
  supabaseClient,
} from '@/app/core-logic/api/supabase';
import { useQuery } from 'react-query';

/**
 * Charge la liste des départements.
 */
export const useDepartements = () => {
  const { data, isLoading } = useQuery(
    ['departement'],
    () => fetch(),
    DISABLE_AUTO_REFETCH
  );
  return {
    isLoading,
    departements: (data || []) as TDepartement[],
  };
};

const fetch = async () => {
  const { data } = await supabaseClient.from('departement').select();
  return data;
};

export type TDepartement = NonNullableFields<Views<'departement'>>;
