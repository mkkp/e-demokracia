//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '../common';
import { ServiceIssue } from './ServiceIssue';
import { ServiceIssueStored } from './ServiceIssue';
import { ServiceVoteDefinition } from './ServiceVoteDefinition';
import { ServiceVoteDefinitionStored } from './ServiceVoteDefinition';
import { ServiceVoteEntry } from './ServiceVoteEntry';
import { ServiceVoteEntryStored } from './ServiceVoteEntry';

export interface ServiceDashboard {
  welcome?: null | string;
  favoriteIssues?: null | Array<ServiceIssueStored>;
  favoriteVoteDefinitions?: null | Array<ServiceVoteDefinitionStored>;
  ownedIssues?: null | Array<ServiceIssueStored>;
  ownedVoteDefinitions?: null | Array<ServiceVoteDefinitionStored>;
  userVoteEntries?: null | Array<ServiceVoteEntryStored>;
}

export type ServiceDashboardAttributes = 'welcome';
export type ServiceDashboardRelations =
  | 'favoriteIssues'
  | 'favoriteVoteDefinitions'
  | 'ownedIssues'
  | 'ownedVoteDefinitions'
  | 'userVoteEntries';

export interface ServiceDashboardStored extends JudoStored<ServiceDashboard>, ServiceDashboard {}
