//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { ServiceRatingVoteEntry } from '../model/ServiceRatingVoteEntry';

import { FilterBytypesInteger } from './FilterBytypesInteger';
import { FilterBytypesString } from './FilterBytypesString';
import { FilterBytypesTimestamp } from './FilterBytypesTimestamp';

export interface ServiceRatingVoteEntryQueryCustomizer extends QueryCustomizer<ServiceRatingVoteEntry> {
  created?: Array<FilterBytypesTimestamp>;
  value?: Array<FilterBytypesInteger>;
  createdBy?: Array<FilterBytypesString>;
}
