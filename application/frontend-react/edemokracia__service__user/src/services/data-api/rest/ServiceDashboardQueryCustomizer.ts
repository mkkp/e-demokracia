//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '../common';
import { ServiceDashboard } from '../model/ServiceDashboard';
import { FilterBytypesString } from './FilterBytypesString';

export interface ServiceDashboardQueryCustomizer extends QueryCustomizer<ServiceDashboard> {
  welcome?: Array<FilterBytypesString>;
}
