//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { AdminSelectAnswerVoteEntry } from '../model/AdminSelectAnswerVoteEntry';

import { FilterByString } from './FilterByString';
import { FilterByTimestamp } from './FilterByTimestamp';

export interface AdminSelectAnswerVoteEntryQueryCustomizer extends QueryCustomizer<AdminSelectAnswerVoteEntry> {
  created?: Array<FilterByTimestamp>;
  createdBy?: Array<FilterByString>;
  valueRepresentation?: Array<FilterByString>;
}
