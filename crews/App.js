import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Auth from './screens/Auth';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Auth/>
    </QueryClientProvider>
  );
}