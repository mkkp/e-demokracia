//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { ServiceYesNoVoteDefinition } from '../model/ServiceYesNoVoteDefinition';
import { FilterByVoteStatus } from './FilterByVoteStatus';
import { FilterBytypesBoolean } from './FilterBytypesBoolean';
import { FilterBytypesString } from './FilterBytypesString';
import { FilterBytypesText } from './FilterBytypesText';
import { FilterBytypesTimestamp } from './FilterBytypesTimestamp';

export interface ServiceYesNoVoteDefinitionQueryCustomizer extends QueryCustomizer<ServiceYesNoVoteDefinition> {
  title?: Array<FilterBytypesString>;
  created?: Array<FilterBytypesTimestamp>;
  description?: Array<FilterBytypesText>;
  status?: Array<FilterByVoteStatus>;
  closeAt?: Array<FilterBytypesTimestamp>;
  userHasVoteEntry?: Array<FilterBytypesBoolean>;
  userHasNoVoteEntry?: Array<FilterBytypesBoolean>;
}
