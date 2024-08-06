'use client';

import {CollectiviteCarte} from 'app/pages/CollectivitesEngagees/Views/CollectiviteCarte';
import View from 'app/pages/CollectivitesEngagees/Views/View';
import {
  TCollectiviteCarte,
  useFilteredCollectivites,
} from 'app/pages/CollectivitesEngagees/data/useFilteredCollectivites';
import {useCollectivitesFilters} from './CollectivitesFiltersContext';

const CollectivitesView = () => {
  const {filters} = useCollectivitesFilters();

  const {collectivites, collectivitesCount, isLoading} =
    useFilteredCollectivites(filters);

  return (
    <View
      view="collectivites"
      data={collectivites}
      dataCount={collectivitesCount}
      isLoading={isLoading}
      renderCard={data => {
        const collectivite = data as TCollectiviteCarte;
        return (
          <CollectiviteCarte
            key={collectivite.collectivite_id}
            collectivite={collectivite}
          />
        );
      }}
    />
  );
};

export default CollectivitesView;
