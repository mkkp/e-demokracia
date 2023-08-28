//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminIssueCategoryStored,
  AdminIssueCategory,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminUser,
  AdminIssueCategoryQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for AdminIssueCategory.subcategories
 */
export interface AdminIssueCategoryServiceForSubcategories {
  listSubcategories(
    owner: JudoIdentifiable<AdminIssueCategory>,
    queryCustomizer?: AdminIssueCategoryQueryCustomizer,
  ): Promise<Array<AdminIssueCategoryStored>>;

  createSubcategories(
    owner: JudoIdentifiable<AdminIssueCategory>,
    target: AdminIssueCategory,
  ): Promise<AdminIssueCategoryStored>;

  deleteSubcategories(
    owner: JudoIdentifiable<AdminIssueCategory>,
    target: JudoIdentifiable<AdminIssueCategory>,
  ): Promise<void>;

  updateSubcategories(
    owner: JudoIdentifiable<AdminIssueCategory>,
    target: Partial<AdminIssueCategoryStored>,
  ): Promise<AdminIssueCategoryStored>;

  getRangeForOwner(
    owner: JudoIdentifiable<AdminIssueCategory>,
    queryCustomizer: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>>;

  setOwner(
    owner: JudoIdentifiable<AdminIssueCategory>,
    target: JudoIdentifiable<AdminUser>,
    selected: JudoIdentifiable<AdminUser>,
  ): Promise<void>;

  unsetOwner(owner: JudoIdentifiable<AdminIssueCategory>, target: JudoIdentifiable<AdminUser>): Promise<void>;
}
