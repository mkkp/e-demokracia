//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '../common';

export interface ServiceServicePrincipalUser {
  created?: null | Date;
  email: string;
  firstName: string;
  isAdmin: boolean;
  isNotAdmin?: null | boolean;
  lastName: string;
  phone?: null | string;
  userName: string;
}

export type ServiceServicePrincipalUserAttributes =
  | 'created'
  | 'email'
  | 'firstName'
  | 'isAdmin'
  | 'isNotAdmin'
  | 'lastName'
  | 'phone'
  | 'userName';

export interface ServiceServicePrincipalUserStored
  extends JudoStored<ServiceServicePrincipalUser>,
    ServiceServicePrincipalUser {}
