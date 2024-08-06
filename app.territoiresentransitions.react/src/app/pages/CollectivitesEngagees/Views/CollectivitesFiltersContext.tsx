import {CollectiviteEngagee} from '@tet/api';
import {useAuth} from '@tet/app/core-logic/api/auth/AuthProvider';
import {useSearchParamsStateNext} from '@tet/app/core-logic/hooks/query';
import {useOwnedCollectivites} from '@tet/app/core-logic/hooks/useOwnedCollectivites';
import {createContext, ReactNode, useContext} from 'react';
import {initialFilters, nameToShortNames, SetFilters} from '../data/filters';

type ContextType = {
  initialFilters: CollectiviteEngagee.Filters;
  filters: CollectiviteEngagee.Filters;
  setFilters: SetFilters;
  canUserClickCard: boolean;
  isConnected: boolean;
};

const Context = createContext<ContextType | undefined>(undefined);

export default function CollectivitesFiltersProvider({
  children,
}: {
  children: ReactNode;
}) {
  const {isConnected} = useAuth();

  const ownedCollectivites = useOwnedCollectivites();
  const hasCollectivites = ownedCollectivites?.length !== 0;

  const canUserClickCard = hasCollectivites && isConnected;

  const [filters, setFilters] =
    useSearchParamsStateNext<CollectiviteEngagee.Filters>(
      // useSearchParamsState<CollectiviteEngagee.Filters>(

      initialFilters,
      nameToShortNames
    );

  return (
    <Context.Provider
      value={{
        initialFilters,
        filters,
        setFilters,
        isConnected,
        canUserClickCard,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useCollectivitesFilters() {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      'useCollectivitesFilters must be used within a CollectivitesFiltersContext'
    );
  }
  return context;
}
