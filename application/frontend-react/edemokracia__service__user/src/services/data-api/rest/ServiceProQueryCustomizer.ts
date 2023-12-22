//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '../common';
import { ServicePro } from '../model/ServicePro';
import { FilterBytypesInteger } from './FilterBytypesInteger';
import { FilterBytypesString } from './FilterBytypesString';
import { FilterBytypesText } from './FilterBytypesText';
import { FilterBytypesTimestamp } from './FilterBytypesTimestamp';

export interface ServiceProQueryCustomizer extends QueryCustomizer<ServicePro> {
  created?: Array<FilterBytypesTimestamp>;
  createdByName?: Array<FilterBytypesString>;
  description?: Array<FilterBytypesText>;
  downVotes?: Array<FilterBytypesInteger>;
  title?: Array<FilterBytypesString>;
  upVotes?: Array<FilterBytypesInteger>;
}
