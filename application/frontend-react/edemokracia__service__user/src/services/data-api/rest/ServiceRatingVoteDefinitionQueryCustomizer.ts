//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '../common';
import { ServiceRatingVoteDefinition } from '../model/ServiceRatingVoteDefinition';
import { FilterByVoteStatus } from './FilterByVoteStatus';
import { FilterBytypesBoolean } from './FilterBytypesBoolean';
import { FilterBytypesInteger } from './FilterBytypesInteger';
import { FilterBytypesString } from './FilterBytypesString';
import { FilterBytypesText } from './FilterBytypesText';
import { FilterBytypesTimestamp } from './FilterBytypesTimestamp';

export interface ServiceRatingVoteDefinitionQueryCustomizer extends QueryCustomizer<ServiceRatingVoteDefinition> {
  closeAt?: Array<FilterBytypesTimestamp>;
  created?: Array<FilterBytypesTimestamp>;
  createdBy?: Array<FilterBytypesString>;
  description?: Array<FilterBytypesText>;
  isFavorite?: Array<FilterBytypesBoolean>;
  isNotFavorite?: Array<FilterBytypesBoolean>;
  isVoteDeletable?: Array<FilterBytypesBoolean>;
  isVoteEditable?: Array<FilterBytypesBoolean>;
  isVoteNotDeletable?: Array<FilterBytypesBoolean>;
  isVoteNotEditable?: Array<FilterBytypesBoolean>;
  isVoteNotOpen?: Array<FilterBytypesBoolean>;
  isVoteOpen?: Array<FilterBytypesBoolean>;
  maxRateValue?: Array<FilterBytypesInteger>;
  minRateValue?: Array<FilterBytypesInteger>;
  status?: Array<FilterByVoteStatus>;
  title?: Array<FilterBytypesString>;
  userHasNoVoteEntry?: Array<FilterBytypesBoolean>;
  userHasVoteEntry?: Array<FilterBytypesBoolean>;
}
