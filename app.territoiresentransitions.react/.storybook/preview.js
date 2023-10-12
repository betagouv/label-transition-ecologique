/**
 * Configuration de la pré-visualisation des composants
 */
import StoryRouter from './storyRouterDecorator';
import {QueryClient, QueryClientProvider} from 'react-query';
import {AuthContext} from '../src/core-logic/api/auth/AuthProvider';

// charge les styles de l'appli
import '../src/css';

// pour faire fonctionner storybook avec react-query et notre contexte d'auth.
const queryClient = new QueryClient();
const mockAuthState = {
  connect: () => Promise.resolve(true),
  disconnect: () => Promise.resolve(true),
  isConnected: false,
  user: null,
  authError: null,
};
export const decorators = [
  // pour faire fonctionner storybook avec react-router
  StoryRouter(),
  // et avec react-query
  Story => (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={mockAuthState}>
        <Story />
      </AuthContext.Provider>
    </QueryClientProvider>
  ),
];

// configuration
export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
