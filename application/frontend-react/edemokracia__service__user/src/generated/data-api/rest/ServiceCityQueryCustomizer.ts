//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { ServiceCity } from '../model/ServiceCity';

import { FilterByString } from './FilterByString';

export interface ServiceCityQueryCustomizer extends QueryCustomizer<ServiceCity> {
  name?: Array<FilterByString>;
  county?: Array<FilterByString>;
  representation?: Array<FilterByString>;
}
