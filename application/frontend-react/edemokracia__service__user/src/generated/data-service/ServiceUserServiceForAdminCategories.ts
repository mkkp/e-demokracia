//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  ServiceServiceUser,
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceIssueCategoryStored,
} from '../data-api';

/**
 * Access Relation Service for ServiceUser.adminCategories
 */
export interface ServiceUserServiceForAdminCategories {
  listAdminCategories(
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>>;

  createAdminCategories(target: ServiceIssueCategory): Promise<ServiceIssueCategoryStored>;
}
