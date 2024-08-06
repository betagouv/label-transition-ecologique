'use client';

import {CollectiviteEngagee} from '@tet/api';
import {PlanCarte} from 'app/pages/CollectivitesEngagees/Views/PlanCarte';
import View from 'app/pages/CollectivitesEngagees/Views/View';
import {useFilteredPlans} from 'app/pages/CollectivitesEngagees/data/useFilteredPlans';
import {useCollectivitesFilters} from './CollectivitesFiltersContext';
const PlansView = () => {
  const {filters} = useCollectivitesFilters();
  const {plans, plansCount, isLoading} = useFilteredPlans(filters);

  return (
    <View
      view="plans"
      data={plans}
      dataCount={plansCount}
      isLoading={isLoading}
      renderCard={data => {
        const plan = data as CollectiviteEngagee.TPlanCarte;
        return <PlanCarte key={plan.id} plan={plan} />;
      }}
    />
  );
};

export default PlansView;
