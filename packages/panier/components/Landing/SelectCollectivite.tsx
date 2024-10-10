'use client';

import {useState} from 'react';
import {Select} from '@tet/ui';
import { useFilteredCollectivites } from './useFilteredCollectivites';
import { useCollectiviteInfo } from './useCollectiviteInfo';

/**
 *  Permet de rechercher et sélectionner une collectivité
 */
const SelectCollectivite = ({
  collectiviteId,
  onSelectCollectivite,
}: {
  collectiviteId: number | null;
  onSelectCollectivite: (id: number | null) => void;
}) => {
  const [search, setSearch] = useState('');
  const { data: collectivites, isLoading } = useFilteredCollectivites(search);
  const { data: collectiviteInfo } = useCollectiviteInfo(collectiviteId);

  const options =
    collectivites?.map((c) => ({
      value: c.collectivite_id,
      label: `${c.nom} (${c.departement_code})`,
    })) || [];
  if (
    !collectivites?.find((c) => c.collectivite_id === collectiviteId) &&
    collectiviteInfo
  ) {
    options.push({
      value: collectiviteInfo.collectivite_id,
      label: collectiviteInfo.nom,
    });
  }

  return (
    <Select
      placeholder="Rechercher une collectivité"
      debounce={500}
      options={options}
      values={collectiviteId ? collectiviteId : undefined}
      isSearcheable
      onSearch={setSearch}
      isLoading={isLoading}
      onChange={(value) => {
        const id = collectiviteId === value ? null : (value as number);
        onSelectCollectivite(id);
      }}
    />
  );
};

export default SelectCollectivite;
