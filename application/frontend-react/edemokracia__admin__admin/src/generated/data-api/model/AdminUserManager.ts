//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { AdminUserStored } from './AdminUser';

export interface AdminUserManager {
  userName?: null | string;

  users?: null | Array<AdminUserStored>;
}
export type AdminUserManagerAttributes = 'userName';

export type AdminUserManagerRelations = 'users';

export interface AdminUserManagerStored extends JudoStored<AdminUserManager>, AdminUserManager {}
