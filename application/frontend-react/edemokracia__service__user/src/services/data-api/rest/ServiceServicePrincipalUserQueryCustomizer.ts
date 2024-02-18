//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '../common';
import { ServiceServicePrincipalUser } from '../model/ServiceServicePrincipalUser';
import { FilterBytypesBoolean } from './FilterBytypesBoolean';
import { FilterBytypesEmail } from './FilterBytypesEmail';
import { FilterBytypesPhone } from './FilterBytypesPhone';
import { FilterBytypesString } from './FilterBytypesString';
import { FilterBytypesTimestamp } from './FilterBytypesTimestamp';

export interface ServiceServicePrincipalUserQueryCustomizer extends QueryCustomizer<ServiceServicePrincipalUser> {
  created?: Array<FilterBytypesTimestamp>;
  email?: Array<FilterBytypesEmail>;
  firstName?: Array<FilterBytypesString>;
  isAdmin?: Array<FilterBytypesBoolean>;
  isNotAdmin?: Array<FilterBytypesBoolean>;
  lastName?: Array<FilterBytypesString>;
  phone?: Array<FilterBytypesPhone>;
  userName?: Array<FilterBytypesString>;
}
