//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import { QueryCustomizer } from '@judo/data-api-common';
import { AdminDashboard } from '../model/AdminDashboard';

import { FilterByString } from './FilterByString';

export interface AdminDashboardQueryCustomizer extends QueryCustomizer<AdminDashboard> {
  welcome?: Array<FilterByString>;
}
