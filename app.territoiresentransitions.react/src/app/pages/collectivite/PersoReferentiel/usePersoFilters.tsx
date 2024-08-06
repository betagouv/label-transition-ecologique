import {Referentiel} from 'types/litterals';
import {useSearchParamsState} from 'core-logic/hooks/query';

export const usePersoFilters = () =>
  useSearchParamsState<{referentiels: Referentiel[]}>(
    'personnalisation',
    {referentiels: ['eci', 'cae']},
    {referentiels: 'r'}
  );
