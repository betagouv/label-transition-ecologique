import { TFicheActionStatuts } from '@/app/types/alias';
import TagFilters from '@/app/ui/shared/filters/TagFilters';
import { ITEM_ALL } from '@/app/ui/shared/filters/commons';
import { ficheActionStatutOptions } from '../../../../../../../ui/dropdownLists/listesStatiques';
import { SANS_STATUT } from '../../../FicheAction/data/filters';
import { TFichesActionsListe } from '../../../FicheAction/data/useFichesActionFiltresListe';

type Props = {
  filtersOptions: TFichesActionsListe;
};

const FiltrePrimaireStatuts = ({ filtersOptions }: Props) => {
  const { filters, setFilters } = filtersOptions;

  const getDefaultOption = () => {
    if (filters.sans_statut) {
      return SANS_STATUT;
    }
    if (filters.statuts) {
      return filters.statuts[0];
    }
    return ITEM_ALL;
  };

  const selectStatut = (statut: string) => {
    const newFilters = filters;
    if (statut === ITEM_ALL) {
      delete newFilters.sans_statut;
      delete newFilters.statuts;
      return { ...newFilters };
    } else if (statut === SANS_STATUT) {
      delete newFilters.statuts;
      return { ...newFilters, sans_statut: 1 };
    } else {
      delete newFilters.sans_statut;
      return { ...newFilters, statuts: [statut as TFicheActionStatuts] };
    }
  };

  return (
    <TagFilters
      defaultOption={getDefaultOption()}
      options={[
        { value: ITEM_ALL, label: 'Tous les statuts' },
        { value: SANS_STATUT, label: 'Sans statut' },
        ...ficheActionStatutOptions,
      ]}
      onChange={(statut) => setFilters(selectStatut(statut))}
    />
  );
};

export default FiltrePrimaireStatuts;
