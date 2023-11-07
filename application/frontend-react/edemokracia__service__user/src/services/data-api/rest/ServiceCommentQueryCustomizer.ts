//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { ServiceComment } from '../model/ServiceComment';

import { FilterBytypesInteger } from './FilterBytypesInteger';
import { FilterBytypesString } from './FilterBytypesString';
import { FilterBytypesText } from './FilterBytypesText';
import { FilterBytypesTimestamp } from './FilterBytypesTimestamp';

export interface ServiceCommentQueryCustomizer extends QueryCustomizer<ServiceComment> {
  comment?: Array<FilterBytypesText>;
  created?: Array<FilterBytypesTimestamp>;
  createdByName?: Array<FilterBytypesString>;
  upVotes?: Array<FilterBytypesInteger>;
  downVotes?: Array<FilterBytypesInteger>;
}
