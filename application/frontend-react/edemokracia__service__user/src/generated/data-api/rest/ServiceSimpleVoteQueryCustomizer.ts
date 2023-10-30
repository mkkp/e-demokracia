//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { ServiceSimpleVote } from '../model/ServiceSimpleVote';

import { FilterBySimpleVoteType } from './FilterBySimpleVoteType';
import { FilterByTimestamp } from './FilterByTimestamp';

export interface ServiceSimpleVoteQueryCustomizer extends QueryCustomizer<ServiceSimpleVote> {
  created?: Array<FilterByTimestamp>;
  type?: Array<FilterBySimpleVoteType>;
}
