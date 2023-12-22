//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '../common';
import { ServiceIssueType } from '../model/ServiceIssueType';
import { FilterByVoteType } from './FilterByVoteType';
import { FilterBytypesString } from './FilterBytypesString';
import { FilterBytypesText } from './FilterBytypesText';

export interface ServiceIssueTypeQueryCustomizer extends QueryCustomizer<ServiceIssueType> {
  description?: Array<FilterBytypesText>;
  representation?: Array<FilterBytypesString>;
  title?: Array<FilterBytypesString>;
  voteType?: Array<FilterByVoteType>;
}
