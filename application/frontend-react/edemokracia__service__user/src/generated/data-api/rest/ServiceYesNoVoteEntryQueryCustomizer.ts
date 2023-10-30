//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { ServiceYesNoVoteEntry } from '../model/ServiceYesNoVoteEntry';

import { FilterByString } from './FilterByString';
import { FilterByTimestamp } from './FilterByTimestamp';
import { FilterByYesNoVoteValue } from './FilterByYesNoVoteValue';

export interface ServiceYesNoVoteEntryQueryCustomizer extends QueryCustomizer<ServiceYesNoVoteEntry> {
  created?: Array<FilterByTimestamp>;
  value?: Array<FilterByYesNoVoteValue>;
  createdBy?: Array<FilterByString>;
}
