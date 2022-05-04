import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import Header from 'layout/Header';
import Footer from 'layout/Footer';

import createEmotionCache from 'utility/createEmotionCache';
import theme from 'styles/theme';
import { WithGraphQL } from 'utility/graphql';
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();


const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <WithGraphQL>
          <Header absoluteHeader={pageProps.absoluteHeader} />
          <Component {...pageProps} />
          <Footer />
        </WithGraphQL>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;