import React from 'react';
import { Button, Text, View,TouchableOpacity } from 'react-native';
import {QueryClient , QueryClientProvider} from 'react-query';
import Router from './pages/Router';
export type Props = {
  
};

const App: React.FC<Props> = ( {} ) => {
  const queryClient = new QueryClient()
  return (
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
  );
};


export default App;