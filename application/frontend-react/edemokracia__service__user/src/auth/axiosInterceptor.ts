//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/auth/axiosInterceptor.ts'
// Template name: actor/src/auth/axiosInterceptor.ts
// Template file: actor/src/auth/axiosInterceptor.ts.hbs

import type { AxiosRequestConfig } from 'axios';
import { User, WebStorageStateStore } from 'oidc-client-ts';

const securityStore: { authority?: string; clientId?: string; name?: string } = {};

export function storeMeta(meta: any): void {
  securityStore.authority = meta.issuer;
  securityStore.clientId = meta.clientId;
  securityStore.name = meta.name;
}

export const storageKey = () => `oidc.user:${securityStore.name!}`;

// We need to store the user per realm, not per actor.
const store: Storage = {
  ...window.sessionStorage,
  getItem(key: string): string | null {
    return window.sessionStorage.getItem(storageKey());
  },
  setItem(key: string, value: string) {
    window.sessionStorage.setItem(storageKey(), value);
  },
  removeItem(key: string) {
    window.sessionStorage.removeItem(storageKey());
  },
};

export const clearSecurityStorage = () => store.removeItem(storageKey());

export const userStore = new WebStorageStateStore({ store: store as Storage });

export function getUser(): any {
  const { name } = securityStore;

  const oidcStorage = window.sessionStorage.getItem(storageKey());
  if (!oidcStorage) {
    return null;
  }

  return User.fromStorageString(oidcStorage);
}

export const axiosRequestInterceptor = (config: AxiosRequestConfig) => {
  try {
    if (!config.url?.endsWith('~meta')) {
      const user = getUser();
      const accessToken = user?.access_token;

      if (accessToken && config.headers) {
        config.headers!.Authorization = `Bearer ${accessToken}`;
      }
    }
  } catch (_) {}

  return config;
};
