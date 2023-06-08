//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'data-axios/'+'JudoAxiosService.ts'
// Template name: judoAxiosService.ts.hbs
// Template file: data-axios/judoAxiosService.ts.hbs

import { AxiosInstance } from 'axios';
import { AxiosProvider } from './AxiosProvider';

export abstract class JudoAxiosService {
  protected readonly axiosProvider: AxiosProvider;

  constructor(axiosProvider: AxiosProvider) {
    this.axiosProvider = axiosProvider;
  }

  protected get axios(): AxiosInstance {
    return this.axiosProvider.getAxios();
  }

  protected getBasePath(suffix?: string): string {
    return this.axiosProvider.getBasePath(suffix);
  }

  protected getPathForApp(path?: string): string {
    const tmp = path ? path : '';
    return this.getBasePath('edemokracia' + (tmp.length && !tmp.startsWith('/') ? '/' + tmp : tmp));
  }

  protected getPathForActor(path?: string): string {
    const tmp = path ? path : '';
    return this.getPathForApp('admin/Admin' + (tmp.length && !tmp.startsWith('/') ? '/' + tmp : tmp));
  }
}
