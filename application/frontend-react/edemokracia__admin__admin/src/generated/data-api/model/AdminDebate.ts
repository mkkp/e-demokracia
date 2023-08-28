//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { AdminCommentStored } from './AdminComment';
import { AdminConStored } from './AdminCon';
import { AdminIssueStored } from './AdminIssue';
import { AdminProStored } from './AdminPro';
import { AdminUserStored } from './AdminUser';
import { AdminVoteDefinitionStored } from './AdminVoteDefinition';
import { EdemokraciaDebateStatus } from './EdemokraciaDebateStatus';

export interface AdminDebate {
  closeAt: Date;
  description: string;
  status: EdemokraciaDebateStatus;
  title: string;
  issueTitle?: null | string;

  issue?: null | AdminIssueStored;
  comments?: null | Array<AdminCommentStored>;
  createdBy?: null | AdminUserStored;
  cons?: null | Array<AdminConStored>;
  pros?: null | Array<AdminProStored>;
  voteDefinition?: null | AdminVoteDefinitionStored;
}
export type AdminDebateAttributes = 'closeAt' | 'description' | 'status' | 'title' | 'issueTitle';

export type AdminDebateRelations = 'issue' | 'comments' | 'createdBy' | 'cons' | 'pros' | 'voteDefinition';

export interface AdminDebateStored extends JudoStored<AdminDebate>, AdminDebate {}
