import React from 'react';
import {createRoot} from 'react-dom/client';
import * as Sentry from '@sentry/react';
import {App} from 'app/App';
import {ENV} from 'environmentVariables';
import 'css';
import {Crisp} from 'crisp-sdk-web';

// initialise la chatbox
Crisp.configure(ENV.crispId || 'fake');

// traçage des perf. et erreurs
if (ENV.sentry_dsn) {
  Sentry.init({
    dsn: ENV.sentry_dsn,
    environment: ENV.node_env,
    integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],

    // monitoring des perf. sur 25% des transactions
    tracesSampleRate: 0.25,

    // replay enregistré uniquement en cas d'erreur
    replaysSessionSampleRate: 0,
    replaysOnErrorSampleRate: 1.0,
  });
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
