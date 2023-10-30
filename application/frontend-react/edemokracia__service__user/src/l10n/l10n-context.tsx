//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/l10n/l10n-context.tsx'
// Template name: actor/src/l10n/l10n-context.tsx
// Template file: actor/src/l10n/l10n-context.tsx.hbs

import hu from 'date-fns/locale/hu';
import enUS from 'date-fns/locale/en-US';
import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { OBJECTCLASS } from '@pandino/pandino-api';
import type { ServiceReference } from '@pandino/pandino-api';
import { useTrackService, useBundleContext } from '@pandino/react-hooks';

const locales = {
  'en-US': enUS,
  'hu-HU': hu,
};

type LocaleKey = keyof typeof locales;

export interface L10NContext {
  locale: LocaleKey;
  setLocale: (newLocale: LocaleKey) => void;
}

const L10NContext = createContext<L10NContext>({} as unknown as L10NContext);

export interface L10NTranslations {
  systemTranslations: Record<string, string>;
  applicationTranslations: Record<string, string>;
}

export const L10N_TRANSLATION_PROVIDER_INTERFACE_KEY = 'L10NTranslationProvider';

export interface L10NTranslationProvider {
  provideTranslations(locale: string): Promise<L10NTranslations>;
}
export const L10NProvider = ({ axios, children }: { axios?: AxiosInstance; children: ReactNode }) => {
  const defaultLocale: LocaleKey = 'hu-HU';
  const [locale, setLocale] = useState<LocaleKey>(defaultLocale);
  const [translation, setTranslation] = useState<any>(null);
  const [filter, setFilter] = useState<string>(`(${OBJECTCLASS}=${L10N_TRANSLATION_PROVIDER_INTERFACE_KEY})`);
  const { service: translationProvider } = useTrackService<L10NTranslationProvider>(filter);
  const [interceptorId, setInterceptorId] = useState<number | null>(null);

  useEffect(() => {
    if (axios) {
      if (interceptorId !== null) {
        axios.interceptors.request.eject(interceptorId);
      }
      const newInterceptorId = axios.interceptors.request.use(
        (config: AxiosRequestConfig): AxiosRequestConfig => {
          if (!config.headers) {
            config.headers = {};
          }
          const shortLocale = locale.indexOf('-') > -1 ? locale.substring(0, locale.indexOf('-')) : locale;
          config.headers['Accept-Language'] = `${locale}, ${shortLocale};q=0.9, *;q=0.5`;

          return config;
        },
        (error: AxiosError): Promise<AxiosError> => {
          return Promise.reject(error);
        },
      );
      setInterceptorId(newInterceptorId);
    }

    (async () => {
      let dataSystem: { translation: any } = { translation: {} };
      let dataApplication: { translation: any } = { translation: {} };

      if (translationProvider) {
        const { systemTranslations, applicationTranslations } = await translationProvider.provideTranslations(locale);
        dataSystem = { translation: systemTranslations };
        dataApplication = { translation: applicationTranslations };
      } else {
        try {
          const responseSystem = await fetch(`i18n/system_${locale}.json?stamp=${new Date().toISOString()}`);
          dataSystem = await responseSystem.json();
          const responseApplication = await fetch(`i18n/application_${locale}.json?stamp=${new Date().toISOString()}`);
          dataApplication = await responseApplication.json();
        } catch (error) {
          console.error(`Error fetching i18n resources: ${error}`);
        }
      }

      setTranslation({
        ...dataSystem.translation,
        ...dataApplication.translation,
      });

      i18n.use(initReactI18next).init({
        resources: {
          [locale]: {
            translation: {
              ...dataSystem.translation,
              ...dataApplication.translation,
            },
          },
        },
        lng: locale,
        interpolation: {
          escapeValue: false,
        },
      });
    })();
  }, [locale, translationProvider]);

  return (
    <L10NContext.Provider value={{ locale, setLocale }}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={locales[locale]}>
        <I18nextProvider i18n={i18n}>{translation && children}</I18nextProvider>
      </LocalizationProvider>
    </L10NContext.Provider>
  );
};

export const useL10N = () => {
  const { locale, setLocale } = useContext(L10NContext);

  return { locale, setLocale };
};
