//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { ServiceRatingVoteDefinition } from '../model/ServiceRatingVoteDefinition';
import { FilterByVoteStatus } from './FilterByVoteStatus';
import { FilterBytypesBoolean } from './FilterBytypesBoolean';
import { FilterBytypesInteger } from './FilterBytypesInteger';
import { FilterBytypesString } from './FilterBytypesString';
import { FilterBytypesText } from './FilterBytypesText';
import { FilterBytypesTimestamp } from './FilterBytypesTimestamp';

export interface ServiceRatingVoteDefinitionQueryCustomizer extends QueryCustomizer<ServiceRatingVoteDefinition> {
  title?: Array<FilterBytypesString>;
  created?: Array<FilterBytypesTimestamp>;
  description?: Array<FilterBytypesText>;
  status?: Array<FilterByVoteStatus>;
  closeAt?: Array<FilterBytypesTimestamp>;
  maxRateValue?: Array<FilterBytypesInteger>;
  minRateValue?: Array<FilterBytypesInteger>;
  userHasVoteEntry?: Array<FilterBytypesBoolean>;
  userHasNoVoteEntry?: Array<FilterBytypesBoolean>;
  isFavorite?: Array<FilterBytypesBoolean>;
  isVoteEditable?: Array<FilterBytypesBoolean>;
  isVoteNotOpen?: Array<FilterBytypesBoolean>;
  isVoteOpen?: Array<FilterBytypesBoolean>;
  isNotFavorite?: Array<FilterBytypesBoolean>;
  isVoteNotDeletable?: Array<FilterBytypesBoolean>;
  isVoteDeletable?: Array<FilterBytypesBoolean>;
  isVoteNotEditable?: Array<FilterBytypesBoolean>;
  createdBy?: Array<FilterBytypesString>;
}
