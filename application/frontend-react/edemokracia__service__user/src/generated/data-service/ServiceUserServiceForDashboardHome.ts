//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  ServiceVoteDefinitionStored,
  ServiceDashboardQueryCustomizer,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceDashboard,
  ServiceVoteEntryQueryCustomizer,
  ServiceIssueQueryCustomizer,
  ServiceVoteDefinition,
  ServiceDashboardStored,
  ServiceIssueStored,
  ServiceVoteEntryStored,
  ServiceVoteEntry,
  ServiceIssue,
} from '../data-api';

/**
 * Access Relation Service for ServiceUser.dashboardHome
 */
export interface ServiceUserServiceForDashboardHome {
  getDashboardHome(mask?: string): Promise<ServiceDashboardStored>;
}
