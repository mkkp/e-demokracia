//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { ServiceDebateStored } from './ServiceDebate';
import { ServiceIssueStored } from './ServiceIssue';
import { ServiceVoteDefinitionStored } from './ServiceVoteDefinition';
import { ServiceVoteEntryStored } from './ServiceVoteEntry';

export interface ServiceDashboard {
  welcome?: null | string;

  issuesOwned?: null | Array<ServiceIssueStored>;
  ownedDebates?: null | Array<ServiceDebateStored>;
  userVoteEntries?: null | Array<ServiceVoteEntryStored>;
  favoriteDebates?: null | Array<ServiceDebateStored>;
  favoriteIssues?: null | Array<ServiceIssueStored>;
  favoriteVoteDefinitions?: null | Array<ServiceVoteDefinitionStored>;
  ownedVoteDefinitions?: null | Array<ServiceVoteDefinitionStored>;
}
export type ServiceDashboardAttributes = 'welcome';

export type ServiceDashboardRelations =
  | 'issuesOwned'
  | 'ownedDebates'
  | 'userVoteEntries'
  | 'favoriteDebates'
  | 'favoriteIssues'
  | 'favoriteVoteDefinitions'
  | 'ownedVoteDefinitions';

export interface ServiceDashboardStored extends JudoStored<ServiceDashboard>, ServiceDashboard {}
