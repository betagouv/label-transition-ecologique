import { Indicateurs } from '@/api';
import {
  DISABLE_AUTO_REFETCH,
  supabaseClient,
} from '@/app/core-logic/api/supabase';
import { useCollectiviteId } from '@/app/core-logic/hooks/params';
import { useQuery } from 'react-query';

/**
 * Charge les données nécessaires à l'affichage d'un graphique indicateur.
 *
 * Détermine notamment l'id à utiliser pour lire les valeurs à afficher dans le graphe
 * ou le décompte à afficher à la place du graphe.
 */
export const useIndicateurChartInfo = (
  indicateurId: number,
  autoRefresh?: boolean
) => {
  const collectiviteId = useCollectiviteId();

  return useQuery(
    ['indicateur_chart_info', collectiviteId, indicateurId, autoRefresh],
    async () =>
      collectiviteId
        ? Indicateurs.fetch.selectIndicateurChartInfo(
            supabaseClient,
            indicateurId,
            collectiviteId
          )
        : null,
    autoRefresh ? {} : { ...DISABLE_AUTO_REFETCH }
  );
};
