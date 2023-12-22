//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '../common';
import { ServiceUserManager } from '../model/ServiceUserManager';
import { FilterBytypesString } from './FilterBytypesString';

export interface ServiceUserManagerQueryCustomizer extends QueryCustomizer<ServiceUserManager> {
  userName?: Array<FilterBytypesString>;
}
