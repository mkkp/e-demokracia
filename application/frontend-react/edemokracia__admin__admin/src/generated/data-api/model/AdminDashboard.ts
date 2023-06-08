//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import { JudoStored } from '@judo/data-api-common';
import { AdminDebateStored } from './AdminDebate';
import { AdminIssueStored } from './AdminIssue';
import { AdminVoteEntryStored } from './AdminVoteEntry';

export interface AdminDashboard {
  welcome?: null | string;

  issues?: null | Array<AdminIssueStored>;
  debates?: null | Array<AdminDebateStored>;
  voteEntries?: null | Array<AdminVoteEntryStored>;
}
export type AdminDashboardAttributes = 'welcome';

export type AdminDashboardRelations = 'issues' | 'debates' | 'voteEntries';

export interface AdminDashboardStored extends JudoStored<AdminDashboard>, AdminDashboard {}
