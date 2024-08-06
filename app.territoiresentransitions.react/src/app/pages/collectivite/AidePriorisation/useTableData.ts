import {useQuery} from 'react-query';
import {TableOptions} from 'react-table';
import {useCollectiviteId, useReferentielId} from 'core-logic/hooks/params';
import {useSearchParamsState} from 'core-logic/hooks/query';
import {useReferentiel} from '../ReferentielTable/useReferentiel';
import {fetchRows, PriorisationRow} from './queries';
import {initialFilters, nameToShortNames, TFilters} from './filters';

export type UseTableData = () => TableData;

export type TableData = {
  /** données à passer à useTable */
  table: Pick<
    TableOptions<PriorisationRow>,
    'data' | 'getRowId' | 'getSubRows' | 'autoResetExpanded'
  >;
  /** Indique que le chargement des données est en cours */
  isLoading: boolean;
  /** filtres actifs */
  filters: TFilters;
  /** Nombre de filtres actifs */
  filtersCount: number;
  /** Nombre de lignes après filtrage */
  count: number;
  /** Nombre total de lignes */
  total: number;
  /** pour remettre à jour les filtres */
  setFilters: (newFilter: TFilters) => void;
};

/**
 * Memoïze et renvoi les données et paramètres de la table
 */
export const useTableData: UseTableData = () => {
  const collectivite_id = useCollectiviteId();
  const referentiel = useReferentielId();

  // filtre initial
  const [filters, setFilters, filtersCount] = useSearchParamsState<TFilters>(
    'priorisation',
    initialFilters,
    nameToShortNames
  );

  // chargement des données en fonction des filtres
  const {data, isLoading} = useQuery(
    ['priorisation', collectivite_id, referentiel, filters],
    () => fetchRows(collectivite_id, referentiel, filters)
  );
  const {rows: actionsStatut} = data || {};

  // chargement du référentiel
  const {
    table,
    total,
    count,
    isLoading: isLoadingReferentiel,
  } = useReferentiel(referentiel, collectivite_id, actionsStatut);

  return {
    table,
    filters,
    setFilters,
    filtersCount,
    isLoading: isLoading || isLoadingReferentiel,
    count,
    total,
  };
};
