//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'data-service/'+'AccessService.ts'
// Template name: accessService.ts.hbs
// Template file: data-service/accessService.ts.hbs

import type { JudoDownloadFile, JudoMetaData } from '@judo/data-api-common';
import { ServiceServicePrincipalUserStored } from '../data-api';

export interface AccessService {
  getPrincipal(): Promise<ServiceServicePrincipalUserStored>;

  getMetaData(): Promise<JudoMetaData>;

  uploadFile(attributePath: string, file: File): Promise<string>;

  downloadFile(downloadToken: string, disposition: 'inline' | 'attachment'): Promise<any>;
}
