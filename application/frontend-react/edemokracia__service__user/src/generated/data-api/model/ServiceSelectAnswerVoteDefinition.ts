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
import { ServiceSelectAnswerVoteEntryStored } from './ServiceSelectAnswerVoteEntry';
import { ServiceSelectAnswerVoteSelectionStored } from './ServiceSelectAnswerVoteSelection';

export interface ServiceSelectAnswerVoteDefinition {
  title: string;
  created: Date;
  description: string;
  status: EdemokraciaVoteStatus;
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

  issue?: null | ServiceIssueStored;
  voteEntries?: null | Array<ServiceSelectAnswerVoteEntryStored>;
  userVoteEntry?: null | ServiceSelectAnswerVoteEntryStored;
  voteSelections?: null | Array<ServiceSelectAnswerVoteSelectionStored>;
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
  | 'isVoteNotDeletable';

export type ServiceSelectAnswerVoteDefinitionRelations = 'issue' | 'voteEntries' | 'userVoteEntry' | 'voteSelections';

export interface ServiceSelectAnswerVoteDefinitionStored
  extends JudoStored<ServiceSelectAnswerVoteDefinition>,
    ServiceSelectAnswerVoteDefinition {}
