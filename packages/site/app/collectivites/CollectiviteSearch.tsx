'use client';

import { convertNameToSlug } from '@/site/src/utils/convertNameToSlug';
import { Select } from '@/ui';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import { useFilteredCollectivites } from '../useFilteredCollectivites';

type CollectiviteSearchProps = {
  filteredCollectivites: { value: string; label: string }[];
  isCollectivitesLoading: boolean;
  setSearch: Dispatch<SetStateAction<string>>;
};

const CollectiviteSearch = ({
  filteredCollectivites,
  isCollectivitesLoading,
  setSearch,
}: CollectiviteSearchProps) => {
  const router = useRouter();

  return (
    <div className="mx-auto w-96 max-w-full">
      <Select
        placeholder="Rechercher une collectivité"
        debounce={500}
        options={filteredCollectivites}
        isLoading={isCollectivitesLoading}
        onChange={(value) => {
          const name =
            filteredCollectivites.find((c) => c.value === value)?.label ?? '';
          router.push(`/collectivites/${value}/${convertNameToSlug(name)}`);
        }}
        onSearch={(value) => setSearch(value)}
      />
    </div>
  );
};

const CollectiviteSearchConnected = () => {
  const [search, setSearch] = useState('');
  const data = useFilteredCollectivites(search);

  return (
    <CollectiviteSearch
      filteredCollectivites={
        (data.data?.filteredCollectivites.map((c) => ({
          value: c.code_siren_insee,
          label: c.nom,
        })) ?? []) as { value: string; label: string }[]
      }
      isCollectivitesLoading={data.isLoading}
      setSearch={setSearch}
    />
  );
};

export default CollectiviteSearchConnected;
