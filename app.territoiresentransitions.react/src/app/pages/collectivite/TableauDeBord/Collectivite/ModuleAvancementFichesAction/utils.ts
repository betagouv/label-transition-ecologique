import { Statut } from '@/api/plan-actions';
import { Filtre } from '@/api/plan-actions/dashboards/collectivite-dashboard/domain/fiches-synthese.schema';
import { FicheActionParam } from '@/app/pages/collectivite/PlansActions/ToutesLesFichesAction/ToutesLesFichesAction';
import { makeCollectiviteToutesLesFichesUrl } from '@/app/paths';

/** Permet de transformer les filtres de modules fiches action en paramètres d'URL */
export const makeFichesActionUrlWithParams = (
  collectiviteId: number,
  filtres: Filtre,
  statut: Statut | 'Sans statut'
): string => {
  const baseUrl =
    statut === 'Sans statut'
      ? `${makeCollectiviteToutesLesFichesUrl({
          collectiviteId,
        })}?sss=true`
      : `${makeCollectiviteToutesLesFichesUrl({
          collectiviteId,
        })}?s=${statut}`;

  const searchParams = new URLSearchParams();

  Object.keys(filtres).forEach((key) => {
    const filterKey = key as keyof Filtre;
    const value = filtres[filterKey];

    const isArray = Array.isArray(value);

    const getKey = (filterKey: keyof Filtre): FicheActionParam | undefined => {
      if (filterKey === 'planActionIds') return 'pa';
      if (filterKey === 'utilisateurPiloteIds') return 'up';
      if (filterKey === 'personnePiloteIds') return 'pp';
      if (filterKey === 'servicePiloteIds') return 'sv';
      if (filterKey === 'partenaireIds') return 'pt';
      if (filterKey === 'cibles') return 'c';
    };

    const paramKey = getKey(filterKey);

    if (value !== undefined && !!paramKey) {
      if (isArray && value.length > 0) {
        searchParams.append(paramKey, isArray ? value.join(',') : value);
      } else {
        searchParams.append(paramKey, value.toString());
      }
    }
  });

  return `${baseUrl}&${searchParams.toString()}`;
};
