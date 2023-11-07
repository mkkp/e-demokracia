//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { ServiceIssue } from './ServiceIssue';
import { ServiceIssueStored } from './ServiceIssue';
import { ServiceVoteDefinition } from './ServiceVoteDefinition';
import { ServiceVoteDefinitionStored } from './ServiceVoteDefinition';
import { ServiceVoteEntry } from './ServiceVoteEntry';
import { ServiceVoteEntryStored } from './ServiceVoteEntry';

export interface ServiceDashboard {
  welcome?: null | string;

  issuesOwned?: null | Array<ServiceIssueStored>;
  userVoteEntries?: null | Array<ServiceVoteEntryStored>;
  favoriteIssues?: null | Array<ServiceIssueStored>;
  favoriteVoteDefinitions?: null | Array<ServiceVoteDefinitionStored>;
  ownedVoteDefinitions?: null | Array<ServiceVoteDefinitionStored>;
}
export type ServiceDashboardAttributes = 'welcome';

export type ServiceDashboardRelations =
  | 'issuesOwned'
  | 'userVoteEntries'
  | 'favoriteIssues'
  | 'favoriteVoteDefinitions'
  | 'ownedVoteDefinitions';

export interface ServiceDashboardStored extends JudoStored<ServiceDashboard>, ServiceDashboard {}
