//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { ServiceCounty } from '../model/ServiceCounty';

import { FilterByString } from './FilterByString';

export interface ServiceCountyQueryCustomizer extends QueryCustomizer<ServiceCounty> {
  name?: Array<FilterByString>;
  representation?: Array<FilterByString>;
}
