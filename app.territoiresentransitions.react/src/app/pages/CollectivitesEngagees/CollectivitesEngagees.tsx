'use client';

import {RecherchesViewParam} from 'app/paths';
import {useOwnedCollectivites} from 'core-logic/hooks/useOwnedCollectivites';
import {usePathname} from 'next/navigation';
import {ReactNode} from 'react';
import AssocierCollectiviteBandeau from 'ui/collectivites/AssocierCollectiviteBandeau';
import CollectivitesFiltersProvider from './Views/CollectivitesFiltersContext';
import FiltersColonne from './Filters/FiltersColonne';

const CollectivitesEngagees = ({children}: {children: ReactNode}) => {
  const ownedCollectivites = useOwnedCollectivites();
  const hasCollectivites = ownedCollectivites?.length !== 0;

  const pathname = usePathname();
  const vue = pathname.split('/')[2] as RecherchesViewParam;

  return (
    <CollectivitesFiltersProvider>
      <div className="bg-primary-1 -mb-8">
        {!hasCollectivites && <AssocierCollectiviteBandeau />}
        <div
          data-test="ToutesLesCollectivites"
          className="app fr-container py-16"
        >
          <div className="md:flex md:gap-6 xl:gap-12">
            <FiltersColonne vue={vue} />
            {children}
          </div>
        </div>
      </div>
    </CollectivitesFiltersProvider>
  );
};

export default CollectivitesEngagees;
