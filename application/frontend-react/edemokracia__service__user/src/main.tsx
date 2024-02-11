//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/main.tsx'
// Template name: actor/src/main.tsx
// Template file: actor/src/main.tsx.hbs

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@mdi/font/css/materialdesignicons.css';

import loaderConfiguration from '@pandino/loader-configuration-dom';
import Pandino from '@pandino/pandino';
import { PandinoProvider } from '@pandino/react-hooks';
import axios from 'axios';
import { WebStorageStateStore } from 'oidc-client-ts';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from 'react-oidc-context';
import type { AuthProviderProps } from 'react-oidc-context';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { accessServiceImpl, judoAxiosProvider } from '~/services/data-axios';
import App from './App';
import { Auth, axiosRequestInterceptor, storeMeta, userStore } from './auth';
import { RootErrorBoundary } from './components/RootErrorBoundary';
import { applicationCustomizer } from './custom';
import { ConfigProvider, ViewDataProvider } from './hooks';
import { L10NProvider } from './l10n/l10n-context';
import { routes } from './routes';
import { ThemeCustomization } from './theme';

axios.interceptors.request.use(axiosRequestInterceptor);

const API_DEFAULT_BASE_URL: string = import.meta.env.VITE_API_DEFAULT_BASE_URL || window.location.origin;
const API_RELATIVE_PATH: string = import.meta.env.VITE_API_RELATIVE_PATH || '/api';
// precedence: explicit file -> explicit api -> window.location.origin
const FILE_DEFAULT_BASE_URL: string = import.meta.env.VITE_FILE_DEFAULT_BASE_URL || API_DEFAULT_BASE_URL;

(async () => {
  const pandino = new Pandino({
    ...loaderConfiguration,
  });

  await pandino.init();
  await pandino.start();

  await applicationCustomizer.customize(pandino.getBundleContext());

  judoAxiosProvider.init({
    axios,
    basePathFactory: () => API_DEFAULT_BASE_URL + API_RELATIVE_PATH,
    filePathFactory: () => FILE_DEFAULT_BASE_URL + '/edemokracia',
  });

  const root = createRoot(document.getElementById('root') as HTMLElement);

  const router = createHashRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <RootErrorBoundary />,
      children: [...routes.map(({ path, element }) => ({ path, element }))],
    },
  ]);

  const { data: meta } = await accessServiceImpl.getMetaData();
  const { clientId, name, issuer } = meta.security[0];
  storeMeta({ issuer, clientId, name });
  const oidcConfig: AuthProviderProps = {
    authority: issuer,
    client_id: clientId,
    redirect_uri: window.location.href,
    automaticSilentRenew: true,
    userStore,
  };

  root.render(
    <StrictMode>
      <ConfigProvider>
        <ThemeCustomization>
          <PandinoProvider ctx={pandino.getBundleContext()}>
            <ViewDataProvider>
              <L10NProvider axios={axios}>
                <AuthProvider {...oidcConfig}>
                  <Auth>
                    <RouterProvider router={router} />
                  </Auth>
                </AuthProvider>
              </L10NProvider>
            </ViewDataProvider>
          </PandinoProvider>
        </ThemeCustomization>
      </ConfigProvider>
    </StrictMode>,
  );
})();
