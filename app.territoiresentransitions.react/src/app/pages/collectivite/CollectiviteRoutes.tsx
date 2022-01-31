import {Route, useRouteMatch} from 'react-router-dom';

import {PlanActionPage} from 'app/pages/collectivite/PlanActions/PlanActionsPage';
import {FicheActionPage} from 'app/pages/collectivite/PlanActions/FicheActionPage';
import {FicheActionCreationPage} from 'app/pages/collectivite/PlanActions/FicheActionCreationPage';
import {
  collectiviteActionPath,
  collectiviteIndicateurPath as collectiviteIndicateursPath,
  collectiviteNouvelleFichePath,
  collectivitePlanActionPath,
  collectiviteReferentielPath,
  collectiviteTableauBordPath,
} from 'app/paths';
import {ReferentielsPage} from 'app/pages/collectivite/Referentiels/ReferentielsPage';
import {ActionReferentielAvancementPage} from 'app/pages/collectivite/Referentiels/ActionReferentielAvancementPage';
import {IndicateursPage} from 'app/pages/collectivite/Indicateurs/IndicateursPage';
import {TableauBordPage} from 'app/pages/collectivite/TableauBord/TableauBordPage';

/**
 * Routes starting with collectivite/:collectiviteId/ see App.ts Router.
 *
 * Is responsible for setting the current collectivite id.
 */
export const CollectiviteRoutes = () => {
  const {path} = useRouteMatch();
  return (
    <>
      <Route path={collectiviteReferentielPath}>
        <ReferentielsPage />
      </Route>
      <Route path={collectiviteTableauBordPath}>
        <TableauBordPage />
      </Route>
      <Route path={collectiviteActionPath}>
        <ActionReferentielAvancementPage />
      </Route>
      <Route path={collectiviteIndicateursPath}>
        <IndicateursPage />
      </Route>
      <Route path={collectivitePlanActionPath}>
        <PlanActionPage />
      </Route>
      <Route path={`${path}/fiche/:ficheUid`}>
        <FicheActionPage />
      </Route>
      <Route path={collectiviteNouvelleFichePath}>
        <FicheActionCreationPage />
      </Route>
    </>
  );
};
