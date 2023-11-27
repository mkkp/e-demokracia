//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { ServiceIssue } from './ServiceIssue';
import { ServiceIssueStored } from './ServiceIssue';
import { ServiceRatingVoteEntry } from './ServiceRatingVoteEntry';
import { ServiceRatingVoteEntryStored } from './ServiceRatingVoteEntry';
import { ServiceServiceUser } from './ServiceServiceUser';
import { ServiceServiceUserStored } from './ServiceServiceUser';
import { VoteStatus } from './VoteStatus';

export interface ServiceRatingVoteDefinition {
  title: string;
  created: Date;
  description: string;
  status: VoteStatus;
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
  createdBy?: null | string;
  issue?: null | ServiceIssueStored;
  voteEntries?: null | Array<ServiceRatingVoteEntryStored>;
  userVoteEntry?: null | ServiceRatingVoteEntryStored;
  owner?: null | ServiceServiceUserStored;
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
  | 'isVoteNotEditable'
  | 'createdBy';
export type ServiceRatingVoteDefinitionRelations = 'issue' | 'voteEntries' | 'userVoteEntry' | 'owner';

export interface ServiceRatingVoteDefinitionStored
  extends JudoStored<ServiceRatingVoteDefinition>,
    ServiceRatingVoteDefinition {}
