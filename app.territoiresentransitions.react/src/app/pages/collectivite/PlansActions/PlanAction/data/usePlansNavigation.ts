import {useQuery} from 'react-query';

import {supabaseClient} from 'core-logic/api/supabase';
import {useCollectiviteId} from 'core-logic/hooks/params';
import {FlatAxe, PlanNode} from './types';
import {SideNavLinks} from 'ui/shared/SideNav';
import {
  makeCollectiviteFichesNonClasseesUrl,
  makeCollectivitePlanActionAxeUrl,
  makeCollectivitePlanActionUrl,
  makeCollectivitePlansActionsSyntheseUrl,
} from 'app/paths';
import {generateTitle} from '../../FicheAction/data/utils';
import {childrenOfPlanNodes, flatAxesToPlanNodes, sortPlanNodes} from './utils';

export const usePlansNavigation = () => {
  const collectivite_id = useCollectiviteId();

  return useQuery(['plans_navigation', collectivite_id], async () => {
    const {data} = await supabaseClient.rpc('navigation_plans', {
      collectivite_id: collectivite_id!,
    });
    const planNodes = data && flatAxesToPlanNodes(data as FlatAxe[]);
    return planNodes;
  });
};

/**
 * Génère une liste de lien pour la SideNav à partir d'une liste de plans d'action
 * @param plans
 * @param fichesNonClasseesTotal
 * @returns
 */
export const generatePlanActionNavigationLinks = (
  collectiviteId: number,
  hasFichesNonClassees: boolean,
  axes?: PlanNode[] | null
) => {
  const plansLinks: SideNavLinks = [
    {
      link: makeCollectivitePlansActionsSyntheseUrl({
        collectiviteId,
      }),
      displayName: 'Synthèse',
    },
  ];

  const plans = axes && sortPlanNodes(axes.filter(axe => axe.depth === 0));

  if (axes && plans) {
    plansLinks.push(
      ...plans.map(plan => {
        if (childrenOfPlanNodes(plan, axes).length > 0) {
          return {
            link: makeCollectivitePlanActionUrl({
              collectiviteId,
              planActionUid: plan.id.toString(),
            }),
            displayName: generateTitle(plan.nom),
            enfants: childrenOfPlanNodes(plan, axes).map(axe => ({
              link: makeCollectivitePlanActionAxeUrl({
                collectiviteId,
                planActionUid: plan.id.toString(),
                axeUid: axe.id.toString(),
              }),
              displayName: generateTitle(axe.nom),
            })),
          };
        } else {
          return {
            link: makeCollectivitePlanActionUrl({
              collectiviteId,
              planActionUid: plan.id.toString(),
            }),
            displayName: generateTitle(plan.nom),
          };
        }
      })
    );
  }

  if (hasFichesNonClassees) {
    plansLinks.push({
      link: makeCollectiviteFichesNonClasseesUrl({
        collectiviteId,
      }),
      displayName: 'Fiches non classées',
    });
  }

  return plansLinks;
};
