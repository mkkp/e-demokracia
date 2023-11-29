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
import { ServiceSelectAnswerVoteEntry } from './ServiceSelectAnswerVoteEntry';
import { ServiceSelectAnswerVoteEntryStored } from './ServiceSelectAnswerVoteEntry';
import { ServiceSelectAnswerVoteSelection } from './ServiceSelectAnswerVoteSelection';
import { ServiceSelectAnswerVoteSelectionStored } from './ServiceSelectAnswerVoteSelection';
import { ServiceServiceUser } from './ServiceServiceUser';
import { ServiceServiceUserStored } from './ServiceServiceUser';
import { VoteStatus } from './VoteStatus';

export interface ServiceSelectAnswerVoteDefinition {
  title: string;
  created: Date;
  description: string;
  status: VoteStatus;
  closeAt: Date;
  userHasVoteEntry?: null | boolean;
  userHasNoVoteEntry?: null | boolean;
  isVoteEditable?: null | boolean;
  isVoteOpen?: null | boolean;
  isVoteNotEditable?: null | boolean;
  isVoteNotOpen?: null | boolean;
  isFavorite?: null | boolean;
  isNotFavorite?: null | boolean;
  isVoteDeletable?: null | boolean;
  isVoteNotDeletable?: null | boolean;
  createdBy?: null | string;
  issue?: null | ServiceIssueStored;
  voteEntries?: null | Array<ServiceSelectAnswerVoteEntryStored>;
  userVoteEntry?: null | ServiceSelectAnswerVoteEntryStored;
  voteSelections?: null | Array<ServiceSelectAnswerVoteSelectionStored>;
  owner?: null | ServiceServiceUserStored;
}

export type ServiceSelectAnswerVoteDefinitionAttributes =
  | 'title'
  | 'created'
  | 'description'
  | 'status'
  | 'closeAt'
  | 'userHasVoteEntry'
  | 'userHasNoVoteEntry'
  | 'isVoteEditable'
  | 'isVoteOpen'
  | 'isVoteNotEditable'
  | 'isVoteNotOpen'
  | 'isFavorite'
  | 'isNotFavorite'
  | 'isVoteDeletable'
  | 'isVoteNotDeletable'
  | 'createdBy';
export type ServiceSelectAnswerVoteDefinitionRelations =
  | 'issue'
  | 'voteEntries'
  | 'userVoteEntry'
  | 'voteSelections'
  | 'owner';

export interface ServiceSelectAnswerVoteDefinitionStored
  extends JudoStored<ServiceSelectAnswerVoteDefinition>,
    ServiceSelectAnswerVoteDefinition {}
