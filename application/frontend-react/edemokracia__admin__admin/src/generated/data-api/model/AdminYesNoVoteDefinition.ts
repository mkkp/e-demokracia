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
import { EdemokraciaVoteStatus } from './EdemokraciaVoteStatus';

export interface AdminYesNoVoteDefinition {
  title: string;
  created: Date;
  description: string;
  status: EdemokraciaVoteStatus;
  closeAt: Date;

  debate?: null | AdminDebateStored;
  issue?: null | AdminIssueStored;
}
export type AdminYesNoVoteDefinitionAttributes = 'title' | 'created' | 'description' | 'status' | 'closeAt';

export type AdminYesNoVoteDefinitionRelations = 'debate' | 'issue';

export interface AdminYesNoVoteDefinitionStored
  extends JudoStored<AdminYesNoVoteDefinition>,
    AdminYesNoVoteDefinition {}
