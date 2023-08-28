//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { AdminPro } from '../model/AdminPro';

import { FilterByInteger } from './FilterByInteger';
import { FilterByString } from './FilterByString';
import { FilterByText } from './FilterByText';
import { FilterByTimestamp } from './FilterByTimestamp';

export interface AdminProQueryCustomizer extends QueryCustomizer<AdminPro> {
  createdByName?: Array<FilterByString>;
  created?: Array<FilterByTimestamp>;
  description?: Array<FilterByText>;
  title?: Array<FilterByString>;
  upVotes?: Array<FilterByInteger>;
  downVotes?: Array<FilterByInteger>;
}
