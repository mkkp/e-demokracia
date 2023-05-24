//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'data-axios/'+'AxiosProvider.ts'
// Template name: axiosProvider.ts.hbs
// Template file: data-axios/axiosProvider.ts.hbs

import { AxiosInstance } from 'axios';

export interface JudoAxiosProviderInitData {
  axios: AxiosInstance;
  basePathFactory?: () => string;
  filePathFactory?: () => string;
}

export interface AxiosProvider {
  init(data: JudoAxiosProviderInitData): void;
  getAxios(): AxiosInstance;
  getBasePath(suffix?: string): string;
  getFilePath(suffix?: string): string;
}
