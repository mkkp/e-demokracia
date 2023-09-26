//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { AdminIssue } from '../model/AdminIssue';

import { FilterByBoolean } from './FilterByBoolean';
import { FilterByInteger } from './FilterByInteger';
import { FilterByIssueScope } from './FilterByIssueScope';
import { FilterByIssueStatus } from './FilterByIssueStatus';
import { FilterByString } from './FilterByString';
import { FilterByText } from './FilterByText';
import { FilterByTimestamp } from './FilterByTimestamp';
import { FilterByVoteType } from './FilterByVoteType';

export interface AdminIssueQueryCustomizer extends QueryCustomizer<AdminIssue> {
  created?: Array<FilterByTimestamp>;
  title?: Array<FilterByString>;
  description?: Array<FilterByText>;
  status?: Array<FilterByIssueStatus>;
  representation?: Array<FilterByString>;
  numberOfDebates?: Array<FilterByInteger>;
  defaultVoteType?: Array<FilterByVoteType>;
  scope?: Array<FilterByIssueScope>;
  countyRepresentation?: Array<FilterByString>;
  cityRepresentation?: Array<FilterByString>;
  districtRepresentation?: Array<FilterByString>;
  isFavorite?: Array<FilterByBoolean>;
  isNotFavorite?: Array<FilterByBoolean>;
}
