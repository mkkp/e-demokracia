//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { ServiceServiceUser } from '../model/ServiceServiceUser';
import { FilterBytypesBoolean } from './FilterBytypesBoolean';
import { FilterBytypesEmail } from './FilterBytypesEmail';
import { FilterBytypesPhone } from './FilterBytypesPhone';
import { FilterBytypesString } from './FilterBytypesString';
import { FilterBytypesTimestamp } from './FilterBytypesTimestamp';

export interface ServiceServiceUserQueryCustomizer extends QueryCustomizer<ServiceServiceUser> {
  firstName?: Array<FilterBytypesString>;
  lastName?: Array<FilterBytypesString>;
  phone?: Array<FilterBytypesPhone>;
  email?: Array<FilterBytypesEmail>;
  isAdmin?: Array<FilterBytypesBoolean>;
  created?: Array<FilterBytypesTimestamp>;
  userName?: Array<FilterBytypesString>;
  representation?: Array<FilterBytypesString>;
}
