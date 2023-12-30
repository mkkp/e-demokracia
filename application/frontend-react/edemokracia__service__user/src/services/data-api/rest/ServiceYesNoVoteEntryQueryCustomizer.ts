//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '../common';
import { ServiceYesNoVoteEntry } from '../model/ServiceYesNoVoteEntry';
import { FilterByYesNoVoteValue } from './FilterByYesNoVoteValue';
import { FilterBytypesString } from './FilterBytypesString';
import { FilterBytypesTimestamp } from './FilterBytypesTimestamp';

export interface ServiceYesNoVoteEntryQueryCustomizer extends QueryCustomizer<ServiceYesNoVoteEntry> {
  created?: Array<FilterBytypesTimestamp>;
  createdBy?: Array<FilterBytypesString>;
  value?: Array<FilterByYesNoVoteValue>;
}
