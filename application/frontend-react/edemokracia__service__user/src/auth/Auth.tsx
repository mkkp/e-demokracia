//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/auth/Auth.tsx'
// Template name: actor/src/auth/Auth.tsx
// Template file: actor/src/auth/Auth.tsx.hbs

import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { hasAuthParams, useAuth } from 'react-oidc-context';

export const Auth = ({ children }: { children?: ReactNode }) => {
  const { isAuthenticated, isLoading, activeNavigator, signinRedirect, events } = useAuth();
  const { t } = useTranslation();

  // automatically sign-in
  useEffect(() => {
    if (!hasAuthParams() && !isAuthenticated && !activeNavigator && !isLoading) {
      signinRedirect();
    }
  }, [isAuthenticated, activeNavigator, isLoading, signinRedirect]);

  useEffect(() => {
    // workaround for oidc redirect issue where query string params are filled before the hash...
    if (isAuthenticated && !activeNavigator && !isLoading) {
      if (window.location.href.includes(window.location.pathname + '?')) {
        window.location.replace(window.location.href.replace(window.location.search, ''));
      }
    }
  }, [isAuthenticated, activeNavigator, isLoading]);

  useEffect(() => {
    return events.addAccessTokenExpired(() => {
      const res = confirm(
        t('judo.security.session-expired', {
          defaultValue: 'Session expired. The application must be reloaded in order to refresh it.',
        }) as string,
      );
      if (res) {
        window.location.reload();
      }
    });
  }, [events]);

  if (activeNavigator) {
    return <div>Signing you in/out...</div>;
  }

  if (!isAuthenticated) {
    return <div>Unable to log in</div>;
  }

  return <>{children}</>;
};
