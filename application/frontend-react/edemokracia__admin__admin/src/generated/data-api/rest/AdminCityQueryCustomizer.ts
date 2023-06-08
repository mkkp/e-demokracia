//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import { QueryCustomizer } from '@judo/data-api-common';
import { AdminCity } from '../model/AdminCity';

import { FilterByString } from './FilterByString';

export interface AdminCityQueryCustomizer extends QueryCustomizer<AdminCity> {
  name?: Array<FilterByString>;
  county?: Array<FilterByString>;
  representation?: Array<FilterByString>;
}
