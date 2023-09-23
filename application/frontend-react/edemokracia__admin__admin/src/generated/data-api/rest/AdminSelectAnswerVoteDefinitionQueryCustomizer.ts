//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { AdminSelectAnswerVoteDefinition } from '../model/AdminSelectAnswerVoteDefinition';

import { FilterByString } from './FilterByString';
import { FilterByText } from './FilterByText';
import { FilterByTimestamp } from './FilterByTimestamp';
import { FilterByVoteStatus } from './FilterByVoteStatus';

export interface AdminSelectAnswerVoteDefinitionQueryCustomizer
  extends QueryCustomizer<AdminSelectAnswerVoteDefinition> {
  title?: Array<FilterByString>;
  created?: Array<FilterByTimestamp>;
  description?: Array<FilterByText>;
  status?: Array<FilterByVoteStatus>;
  closeAt?: Array<FilterByTimestamp>;
}
