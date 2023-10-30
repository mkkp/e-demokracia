//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { EdemokraciaDebateStatus } from './EdemokraciaDebateStatus';

export interface ServiceIssueDebate {
  closeAt: Date;
  description: string;
  status: EdemokraciaDebateStatus;
  title: string;
}
export type ServiceIssueDebateAttributes = 'closeAt' | 'description' | 'status' | 'title';

export interface ServiceIssueDebateStored extends JudoStored<ServiceIssueDebate>, ServiceIssueDebate {}
