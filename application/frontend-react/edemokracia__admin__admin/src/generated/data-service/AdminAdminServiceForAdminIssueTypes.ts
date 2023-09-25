//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import { AdminIssueTypeQueryCustomizer, AdminIssueType, AdminIssueTypeStored } from '../data-api';

/**
 * Access Relation Service for AdminAdmin.adminIssueTypes
 */
export interface AdminAdminServiceForAdminIssueTypes {
  listAdminIssueTypes(queryCustomizer?: AdminIssueTypeQueryCustomizer): Promise<Array<AdminIssueTypeStored>>;

  createAdminIssueTypes(target: AdminIssueType): Promise<AdminIssueTypeStored>;
}
