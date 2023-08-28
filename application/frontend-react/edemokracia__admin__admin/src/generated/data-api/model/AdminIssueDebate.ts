//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { EdemokraciaDebateStatus } from './EdemokraciaDebateStatus';

export interface AdminIssueDebate {
  closeAt: Date;
  description: string;
  status: EdemokraciaDebateStatus;
  title: string;
}
export type AdminIssueDebateAttributes = 'closeAt' | 'description' | 'status' | 'title';

export interface AdminIssueDebateStored extends JudoStored<AdminIssueDebate>, AdminIssueDebate {}
