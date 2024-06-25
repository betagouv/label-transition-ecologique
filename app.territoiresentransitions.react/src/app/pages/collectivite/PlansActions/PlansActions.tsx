import {Route, Switch} from 'react-router-dom';

import {
  collectivitePlansActionsSynthesePath,
  collectivitePlansActionsSyntheseVuePath,
  collectiviteTDBBasePath,
} from 'app/paths';
import {useCurrentCollectivite} from 'core-logic/hooks/useCurrentCollectivite';
import CollectivitePageLayout from '../CollectivitePageLayout/CollectivitePageLayout';
import {RouteEnAccesRestreint} from '../CollectiviteRoutes';
import {TableauDeBordPage} from '../TableauDeBord/TableauDeBordPage';
import {PlansActionsRoutes} from './PlansActionsRoutes';
import {SynthesePage} from './Synthese/SynthesePage';
import {SyntheseVuePage} from './Synthese/SyntheseVue/SyntheseVuePage';

const PlansActions = () => {
  const collectivite = useCurrentCollectivite();

  if (!collectivite) return null;

  return (
    <Switch>
      <RouteEnAccesRestreint path={collectiviteTDBBasePath}>
        <TableauDeBordPage />
      </RouteEnAccesRestreint>

      {/* Synthèse */}
      <Route exact path={[collectivitePlansActionsSynthesePath]}>
        <CollectivitePageLayout>
          <SynthesePage collectiviteId={collectivite.collectivite_id} />
        </CollectivitePageLayout>
      </Route>
      <Route exact path={[collectivitePlansActionsSyntheseVuePath]}>
        <CollectivitePageLayout>
          <SyntheseVuePage />
        </CollectivitePageLayout>
      </Route>

      <PlansActionsRoutes
        collectivite_id={collectivite.collectivite_id}
        readonly={collectivite.readonly}
      />
    </Switch>
  );
};

export default PlansActions;
