//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { ServiceUserProfile } from '../model/ServiceUserProfile';

import { FilterBytypesEmail } from './FilterBytypesEmail';
import { FilterBytypesPhone } from './FilterBytypesPhone';
import { FilterBytypesString } from './FilterBytypesString';

export interface ServiceUserProfileQueryCustomizer extends QueryCustomizer<ServiceUserProfile> {
  lastName?: Array<FilterBytypesString>;
  userName?: Array<FilterBytypesString>;
  firstName?: Array<FilterBytypesString>;
  email?: Array<FilterBytypesEmail>;
  phone?: Array<FilterBytypesPhone>;
  representation?: Array<FilterBytypesString>;
}
