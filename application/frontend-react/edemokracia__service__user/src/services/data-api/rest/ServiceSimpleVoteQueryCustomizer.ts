//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '../common';
import { ServiceSimpleVote } from '../model/ServiceSimpleVote';
import { FilterBySimpleVoteType } from './FilterBySimpleVoteType';
import { FilterBytypesTimestamp } from './FilterBytypesTimestamp';

export interface ServiceSimpleVoteQueryCustomizer extends QueryCustomizer<ServiceSimpleVote> {
  created?: Array<FilterBytypesTimestamp>;
  type?: Array<FilterBySimpleVoteType>;
}
