//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  AdminIssueCategoryStored,
  AdminIssueCategory,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminUser,
  AdminIssueCategoryQueryCustomizer,
} from '../data-api';

/**
 * Access Relation Service for AdminAdmin.categories
 */
export interface AdminAdminServiceForCategories {
  listCategories(queryCustomizer?: AdminIssueCategoryQueryCustomizer): Promise<Array<AdminIssueCategoryStored>>;

  createCategories(target: AdminIssueCategory): Promise<AdminIssueCategoryStored>;
}
