//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import { QueryCustomizer } from '@judo/data-api-common';
import { IssueCategory } from '../model/IssueCategory';

import { FilterByString } from './FilterByString';
import { FilterByText } from './FilterByText';

export interface IssueCategoryQueryCustomizer extends QueryCustomizer<IssueCategory> {
  title?: Array<FilterByString>;
  description?: Array<FilterByText>;
}
