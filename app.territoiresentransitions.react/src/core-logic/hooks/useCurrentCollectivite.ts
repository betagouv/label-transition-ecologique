import { useAuth } from '@/app/core-logic/api/auth/AuthProvider';
import { supabaseClient } from '@/app/core-logic/api/supabase';
import { useCollectiviteId } from '@/app/core-logic/hooks/params';
import { TNiveauAcces } from '@/app/types/alias';
import { useQuery } from 'react-query';

export type CurrentCollectivite = {
  collectivite_id: number;
  nom: string;
  niveau_acces: TNiveauAcces | null;
  acces_restreint: boolean;
  est_auditeur: boolean;
  // états dérivés
  isAdmin: boolean;
  readonly: boolean;
};

// charge une collectivité
const fetchCurrentCollectivite = async (collectivite_id: number) => {
  const { data } = await supabaseClient
    .from('collectivite_niveau_acces')
    .select()
    .match({ collectivite_id });

  const collectivite = data![0];
  return collectivite;
};

function toCurrentCollectivite(collectivite: any): CurrentCollectivite {
  return {
    collectivite_id: collectivite.collectivite_id,
    nom: collectivite.nom,
    niveau_acces: collectivite.niveau_acces,
    isAdmin: collectivite.niveau_acces === 'admin',
    est_auditeur: collectivite.est_auditeur,
    acces_restreint: collectivite.access_restreint || false,
    readonly:
      (collectivite.niveau_acces === null ||
        collectivite.niveau_acces === 'lecture') &&
      !collectivite.est_auditeur,
  };
}

// charge la collectivité courante (à partir de son id)
// et détermine si elle est en lecture seule pour l'utilisateur courant ou non
// la requête est rechargée quand le user id ou le collectivite id changent
export const useCurrentCollectivite = () => {
  const { user } = useAuth();
  const collectiviteId = useCollectiviteId();

  const { data } = useQuery(
    ['current_collectivite', collectiviteId, user?.id],
    async () => {
      const collectivite = collectiviteId
        ? await fetchCurrentCollectivite(collectiviteId)
        : user?.collectivites?.length
        ? user.collectivites[0]
        : null;

      if (!collectivite) {
        return null;
      }

      return toCurrentCollectivite(collectivite);
    }
  );

  return data || null;
};
