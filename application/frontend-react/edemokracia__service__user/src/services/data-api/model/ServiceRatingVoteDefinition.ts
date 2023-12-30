//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '../common';
import { ServiceIssue } from './ServiceIssue';
import { ServiceIssueStored } from './ServiceIssue';
import { ServiceRatingVoteEntry } from './ServiceRatingVoteEntry';
import { ServiceRatingVoteEntryStored } from './ServiceRatingVoteEntry';
import { ServiceServiceUser } from './ServiceServiceUser';
import { ServiceServiceUserStored } from './ServiceServiceUser';
import { VoteStatus } from './VoteStatus';

export interface ServiceRatingVoteDefinition {
  closeAt: Date;
  created: Date;
  createdBy?: null | string;
  description: string;
  isFavorite?: null | boolean;
  isNotFavorite?: null | boolean;
  isVoteDeletable?: null | boolean;
  isVoteEditable?: null | boolean;
  isVoteNotDeletable?: null | boolean;
  isVoteNotEditable?: null | boolean;
  isVoteNotOpen?: null | boolean;
  isVoteOpen?: null | boolean;
  maxRateValue?: null | number;
  minRateValue?: null | number;
  status: VoteStatus;
  title: string;
  userHasNoVoteEntry?: null | boolean;
  userHasVoteEntry?: null | boolean;
  issue?: null | ServiceIssueStored;
  owner?: null | ServiceServiceUserStored;
  userVoteEntry?: null | ServiceRatingVoteEntryStored;
  voteEntries?: null | Array<ServiceRatingVoteEntryStored>;
}

export type ServiceRatingVoteDefinitionAttributes =
  | 'closeAt'
  | 'created'
  | 'createdBy'
  | 'description'
  | 'isFavorite'
  | 'isNotFavorite'
  | 'isVoteDeletable'
  | 'isVoteEditable'
  | 'isVoteNotDeletable'
  | 'isVoteNotEditable'
  | 'isVoteNotOpen'
  | 'isVoteOpen'
  | 'maxRateValue'
  | 'minRateValue'
  | 'status'
  | 'title'
  | 'userHasNoVoteEntry'
  | 'userHasVoteEntry';
export type ServiceRatingVoteDefinitionRelations = 'issue' | 'owner' | 'userVoteEntry' | 'voteEntries';

export interface ServiceRatingVoteDefinitionStored
  extends JudoStored<ServiceRatingVoteDefinition>,
    ServiceRatingVoteDefinition {}
