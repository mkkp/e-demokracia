//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { ServiceVoteDefinition } from '../model/ServiceVoteDefinition';
import { FilterByIssueScope } from './FilterByIssueScope';
import { FilterByVoteStatus } from './FilterByVoteStatus';
import { FilterByVoteType } from './FilterByVoteType';
import { FilterBytypesBoolean } from './FilterBytypesBoolean';
import { FilterBytypesInteger } from './FilterBytypesInteger';
import { FilterBytypesString } from './FilterBytypesString';
import { FilterBytypesText } from './FilterBytypesText';
import { FilterBytypesTimestamp } from './FilterBytypesTimestamp';

export interface ServiceVoteDefinitionQueryCustomizer extends QueryCustomizer<ServiceVoteDefinition> {
  title?: Array<FilterBytypesString>;
  created?: Array<FilterBytypesTimestamp>;
  description?: Array<FilterBytypesText>;
  status?: Array<FilterByVoteStatus>;
  closeAt?: Array<FilterBytypesTimestamp>;
  isRatingType?: Array<FilterBytypesBoolean>;
  isSelectAnswerType?: Array<FilterBytypesBoolean>;
  isYesNoAbstainType?: Array<FilterBytypesBoolean>;
  isYesNoType?: Array<FilterBytypesBoolean>;
  isNotRatingType?: Array<FilterBytypesBoolean>;
  isNotSelectAnswerType?: Array<FilterBytypesBoolean>;
  isNotYesNoAbstainType?: Array<FilterBytypesBoolean>;
  isNotYesNoType?: Array<FilterBytypesBoolean>;
  numberOfVotes?: Array<FilterBytypesInteger>;
  voteType?: Array<FilterByVoteType>;
  scope?: Array<FilterByIssueScope>;
  districtRepresentation?: Array<FilterBytypesString>;
  countyRepresentation?: Array<FilterBytypesString>;
  isFavorite?: Array<FilterBytypesBoolean>;
  cityRepresentation?: Array<FilterBytypesString>;
  isNotFavorite?: Array<FilterBytypesBoolean>;
}
