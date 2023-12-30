//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '../common';
import { ServiceVoteEntry } from '../model/ServiceVoteEntry';
import { FilterByVoteStatus } from './FilterByVoteStatus';
import { FilterBytypesString } from './FilterBytypesString';
import { FilterBytypesTimestamp } from './FilterBytypesTimestamp';

export interface ServiceVoteEntryQueryCustomizer extends QueryCustomizer<ServiceVoteEntry> {
  created?: Array<FilterBytypesTimestamp>;
  issueTitle?: Array<FilterBytypesString>;
  userName?: Array<FilterBytypesString>;
  voteStatus?: Array<FilterByVoteStatus>;
  voteTitle?: Array<FilterBytypesString>;
}
