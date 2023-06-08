//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'data-service/'+'AccessService.ts'
// Template name: accessService.ts.hbs
// Template file: data-service/accessService.ts.hbs

import { JudoDownloadFile, JudoMetaData } from '@judo/data-api-common';
import { AdminAdminPrincipalUserStored } from '../data-api';

export interface AccessService {
  getPrincipal(): Promise<AdminAdminPrincipalUserStored>;

  getMetaData(): Promise<JudoMetaData>;

  uploadFile(attributePath: string, file: File): Promise<string>;

  downloadFile(downloadToken: string): Promise<any>;
}
