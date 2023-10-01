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
import { AdminVoteDefinitionStored } from './AdminVoteDefinition';
import { AdminVoteEntryStored } from './AdminVoteEntry';

export interface AdminDashboard {
  welcome?: null | string;

  issuesOwned?: null | Array<AdminIssueStored>;
  ownedDebates?: null | Array<AdminDebateStored>;
  userVoteEntries?: null | Array<AdminVoteEntryStored>;
  favoriteDebates?: null | Array<AdminDebateStored>;
  favoriteIssues?: null | Array<AdminIssueStored>;
  favoriteVoteDefinitions?: null | Array<AdminVoteDefinitionStored>;
  ownedVoteDefinitions?: null | Array<AdminVoteDefinitionStored>;
}
export type AdminDashboardAttributes = 'welcome';

export type AdminDashboardRelations =
  | 'issuesOwned'
  | 'ownedDebates'
  | 'userVoteEntries'
  | 'favoriteDebates'
  | 'favoriteIssues'
  | 'favoriteVoteDefinitions'
  | 'ownedVoteDefinitions';

export interface AdminDashboardStored extends JudoStored<AdminDashboard>, AdminDashboard {}
