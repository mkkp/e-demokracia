//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { Debate } from '../model/Debate';

import { FilterByDebateStatus } from './FilterByDebateStatus';
import { FilterByString } from './FilterByString';
import { FilterByText } from './FilterByText';
import { FilterByTimestamp } from './FilterByTimestamp';

export interface DebateQueryCustomizer extends QueryCustomizer<Debate> {
  title?: Array<FilterByString>;
  description?: Array<FilterByText>;
  status?: Array<FilterByDebateStatus>;
  closeAt?: Array<FilterByTimestamp>;
}
