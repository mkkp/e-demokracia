//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import { QueryCustomizer } from '@judo/data-api-common';
import { AdminSimpleVote } from '../model/AdminSimpleVote';

import { FilterBySimpleVoteType } from './FilterBySimpleVoteType';
import { FilterByTimestamp } from './FilterByTimestamp';

export interface AdminSimpleVoteQueryCustomizer extends QueryCustomizer<AdminSimpleVote> {
  created?: Array<FilterByTimestamp>;
  type?: Array<FilterBySimpleVoteType>;
}
