//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  AdminIssueQueryCustomizer,
  AdminUserIssuesQueryCustomizer,
  AdminIssue,
  AdminIssueStored,
  AdminUserIssues,
  AdminUserIssuesStored,
} from '../data-api';

/**
 * Access Relation Service for AdminAdmin.userIssues
 */
export interface AdminAdminServiceForUserIssues {
  getUserIssues(mask?: string): Promise<AdminUserIssuesStored>;
}
