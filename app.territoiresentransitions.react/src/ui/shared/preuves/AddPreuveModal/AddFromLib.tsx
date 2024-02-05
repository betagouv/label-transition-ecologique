import {ChangeEvent, FormEvent, useState} from 'react';
import {UiSearchBar} from 'ui/UiSearchBar';
import {TBibliothequeFichier} from '../Bibliotheque/types';
import {
  useFichiers,
  NB_ITEMS_PER_PAGE,
  TFilters,
} from '../Bibliotheque/useFichiers';
import {TAddFileFromLib} from './AddFile';
import {Pagination} from 'ui/shared/Pagination';

export type TAddFromLibProps = {
  items: TBibliothequeFichier[];
  total: number;
  filters: TFilters;
  setFilters: (filters: TFilters) => void;
  onAddFileFromLib: TAddFileFromLib;
  onClose: () => void;
};

/**
 * Affiche la bibliothèque de fichiers de la collectivité
 * et permet de sélectionner les fichiers à ajouter comme preuve
 */
export const AddFromLib = (props: TAddFromLibProps) => {
  const {
    items: fichiers,
    total,
    filters,
    onAddFileFromLib,
    onClose,
    setFilters,
  } = props;

  const [currentSelection, setCurrentSelection] = useState<{
    [key: number]: boolean;
  }>({});
  const canAdd = Object.values(currentSelection).find(v => !!v);

  // met à jour notre sélection interne lorsqu'une case est dé/cochée
  const onChange = (e: ChangeEvent<HTMLFieldSetElement>) => {
    if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
      const {target} = e as unknown as ChangeEvent<HTMLInputElement>;
      const {checked, id} = target;
      setCurrentSelection({...currentSelection, [id]: checked});
    }
  };

  // appelle la fonction d'ajout pour chaque item sélectionné
  // TODO: passer un tableau pour faire un seul appel
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    Object.entries(currentSelection)
      .filter(([, checked]) => checked)
      .map(([id]) => onAddFileFromLib(parseInt(id)));
    onClose();
  };

  return (
    <>
      <h6 className="fr-text--md">Tous les fichiers de ma collectivité</h6>
      <div>
        <UiSearchBar
          key="search"
          value={filters.search}
          placeholder="Rechercher par nom"
          search={search => setFilters({page: 1, search})}
        />
        {total ? (
          <>
            <p className="fr-mt-2w">Sélectionner les fichiers à ajouter</p>
            <fieldset className="fr-fieldset" onChange={onChange}>
              <div className="overflow-auto" style={{height: '12rem'}}>
                {fichiers.map(({id, filename}) => (
                  <div key={id} className="fr-fieldset__element">
                    <div className="fr-checkbox-group">
                      <input type="checkbox" name={filename} id={`${id}`} />
                      <label className="fr-label" htmlFor={`${id}`}>
                        {filename}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </fieldset>
            <div className="flex justify-center">
              <Pagination
                nbOfPages={Math.ceil(total / NB_ITEMS_PER_PAGE)}
                selectedPage={filters.page ?? 1}
                onChange={page => setFilters({...filters, page})}
              />
            </div>
          </>
        ) : null}
      </div>
      {!total ? <p className="fr-mt-2w">Aucun fichier</p> : null}
      <button className="fr-btn mt-2" disabled={!canAdd} onClick={onSubmit}>
        Ajouter
      </button>
    </>
  );
};

const AddFromLibConnected = (
  props: Omit<TAddFromLibProps, 'items' | 'total' | 'filters' | 'setFilters'>
) => {
  const [filters, setFilters] = useState({search: '', page: 1});
  const data = useFichiers(filters);
  return data ? (
    <AddFromLib
      {...props}
      {...data}
      filters={filters}
      setFilters={setFilters}
    />
  ) : null;
};

export default AddFromLibConnected;
