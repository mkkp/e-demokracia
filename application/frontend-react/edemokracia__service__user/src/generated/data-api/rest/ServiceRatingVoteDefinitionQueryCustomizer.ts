//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { ServiceRatingVoteDefinition } from '../model/ServiceRatingVoteDefinition';

import { FilterByBoolean } from './FilterByBoolean';
import { FilterByInteger } from './FilterByInteger';
import { FilterByString } from './FilterByString';
import { FilterByText } from './FilterByText';
import { FilterByTimestamp } from './FilterByTimestamp';
import { FilterByVoteStatus } from './FilterByVoteStatus';

export interface ServiceRatingVoteDefinitionQueryCustomizer extends QueryCustomizer<ServiceRatingVoteDefinition> {
  title?: Array<FilterByString>;
  created?: Array<FilterByTimestamp>;
  description?: Array<FilterByText>;
  status?: Array<FilterByVoteStatus>;
  closeAt?: Array<FilterByTimestamp>;
  maxRateValue?: Array<FilterByInteger>;
  minRateValue?: Array<FilterByInteger>;
  userHasVoteEntry?: Array<FilterByBoolean>;
  userHasNoVoteEntry?: Array<FilterByBoolean>;
  isFavorite?: Array<FilterByBoolean>;
  isVoteEditable?: Array<FilterByBoolean>;
  isVoteNotOpen?: Array<FilterByBoolean>;
  isVoteOpen?: Array<FilterByBoolean>;
  isNotFavorite?: Array<FilterByBoolean>;
  isVoteNotDeletable?: Array<FilterByBoolean>;
  isVoteDeletable?: Array<FilterByBoolean>;
  isVoteNotEditable?: Array<FilterByBoolean>;
}
