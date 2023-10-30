//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { ServiceServicePrincipalUser } from '../model/ServiceServicePrincipalUser';

import { FilterByBoolean } from './FilterByBoolean';
import { FilterByEmail } from './FilterByEmail';
import { FilterByPhone } from './FilterByPhone';
import { FilterByString } from './FilterByString';
import { FilterByTimestamp } from './FilterByTimestamp';

export interface ServiceServicePrincipalUserQueryCustomizer extends QueryCustomizer<ServiceServicePrincipalUser> {
  userName?: Array<FilterByString>;
  email?: Array<FilterByEmail>;
  firstName?: Array<FilterByString>;
  isAdmin?: Array<FilterByBoolean>;
  lastName?: Array<FilterByString>;
  phone?: Array<FilterByPhone>;
  created?: Array<FilterByTimestamp>;
}
