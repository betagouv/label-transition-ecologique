import {Route, useParams, useRouteMatch} from 'react-router-dom';
import {
  ActionReferentielAvancementPage,
  IndicateursPage,
  ReferentielsPage,
} from 'app/pages/index';
import {useActions} from 'core-logic/overmind';
import {PlanActionPage} from 'app/pages/collectivite/PlanActions/PlanActionsPage';
import {FicheActionPage} from 'app/pages/collectivite/PlanActions/FicheActionPage';
import {FicheActionCreationPage} from 'app/pages/collectivite/PlanActions/FicheActionCreationPage';

/**
 * Routes starting with collectivite/:epciId/ see App.ts Router.
 *
 * Is responsible for setting the current epci id.
 */
export const CollectiviteRoutes = () => {
  const {path, url} = useRouteMatch();
  const {epciId} = useParams<{epciId: string}>();
  useActions().epcis.setCurrentEpci(epciId);

  // if (false) {
  //   // todo redirect when user is not authenticated: https://reactrouter.com/web/example/auth-workflow
  //   return <Redirect to="" />;
  // }
  return (
    <>
      <Route path={`${path}/referentiels/`}>
        <ReferentielsPage />
      </Route>
      <Route path={`${path}/action/:referentiel/:actionId`}>
        <ActionReferentielAvancementPage />
      </Route>
      <Route path={`${path}/indicateurs/`}>
        <IndicateursPage />
      </Route>
      <Route path={`${path}/plan_actions/`}>
        <PlanActionPage />
      </Route>
      <Route path={`${path}/fiche/:ficheUid`}>
        <FicheActionPage />
      </Route>
      <Route path={`${path}/nouvelle_fiche/`}>
        <FicheActionCreationPage />
      </Route>
    </>
  );
};
