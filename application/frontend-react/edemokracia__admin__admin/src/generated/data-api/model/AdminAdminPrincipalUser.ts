//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import { JudoStored } from '@judo/data-api-common';

export interface AdminAdminPrincipalUser {
  userName: string;
  email: string;
  firstName: string;
  isAdmin: boolean;
  lastName: string;
  phone?: null | string;
  created?: null | Date;
}
export type AdminAdminPrincipalUserAttributes =
  | 'userName'
  | 'email'
  | 'firstName'
  | 'isAdmin'
  | 'lastName'
  | 'phone'
  | 'created';

export interface AdminAdminPrincipalUserStored extends JudoStored<AdminAdminPrincipalUser>, AdminAdminPrincipalUser {}
