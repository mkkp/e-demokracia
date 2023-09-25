//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { AdminDebateStored } from './AdminDebate';
import { AdminIssueStored } from './AdminIssue';
import { AdminSelectAnswerVoteEntryStored } from './AdminSelectAnswerVoteEntry';
import { AdminSelectAnswerVoteSelectionStored } from './AdminSelectAnswerVoteSelection';
import { EdemokraciaVoteStatus } from './EdemokraciaVoteStatus';

export interface AdminSelectAnswerVoteDefinition {
  title: string;
  created: Date;
  description: string;
  status: EdemokraciaVoteStatus;
  closeAt: Date;
  userHasVoteEntry?: null | boolean;
  userHasNoVoteEntry?: null | boolean;

  debate?: null | AdminDebateStored;
  issue?: null | AdminIssueStored;
  voteEntries?: null | Array<AdminSelectAnswerVoteEntryStored>;
  userVoteEntry?: null | AdminSelectAnswerVoteEntryStored;
  voteSelections?: null | Array<AdminSelectAnswerVoteSelectionStored>;
}
export type AdminSelectAnswerVoteDefinitionAttributes =
  | 'title'
  | 'created'
  | 'description'
  | 'status'
  | 'closeAt'
  | 'userHasVoteEntry'
  | 'userHasNoVoteEntry';

export type AdminSelectAnswerVoteDefinitionRelations =
  | 'debate'
  | 'issue'
  | 'voteEntries'
  | 'userVoteEntry'
  | 'voteSelections';

export interface AdminSelectAnswerVoteDefinitionStored
  extends JudoStored<AdminSelectAnswerVoteDefinition>,
    AdminSelectAnswerVoteDefinition {}
