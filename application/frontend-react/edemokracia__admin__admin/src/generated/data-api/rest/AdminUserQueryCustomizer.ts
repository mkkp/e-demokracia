//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import { QueryCustomizer } from '@judo/data-api-common';
import { AdminUser } from '../model/AdminUser';

import { FilterByBoolean } from './FilterByBoolean';
import { FilterByEmail } from './FilterByEmail';
import { FilterByPhone } from './FilterByPhone';
import { FilterByString } from './FilterByString';
import { FilterByTimestamp } from './FilterByTimestamp';

export interface AdminUserQueryCustomizer extends QueryCustomizer<AdminUser> {
  firstName?: Array<FilterByString>;
  lastName?: Array<FilterByString>;
  phone?: Array<FilterByPhone>;
  email?: Array<FilterByEmail>;
  isAdmin?: Array<FilterByBoolean>;
  created?: Array<FilterByTimestamp>;
  userName?: Array<FilterByString>;
  representation?: Array<FilterByString>;
}
