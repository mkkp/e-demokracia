//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '../common';
import { ServiceIssueCategory } from '../model/ServiceIssueCategory';
import { FilterBytypesString } from './FilterBytypesString';
import { FilterBytypesText } from './FilterBytypesText';

export interface ServiceIssueCategoryQueryCustomizer extends QueryCustomizer<ServiceIssueCategory> {
  description?: Array<FilterBytypesText>;
  title?: Array<FilterBytypesString>;
}
