//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import { QueryCustomizer } from '@judo/data-api-common';
import { VoteEntry } from '../model/VoteEntry';

import { FilterByTimestamp } from './FilterByTimestamp';

export interface VoteEntryQueryCustomizer extends QueryCustomizer<VoteEntry> {
  created?: Array<FilterByTimestamp>;
}
