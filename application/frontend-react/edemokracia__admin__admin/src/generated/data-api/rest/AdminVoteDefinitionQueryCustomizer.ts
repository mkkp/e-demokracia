//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import type { QueryCustomizer } from '@judo/data-api-common';
import { AdminVoteDefinition } from '../model/AdminVoteDefinition';

import { FilterByBoolean } from './FilterByBoolean';
import { FilterByInteger } from './FilterByInteger';
import { FilterByString } from './FilterByString';
import { FilterByText } from './FilterByText';
import { FilterByTimestamp } from './FilterByTimestamp';
import { FilterByVoteStatus } from './FilterByVoteStatus';
import { FilterByVoteType } from './FilterByVoteType';

export interface AdminVoteDefinitionQueryCustomizer extends QueryCustomizer<AdminVoteDefinition> {
  title?: Array<FilterByString>;
  created?: Array<FilterByTimestamp>;
  description?: Array<FilterByText>;
  status?: Array<FilterByVoteStatus>;
  closeAt?: Array<FilterByTimestamp>;
  isRatingType?: Array<FilterByBoolean>;
  isSelectAnswerType?: Array<FilterByBoolean>;
  isYesNoAbstainType?: Array<FilterByBoolean>;
  isYesNoType?: Array<FilterByBoolean>;
  isNotRatingType?: Array<FilterByBoolean>;
  isNotSelectAnswerType?: Array<FilterByBoolean>;
  isNotYesNoAbstainType?: Array<FilterByBoolean>;
  isNotYesNoType?: Array<FilterByBoolean>;
  numberOfVotes?: Array<FilterByInteger>;
  voteType?: Array<FilterByVoteType>;
}
