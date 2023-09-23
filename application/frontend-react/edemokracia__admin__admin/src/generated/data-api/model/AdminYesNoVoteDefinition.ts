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
import { AdminYesNoVoteEntryStored } from './AdminYesNoVoteEntry';
import { EdemokraciaVoteStatus } from './EdemokraciaVoteStatus';

export interface AdminYesNoVoteDefinition {
  title: string;
  created: Date;
  description: string;
  status: EdemokraciaVoteStatus;
  closeAt: Date;
  userHasVoteEntry?: null | boolean;
  userHasNoVoteEntry?: null | boolean;

  debate?: null | AdminDebateStored;
  issue?: null | AdminIssueStored;
  voteEntries?: null | Array<AdminYesNoVoteEntryStored>;
  userVoteEntry?: null | AdminYesNoVoteEntryStored;
}
export type AdminYesNoVoteDefinitionAttributes =
  | 'title'
  | 'created'
  | 'description'
  | 'status'
  | 'closeAt'
  | 'userHasVoteEntry'
  | 'userHasNoVoteEntry';

export type AdminYesNoVoteDefinitionRelations = 'debate' | 'issue' | 'voteEntries' | 'userVoteEntry';

export interface AdminYesNoVoteDefinitionStored
  extends JudoStored<AdminYesNoVoteDefinition>,
    AdminYesNoVoteDefinition {}
