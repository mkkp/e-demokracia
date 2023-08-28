//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';

export interface AdminCreateUserInput {
  userName: string;
  email: string;
  hasAdminAccess: boolean;
  firstName: string;
  lastName: string;
  phone?: null | string;
}
export type AdminCreateUserInputAttributes =
  | 'userName'
  | 'email'
  | 'hasAdminAccess'
  | 'firstName'
  | 'lastName'
  | 'phone';

export interface AdminCreateUserInputStored extends JudoStored<AdminCreateUserInput>, AdminCreateUserInput {}
