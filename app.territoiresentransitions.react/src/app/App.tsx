'use client';

import {CollectiviteRoutes} from 'app/pages/collectivite/CollectiviteRoutes';
import Home from 'app/pages/Home';
import {Redirector} from 'app/Redirector';
import {ScrollToTopOnPageChange} from 'app/ScrollToTopOnPageChange';
import {Toasters} from 'app/Toasters';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import {E2E} from './E2E';

import {profilPath} from 'app/paths';
import {ProfilPage} from './pages/Profil/ProfilPage';

import {VisitTracker} from 'app/VisitTracker';
import {ScoreListenerProvider} from 'core-logic/hooks/useScoreListener';
import AccepterCGUModal from './pages/Auth/AccepterCGUModal';

export default function App() {
  return (
    <Router>
      <ScoreListenerProvider>
        <E2E />
        <ScrollToTopOnPageChange />
        <Toasters />
        <Redirector />
        <VisitTracker />
        <AccepterCGUModal />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path={profilPath}>
            <ProfilPage />
          </Route>

          <Route path={'/collectivite/:collectiviteId'}>
            <CollectiviteRoutes />
          </Route>
        </Switch>
      </ScoreListenerProvider>
    </Router>
  );
}
