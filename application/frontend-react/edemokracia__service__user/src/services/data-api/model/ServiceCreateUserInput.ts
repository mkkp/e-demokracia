//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';

export interface ServiceCreateUserInput {
  userName: string;
  email: string;
  hasAdminAccess: boolean;
  firstName: string;
  lastName: string;
  phone?: null | string;
}

export type ServiceCreateUserInputAttributes =
  | 'userName'
  | 'email'
  | 'hasAdminAccess'
  | 'firstName'
  | 'lastName'
  | 'phone';

export interface ServiceCreateUserInputStored extends JudoStored<ServiceCreateUserInput>, ServiceCreateUserInput {}
