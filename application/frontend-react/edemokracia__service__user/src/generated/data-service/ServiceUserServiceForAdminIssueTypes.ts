//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import { ServiceIssueTypeQueryCustomizer, ServiceIssueTypeStored, ServiceIssueType } from '../data-api';

/**
 * Access Relation Service for ServiceUser.adminIssueTypes
 */
export interface ServiceUserServiceForAdminIssueTypes {
  listAdminIssueTypes(queryCustomizer?: ServiceIssueTypeQueryCustomizer): Promise<Array<ServiceIssueTypeStored>>;

  createAdminIssueTypes(target: ServiceIssueType): Promise<ServiceIssueTypeStored>;
}
