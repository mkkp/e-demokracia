//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '../common';

export interface ServiceCreateUserInput {
  email: string;
  firstName: string;
  hasAdminAccess: boolean;
  lastName: string;
  phone?: null | string;
  userName: string;
}

export type ServiceCreateUserInputAttributes =
  | 'email'
  | 'firstName'
  | 'hasAdminAccess'
  | 'lastName'
  | 'phone'
  | 'userName';

export interface ServiceCreateUserInputStored extends JudoStored<ServiceCreateUserInput>, ServiceCreateUserInput {}
