//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { AdminComment } from '../model/AdminComment';

import { FilterByInteger } from './FilterByInteger';
import { FilterByString } from './FilterByString';
import { FilterByText } from './FilterByText';
import { FilterByTimestamp } from './FilterByTimestamp';

export interface AdminCommentQueryCustomizer extends QueryCustomizer<AdminComment> {
  comment?: Array<FilterByText>;
  created?: Array<FilterByTimestamp>;
  createdByName?: Array<FilterByString>;
  upVotes?: Array<FilterByInteger>;
  downVotes?: Array<FilterByInteger>;
}
