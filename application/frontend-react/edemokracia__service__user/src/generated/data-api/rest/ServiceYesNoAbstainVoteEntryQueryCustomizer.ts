//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { ServiceYesNoAbstainVoteEntry } from '../model/ServiceYesNoAbstainVoteEntry';

import { FilterByString } from './FilterByString';
import { FilterByTimestamp } from './FilterByTimestamp';
import { FilterByYesNoAbstainVoteValue } from './FilterByYesNoAbstainVoteValue';

export interface ServiceYesNoAbstainVoteEntryQueryCustomizer extends QueryCustomizer<ServiceYesNoAbstainVoteEntry> {
  created?: Array<FilterByTimestamp>;
  value?: Array<FilterByYesNoAbstainVoteValue>;
  createdBy?: Array<FilterByString>;
}
