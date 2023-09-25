//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { AdminUserProfile } from '../model/AdminUserProfile';

import { FilterByEmail } from './FilterByEmail';
import { FilterByPhone } from './FilterByPhone';
import { FilterByString } from './FilterByString';

export interface AdminUserProfileQueryCustomizer extends QueryCustomizer<AdminUserProfile> {
  lastName?: Array<FilterByString>;
  userName?: Array<FilterByString>;
  firstName?: Array<FilterByString>;
  email?: Array<FilterByEmail>;
  phone?: Array<FilterByPhone>;
  representation?: Array<FilterByString>;
}
