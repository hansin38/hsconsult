import { Hydrate, QueryClientProvider } from 'react-query';
import { Global } from '@emotion/react';
import React from 'react';
import { GlobalStyles } from '@/shared/styles/global';
import queryClient from '@/shared/configs/queryClient';

const App = ({ Component, pageProps }): React.ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={GlobalStyles} />
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
