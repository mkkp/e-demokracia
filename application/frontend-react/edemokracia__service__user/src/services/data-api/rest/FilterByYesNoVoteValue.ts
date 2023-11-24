//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getFilterableDataTypes(#application)
// Path expression: 'data-api/rest/'+#restFilterName(#self)+'.ts'
// Template name: filterable.ts.hbs
// Template file: rest/filterable.ts.hbs

import { EnumerationOperation, YesNoVoteValue } from '../model';

export interface FilterByYesNoVoteValue {
  value: YesNoVoteValue;
  operator: EnumerationOperation;
}