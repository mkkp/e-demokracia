//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { ServiceCon } from '../model/ServiceCon';
import { FilterBytypesInteger } from './FilterBytypesInteger';
import { FilterBytypesString } from './FilterBytypesString';
import { FilterBytypesText } from './FilterBytypesText';
import { FilterBytypesTimestamp } from './FilterBytypesTimestamp';

export interface ServiceConQueryCustomizer extends QueryCustomizer<ServiceCon> {
  createdByName?: Array<FilterBytypesString>;
  created?: Array<FilterBytypesTimestamp>;
  description?: Array<FilterBytypesText>;
  title?: Array<FilterBytypesString>;
  upVotes?: Array<FilterBytypesInteger>;
  downVotes?: Array<FilterBytypesInteger>;
}
