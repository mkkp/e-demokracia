//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { Issue } from '../model/Issue';

import { FilterByIssueStatus } from './FilterByIssueStatus';
import { FilterByString } from './FilterByString';
import { FilterByText } from './FilterByText';
import { FilterByTimestamp } from './FilterByTimestamp';
import { FilterByVoteType } from './FilterByVoteType';

export interface IssueQueryCustomizer extends QueryCustomizer<Issue> {
  created?: Array<FilterByTimestamp>;
  title?: Array<FilterByString>;
  description?: Array<FilterByText>;
  status?: Array<FilterByIssueStatus>;
  defaultVoteType?: Array<FilterByVoteType>;
}
