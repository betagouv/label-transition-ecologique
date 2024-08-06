import {
  useSearchParams as nextUseSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import {useEffect, useMemo, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {ITEM_ALL} from 'ui/shared/filters/commons';

export const useQuery = (): URLSearchParams => {
  const search = nextUseSearchParams();
  return useMemo(() => new URLSearchParams(search), [search]);
};

export type TParams = Record<string, unknown>;
type TNamesMap = Record<string, string>;

/**
 * Permet de synchroniser un objet avec les paramètres de recherche d'une URL
 */
export const useSearchParamsState = <T extends TParams>(
  viewName: string,
  initialParams: T,
  nameToShortName: TNamesMap
): [params: T, setParams: (newParams: T) => void, paramsCount: number] => {
  const history = useHistory();
  const pathname = usePathname();
  const shortNameToName = useMemo(
    () => invertKeyValues(nameToShortName),
    [nameToShortName]
  );

  // extrait les paramètres de l'url si ils sont disponibles (ou utilise les
  // valeurs par défaut pour l'initialisation)
  const searchParams = useQuery();
  const currentParamsFromURL = searchParamsToObject<T>(
    searchParams,
    initialParams,
    shortNameToName
  );

  // conserve les paramètres dans l'état interne
  const [params, setParams] = useState(currentParamsFromURL);
  const paramsCount = useMemo(() => getParamsCount(params), [params]);

  // synchronise l'url à partir de l'état interne
  useEffect(() => {
    const search = objectToSearchParams(params, nameToShortName);
    if (pathname.endsWith(viewName) && searchParams.toString() !== search) {
      history.replace({...location, search: '?' + search});
    }
  }, [params, pathname]);

  // besoin de ça car les params ne s'actualisent pas au changement d'URL entre 2 plans d'action
  useEffect(() => {
    setParams(currentParamsFromURL);
  }, [pathname]);

  return [params, setParams, paramsCount];
};

export const useSearchParamsStateNext = <T extends TParams>(
  initialParams: T,
  nameToShortName: TNamesMap
): [
  params: T,
  // setParam: (name: keyof T, value: unknown) => void,
  setParams: (someParams: Partial<T>) => void,
  paramsCount: number
] => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const shortNameToName = useMemo(
    () => invertKeyValues(nameToShortName),
    [nameToShortName]
  );

  const params = searchParamsToObject<T>(
    searchParams,
    initialParams,
    shortNameToName
  );

  // conserve les paramètres dans l'état interne
  // const [params, setParams] = useState(currentParamsFromURL);
  const paramsCount = getParamsCount(params);

  // const handleSetParam = (name: keyof T, value: unknown) => {
  //   const newParams = {...params, [name]: value};
  //   const search = objectToSearchParams(newParams, nameToShortName);
  //   router.push(`${pathname}?${search}`);
  // };

  const handleSetParams = (someParams: Partial<T>) => {
    const newParams = {...params, ...someParams};
    const search = objectToSearchParams(newParams, nameToShortName);
    router.push(`${pathname}?${search}`);
  };

  return [params, handleSetParams, paramsCount];
};

// converti les paramètres de recherche d'une URL en un objet
// ex: "?p1=v1&p2=v2,v3" sera converti en {prop1: ['v1'], prop2: ['v2', 'v3'], prop3: ['v4']}
// avec initialParams = {prop3: ['v4']} et shortNameToName = {p1: 'prop1', p2: 'prop2', p3: 'prop3'}
const searchParamsToObject = <T extends TParams>(
  params: URLSearchParams,
  initialParams: T,
  shortNameToName: TNamesMap
): T => {
  const ret: TParams = {};
  params.forEach((value, key) => {
    if (shortNameToName[key]) {
      ret[shortNameToName[key]] = value
        ?.split(',')
        ?.filter(s => s !== '')
        .map(s => {
          try {
            return decodeURIComponent(s);
          } catch (e) {
            return s;
          }
        });
    }
  });
  return {...initialParams, ...ret};
};

// fait l'opération inverse
const objectToSearchParams = (
  obj: TParams,
  nameToShorName: TNamesMap
): string =>
  Object.entries(obj)
    .reduce(
      (ret, [key, value]) =>
        nameToShorName[key]
          ? [
              ...ret,
              nameToShorName[key] +
                '=' +
                encodeURIComponent(
                  typeof (value as string[]).join === 'function'
                    ? (value as string[]).join(',')
                    : String(value)
                ),
            ]
          : ret,
      [] as string[]
    )
    .join('&');

// inverse les clés/valeurs d'un objet et renvoi le nouvel objet
const invertKeyValues = (obj: TNamesMap) =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));

// compte les paramètres actifs
const getParamsCount = (params: TParams) =>
  Object.values(params).reduce((cnt: number, f) => cnt + paramsLength(f), 0);

const paramsLength = (params: unknown | unknown[]) => {
  if (Array.isArray(params)) {
    return params?.length && !params.includes(ITEM_ALL) ? params.length : 0;
  }
  return params !== undefined ? 1 : 0;
};
