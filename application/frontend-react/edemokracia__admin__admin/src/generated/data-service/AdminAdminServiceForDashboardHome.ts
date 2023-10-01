//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  AdminVoteDefinitionQueryCustomizer,
  AdminVoteEntryQueryCustomizer,
  AdminIssueStored,
  AdminVoteEntryStored,
  AdminDashboardQueryCustomizer,
  AdminIssueQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminVoteEntry,
  AdminDebate,
  AdminIssue,
  AdminVoteDefinition,
  AdminDebateStored,
  AdminDashboardStored,
  AdminDashboard,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Access Relation Service for AdminAdmin.dashboardHome
 */
export interface AdminAdminServiceForDashboardHome {
  getDashboardHome(mask?: string): Promise<AdminDashboardStored>;
}
