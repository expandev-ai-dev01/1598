import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/core/lib/queryClient';
import { AppRouter } from './router';

/**
 * @component App
 * @summary Root application component
 * @description Provides global context providers and routing
 * @domain core
 * @type root-component
 * @category application
 */
export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
};
