//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { AdminCounty } from '../model/AdminCounty';

import { FilterByString } from './FilterByString';

export interface AdminCountyQueryCustomizer extends QueryCustomizer<AdminCounty> {
  name?: Array<FilterByString>;
  representation?: Array<FilterByString>;
}
