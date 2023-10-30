//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { EdemokraciaVoteStatus } from './EdemokraciaVoteStatus';
import { ServiceDebateStored } from './ServiceDebate';
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

  debate?: null | ServiceDebateStored;
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
  | 'userHasNoVoteEntry';

export type ServiceSelectAnswerVoteDefinitionRelations =
  | 'debate'
  | 'issue'
  | 'voteEntries'
  | 'userVoteEntry'
  | 'voteSelections';

export interface ServiceSelectAnswerVoteDefinitionStored
  extends JudoStored<ServiceSelectAnswerVoteDefinition>,
    ServiceSelectAnswerVoteDefinition {}
