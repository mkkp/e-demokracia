//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import { QueryCustomizer } from '@judo/data-api-common';
import { AdminVoteEntry } from '../model/AdminVoteEntry';

import { FilterByString } from './FilterByString';
import { FilterByTimestamp } from './FilterByTimestamp';
import { FilterByVoteStatus } from './FilterByVoteStatus';

export interface AdminVoteEntryQueryCustomizer extends QueryCustomizer<AdminVoteEntry> {
  created?: Array<FilterByTimestamp>;
  issueTitle?: Array<FilterByString>;
  debateTitle?: Array<FilterByString>;
  voteTitle?: Array<FilterByString>;
  voteStatus?: Array<FilterByVoteStatus>;
  userName?: Array<FilterByString>;
}
