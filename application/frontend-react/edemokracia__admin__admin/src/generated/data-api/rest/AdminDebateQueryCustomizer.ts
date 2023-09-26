//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { AdminDebate } from '../model/AdminDebate';

import { FilterByBoolean } from './FilterByBoolean';
import { FilterByDebateStatus } from './FilterByDebateStatus';
import { FilterByIssueScope } from './FilterByIssueScope';
import { FilterByString } from './FilterByString';
import { FilterByText } from './FilterByText';
import { FilterByTimestamp } from './FilterByTimestamp';

export interface AdminDebateQueryCustomizer extends QueryCustomizer<AdminDebate> {
  closeAt?: Array<FilterByTimestamp>;
  description?: Array<FilterByText>;
  status?: Array<FilterByDebateStatus>;
  title?: Array<FilterByString>;
  issueTitle?: Array<FilterByString>;
  isClosed?: Array<FilterByBoolean>;
  isNotClosed?: Array<FilterByBoolean>;
  scope?: Array<FilterByIssueScope>;
  districtRepresentation?: Array<FilterByString>;
  cityRepresentation?: Array<FilterByString>;
  countyRepresentation?: Array<FilterByString>;
  isFavorite?: Array<FilterByBoolean>;
  isNotFavorite?: Array<FilterByBoolean>;
}
