import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import SymbolSVG from 'components/Symbol'
import Header from 'layout/Header';
import Footer from 'layout/Footer';
import "node_modules/hamburgers/dist/hamburgers.css"
import createEmotionCache from 'utility/createEmotionCache';
import theme from 'styles/theme';
import { WithGraphQL } from 'utility/graphql';
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();


const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  console.log(pageProps)

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <WithGraphQL>
          {pageProps?.data?.__typename !== "Reference" && <SymbolSVG type={pageProps?.data?.__typename} />}
          <Header backgroundAbsolute={pageProps.bgHeaderAbsolute} />
          <Component {...pageProps} />
          <Footer data={pageProps.footer}/>
        </WithGraphQL>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;