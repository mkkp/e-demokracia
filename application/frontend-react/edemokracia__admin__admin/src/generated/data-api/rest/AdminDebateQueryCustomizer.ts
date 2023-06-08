//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import { QueryCustomizer } from '@judo/data-api-common';
import { AdminDebate } from '../model/AdminDebate';

import { FilterByDebateStatus } from './FilterByDebateStatus';
import { FilterByString } from './FilterByString';
import { FilterByText } from './FilterByText';
import { FilterByTimestamp } from './FilterByTimestamp';

export interface AdminDebateQueryCustomizer extends QueryCustomizer<AdminDebate> {
  closeAt?: Array<FilterByTimestamp>;
  description?: Array<FilterByText>;
  status?: Array<FilterByDebateStatus>;
  title?: Array<FilterByString>;
  issueTitle?: Array<FilterByString>;
}
