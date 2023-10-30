//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { ServiceServiceUserStored } from './ServiceServiceUser';

export interface ServiceUserManager {
  userName?: null | string;

  users?: null | Array<ServiceServiceUserStored>;
}
export type ServiceUserManagerAttributes = 'userName';

export type ServiceUserManagerRelations = 'users';

export interface ServiceUserManagerStored extends JudoStored<ServiceUserManager>, ServiceUserManager {}
