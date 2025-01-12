'use client';

import { ENV } from '@/api/environmentVariables';
import { TRPCProvider } from '@/api/utils/trpc/client';
import { createTrackingClient, TrackingProvider } from '@/ui';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthProvider } from './core-logic/api/auth/AuthProvider';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000091',
    },
  },
});

const trackingClient = createTrackingClient(ENV.posthog);
const queryClient = new QueryClient();

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TrackingProvider client={trackingClient}>
      <TRPCProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <ThemeProvider theme={theme}>
              <ReactQueryDevtools initialIsOpen={false} />
              {children}
            </ThemeProvider>
          </AuthProvider>
        </QueryClientProvider>
      </TRPCProvider>
    </TrackingProvider>
  );
}
