//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import { QueryCustomizer } from '@judo/data-api-common';
import { AdminIssueType } from '../model/AdminIssueType';

import { FilterByString } from './FilterByString';
import { FilterByText } from './FilterByText';
import { FilterByVoteType } from './FilterByVoteType';

export interface AdminIssueTypeQueryCustomizer extends QueryCustomizer<AdminIssueType> {
  description?: Array<FilterByText>;
  title?: Array<FilterByString>;
  voteType?: Array<FilterByVoteType>;
  representation?: Array<FilterByString>;
}
