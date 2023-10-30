//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { ServiceServiceUser } from '../model/ServiceServiceUser';

import { FilterByBoolean } from './FilterByBoolean';
import { FilterByEmail } from './FilterByEmail';
import { FilterByPhone } from './FilterByPhone';
import { FilterByString } from './FilterByString';
import { FilterByTimestamp } from './FilterByTimestamp';

export interface ServiceServiceUserQueryCustomizer extends QueryCustomizer<ServiceServiceUser> {
  firstName?: Array<FilterByString>;
  lastName?: Array<FilterByString>;
  phone?: Array<FilterByPhone>;
  email?: Array<FilterByEmail>;
  isAdmin?: Array<FilterByBoolean>;
  created?: Array<FilterByTimestamp>;
  userName?: Array<FilterByString>;
  representation?: Array<FilterByString>;
}
