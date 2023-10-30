//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { ServiceIssueType } from '../model/ServiceIssueType';

import { FilterByString } from './FilterByString';
import { FilterByText } from './FilterByText';
import { FilterByVoteType } from './FilterByVoteType';

export interface ServiceIssueTypeQueryCustomizer extends QueryCustomizer<ServiceIssueType> {
  description?: Array<FilterByText>;
  title?: Array<FilterByString>;
  voteType?: Array<FilterByVoteType>;
  representation?: Array<FilterByString>;
}
