//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  AdminDashboardQueryCustomizer,
  AdminIssueQueryCustomizer,
  AdminVoteEntry,
  AdminDebate,
  AdminIssue,
  AdminVoteEntryQueryCustomizer,
  AdminIssueStored,
  AdminDebateStored,
  AdminVoteEntryStored,
  AdminDashboardStored,
  AdminDashboard,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Access Relation Service for AdminAdmin.dashboardhome
 */
export interface AdminAdminServiceForDashboardhome {
  getDashboardhome(mask?: string): Promise<AdminDashboardStored>;
}
