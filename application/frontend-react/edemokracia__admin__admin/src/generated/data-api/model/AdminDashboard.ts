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
import { AdminVoteEntryStored } from './AdminVoteEntry';

export interface AdminDashboard {
  welcome?: null | string;

  issuesOwned?: null | Array<AdminIssueStored>;
  ownedDebates?: null | Array<AdminDebateStored>;
  voteEntries?: null | Array<AdminVoteEntryStored>;
  favoriteDebates?: null | Array<AdminDebateStored>;
  favoriteIssues?: null | Array<AdminIssueStored>;
}
export type AdminDashboardAttributes = 'welcome';

export type AdminDashboardRelations =
  | 'issuesOwned'
  | 'ownedDebates'
  | 'voteEntries'
  | 'favoriteDebates'
  | 'favoriteIssues';

export interface AdminDashboardStored extends JudoStored<AdminDashboard>, AdminDashboard {}
