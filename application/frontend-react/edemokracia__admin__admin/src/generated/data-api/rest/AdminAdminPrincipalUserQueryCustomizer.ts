//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import { QueryCustomizer } from '@judo/data-api-common';
import { AdminAdminPrincipalUser } from '../model/AdminAdminPrincipalUser';

import { FilterByBoolean } from './FilterByBoolean';
import { FilterByEmail } from './FilterByEmail';
import { FilterByPhone } from './FilterByPhone';
import { FilterByString } from './FilterByString';
import { FilterByTimestamp } from './FilterByTimestamp';

export interface AdminAdminPrincipalUserQueryCustomizer extends QueryCustomizer<AdminAdminPrincipalUser> {
  userName?: Array<FilterByString>;
  email?: Array<FilterByEmail>;
  firstName?: Array<FilterByString>;
  isAdmin?: Array<FilterByBoolean>;
  lastName?: Array<FilterByString>;
  phone?: Array<FilterByPhone>;
  created?: Array<FilterByTimestamp>;
}
