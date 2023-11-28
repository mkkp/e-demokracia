//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { SelectAnswerVoteSelection } from '../model/SelectAnswerVoteSelection';
import { FilterBytypesString } from './FilterBytypesString';

export interface SelectAnswerVoteSelectionQueryCustomizer extends QueryCustomizer<SelectAnswerVoteSelection> {
  description?: Array<FilterBytypesString>;
  title?: Array<FilterBytypesString>;
}
