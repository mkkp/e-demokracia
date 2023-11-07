//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { ServiceYesNoAbstainVoteEntry } from '../model/ServiceYesNoAbstainVoteEntry';

import { FilterByYesNoAbstainVoteValue } from './FilterByYesNoAbstainVoteValue';
import { FilterBytypesString } from './FilterBytypesString';
import { FilterBytypesTimestamp } from './FilterBytypesTimestamp';

export interface ServiceYesNoAbstainVoteEntryQueryCustomizer extends QueryCustomizer<ServiceYesNoAbstainVoteEntry> {
  created?: Array<FilterBytypesTimestamp>;
  value?: Array<FilterByYesNoAbstainVoteValue>;
  createdBy?: Array<FilterBytypesString>;
}
