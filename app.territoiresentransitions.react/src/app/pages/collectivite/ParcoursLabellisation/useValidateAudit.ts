import {useMutation, useQueryClient} from 'react-query';
import {supabaseClient} from 'core-logic/api/supabase';
import {Database} from 'types/database.types';

/** Valider un audit */
export const useValidateAudit = () => {
  const queryClient = useQueryClient();

  return useMutation(validateAudit, {
    mutationKey: 'validateAudit',
    onSuccess: (data, variables) => {
      const {collectivite_id, referentiel} = variables;
      queryClient.invalidateQueries(['audit', collectivite_id, referentiel]);
    },
  });
};

const validateAudit = async (
  audit: Database['public']['Tables']['audit']['Row']
) => supabaseClient.from('audit').update({id: audit.id, valide: true});
