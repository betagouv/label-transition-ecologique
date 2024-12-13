import { Suspense } from 'react';
import { lazy } from 'utils/lazy';
import { renderLoader } from 'utils/renderLoader';

const Indicateurs = lazy(
  () => import('@/app/app/pages/collectivite/Indicateurs/Indicateurs')
);

/**
 * Indicateurs page show both indicateurs personnalisés and indicateurs référentiel.
 */
export const IndicateursPage = () => {
  return (
    <Suspense fallback={renderLoader()}>
      <Indicateurs />
    </Suspense>
  );
};
