import { useEffect } from "react";
import pluginConfig from "utility/cookiesConsentConfig";
import 'vanilla-cookieconsent';

declare global {
  interface Window {
    CookieConsentApi: any;
  }
}

export default function CookieConsent() {
  useEffect(() => {
    /**
     * useEffect is executed twice (React 18+),
     * make sure the plugin is initialized and executed once
     */
    // if(typeof window !== 'undefined') {
      if (!document.getElementById('cc--main')) {
        window.CookieConsentApi = window.initCookieConsent();
        window.CookieConsentApi.run(pluginConfig);
      }
    // }
  }, []);

  return null;
}