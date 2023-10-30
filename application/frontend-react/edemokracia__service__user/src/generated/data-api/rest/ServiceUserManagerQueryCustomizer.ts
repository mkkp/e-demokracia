//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { ServiceUserManager } from '../model/ServiceUserManager';

import { FilterByString } from './FilterByString';

export interface ServiceUserManagerQueryCustomizer extends QueryCustomizer<ServiceUserManager> {
  userName?: Array<FilterByString>;
}
