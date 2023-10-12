'use client';

import useSWR from 'swr';
import {supabase} from '../initSupabase';
import {useCallback, useEffect, useRef, useState} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import Select from '../../components/inputs/Select';

/**
 * Toutes les régions.
 */
function useRegion() {
  return useSWR('region', async () => {
    const {data, error} = await supabase.from('region').select();
    if (error) {
      throw new Error(error.message);
    }
    return data ? data : null;
  });
}

/**
 * Les départements filtrables par code région.
 *
 * @param regionCode le code région ou une chaine vide.
 */
function useDepartment(regionCode: string) {
  return useSWR(`departement-${regionCode}`, async () => {
    let select = supabase.from('departement').select();
    if (regionCode) select = select.eq('region_code', regionCode);
    const {data, error} = await select;
    if (error) {
      throw new Error(error.message);
    }
    return data ? data : null;
  });
}

const emptyString = '';

/**
 * Filtre de la page statistiques, par région et par département
 *
 * @param onChange - Renvoie au composant parent le nom du nouvel élément sélectionné
 */

type RegionAndDeptFiltersProps = {
  onChange: (value: string | null) => void;
};

const RegionAndDeptFilters = ({onChange}: RegionAndDeptFiltersProps) => {
  const router = useRouter();
  const pathName = usePathname() ?? '';

  const [selectedRegion, setSelectedRegion] = useState<string>(emptyString);
  const [selectedDepartment, setSelectedDepartment] =
    useState<string>(emptyString);

  const regions = useRegion().data;
  const departments = useDepartment(selectedRegion).data;

  const changeDepartmentName = useCallback(() => {
    const newDepartment = departments?.find(
      dept => dept.code === selectedDepartment,
    );
    onChange(newDepartment?.libelle ?? null);
  }, [departments, selectedDepartment, onChange]);

  const changeRegionName = useCallback(() => {
    const newRegion = regions?.find(region => region.code === selectedRegion);
    onChange(newRegion?.libelle ?? null);
  }, [regions, selectedRegion, onChange]);

  useEffect(() => {
    // Mise à jour des states selectedDepartment et selectedRegion
    // + du titre lors du changement d'url
    const pathArray = pathName.split('/');

    if (pathArray.length === 2 && pathArray[1] === 'stats') {
      setSelectedDepartment(emptyString);
      setSelectedRegion(emptyString);
      onChange(null);
    } else if (pathArray.length === 4 && pathArray[1] === 'stats') {
      if (pathArray[2] === 'region') {
        setSelectedRegion(pathArray[3]);
        setSelectedDepartment(emptyString);
        changeRegionName();
      } else if (pathArray[2] === 'departement') {
        setSelectedDepartment(pathArray[3]);
        changeDepartmentName();
      }
    }
  }, [pathName, changeRegionName, changeDepartmentName, onChange]);

  useEffect(() => {
    // Permet la mise à jour du titre quand l'url
    // est mis à jour manuellement
    if (selectedDepartment) changeDepartmentName();
    else if (selectedRegion) changeRegionName();
  }, [
    regions,
    departments,
    selectedRegion,
    selectedDepartment,
    changeRegionName,
    changeDepartmentName,
  ]);

  useEffect(() => {
    // Redirige vers la nouvelle page stats quand
    // selectedDepartment est modifié
    if (!!selectedDepartment) {
      router.push(`/stats/departement/${selectedDepartment}`);
    } else {
      if (!!selectedRegion) {
        router.push(`/stats/region/${selectedRegion}`);
      } else router.push(`/stats/`);
    }
  }, [selectedDepartment, selectedRegion, router]);

  useEffect(() => {
    // Redirige vers la nouvelle page stats quand
    // selectedRegion est modifié
    if (!!selectedRegion) {
      router.push(`/stats/region/${selectedRegion}`);
    } else router.push(`/stats/`);
  }, [selectedRegion, router]);

  if (!regions || !departments) return null;

  return (
    <div
      className="fr-select-group"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        columnGap: '50px',
        rowGap: '20px',
        justifyItems: 'start',
        alignItems: 'end',
      }}
    >
      <Select
        name="region"
        label="Région"
        emptyOptionLabel="Toutes les régions"
        // @ts-ignore
        options={regions.map(region => ({
          value: region.code,
          name: region.libelle,
        }))}
        value={selectedRegion}
        style={{width: '100%'}}
        onChange={setSelectedRegion}
      />

      <Select
        name="department"
        label="Département"
        emptyOptionLabel="Tous les départements"
        // @ts-ignore
        options={departments.map(department => ({
          value: department.code,
          name: department.libelle,
        }))}
        value={selectedDepartment}
        style={{width: '100%'}}
        onChange={setSelectedDepartment}
      />

      <button
        className="fr-btn fr-btn--secondary"
        onClick={() => {
          setSelectedRegion(emptyString);
          setSelectedDepartment(emptyString);
        }}
        style={{
          visibility:
            selectedDepartment || selectedRegion ? 'visible' : 'hidden',
        }}
      >
        Désactiver tous les filtres
      </button>
    </div>
  );
};

export default RegionAndDeptFilters;
