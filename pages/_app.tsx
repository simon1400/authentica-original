import {FC} from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
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
import Script from 'next/script';
import CookieConsent from 'components/CookieConsent';

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
          <Script id="google-analytics" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W9NKJGR');`}
          </Script>
          <Script id="Cookiew consent" type="text/javascript" src="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.0/dist/cookieconsent.js" />
          <Header backgroundAbsolute={pageProps.bgHeaderAbsolute} />
          <Component {...pageProps} />
          <Footer data={pageProps.footer}/>
          <CookieConsent />
        </WithGraphQL>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default appWithTranslation(MyApp);