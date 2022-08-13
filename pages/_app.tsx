import {FC} from 'react';
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
import { appWithTranslation } from 'next-i18next';

import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";

import '../node_modules/react-modal-video/scss/modal-video.scss';

import 'styles/global.scss'
import Head from 'next/head';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();


const MyApp: FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <WithGraphQL>
        <Head>
          {!!pageProps.localizations?.length && pageProps.localizations.map((item: any, idx: number) => 
            <link 
              key={idx} 
              rel="alternate" 
              hrefLang={item.locale} 
              href={`${process.env.APP_DOMAIN}${item.locale !== 'cs' ? `/${item.locale}` : ''}${item.slug}`} />)}
        </Head>
          {pageProps?.data?.__typename !== "Reference" && <SymbolSVG type={pageProps?.data?.__typename} />}
          <Header backgroundAbsolute={pageProps.bgHeaderAbsolute} />
          <Component {...pageProps} />
          <Footer data={pageProps.footer}/>
        </WithGraphQL>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default appWithTranslation(MyApp);