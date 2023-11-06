//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { EdemokraciaVoteStatus } from './EdemokraciaVoteStatus';
import { ServiceIssueStored } from './ServiceIssue';
import { ServiceRatingVoteEntryStored } from './ServiceRatingVoteEntry';

export interface ServiceRatingVoteDefinition {
  title: string;
  created: Date;
  description: string;
  status: EdemokraciaVoteStatus;
  closeAt: Date;
  maxRateValue?: null | number;
  minRateValue?: null | number;
  userHasVoteEntry?: null | boolean;
  userHasNoVoteEntry?: null | boolean;
  isFavorite?: null | boolean;
  isVoteEditable?: null | boolean;
  isVoteNotOpen?: null | boolean;
  isVoteOpen?: null | boolean;
  isNotFavorite?: null | boolean;
  isVoteNotDeletable?: null | boolean;
  isVoteDeletable?: null | boolean;
  isVoteNotEditable?: null | boolean;

  issue?: null | ServiceIssueStored;
  voteEntries?: null | Array<ServiceRatingVoteEntryStored>;
  userVoteEntry?: null | ServiceRatingVoteEntryStored;
}
export type ServiceRatingVoteDefinitionAttributes =
  | 'title'
  | 'created'
  | 'description'
  | 'status'
  | 'closeAt'
  | 'maxRateValue'
  | 'minRateValue'
  | 'userHasVoteEntry'
  | 'userHasNoVoteEntry'
  | 'isFavorite'
  | 'isVoteEditable'
  | 'isVoteNotOpen'
  | 'isVoteOpen'
  | 'isNotFavorite'
  | 'isVoteNotDeletable'
  | 'isVoteDeletable'
  | 'isVoteNotEditable';

export type ServiceRatingVoteDefinitionRelations = 'issue' | 'voteEntries' | 'userVoteEntry';

export interface ServiceRatingVoteDefinitionStored
  extends JudoStored<ServiceRatingVoteDefinition>,
    ServiceRatingVoteDefinition {}
