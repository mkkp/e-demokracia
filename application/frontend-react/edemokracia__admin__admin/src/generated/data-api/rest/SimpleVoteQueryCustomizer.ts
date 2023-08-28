//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { SimpleVote } from '../model/SimpleVote';

import { FilterBySimpleVoteType } from './FilterBySimpleVoteType';
import { FilterByTimestamp } from './FilterByTimestamp';

export interface SimpleVoteQueryCustomizer extends QueryCustomizer<SimpleVote> {
  created?: Array<FilterByTimestamp>;
  type?: Array<FilterBySimpleVoteType>;
}
