//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminIssueCategoryStored,
  AdminIssueCategory,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminUser,
  AdminIssueCategoryQueryCustomizer,
} from '../data-api';

/**
 * Class Service for AdminIssueCategory
 */
export interface AdminIssueCategoryService {
  getTemplate(): Promise<AdminIssueCategory>;

  refresh(
    target: JudoIdentifiable<AdminIssueCategory>,
    queryCustomizer?: AdminIssueCategoryQueryCustomizer,
  ): Promise<AdminIssueCategoryStored>;

  delete(target: JudoIdentifiable<AdminIssueCategory>): Promise<void>;

  update(target: Partial<AdminIssueCategoryStored>): Promise<AdminIssueCategoryStored>;

  getSubcategories(
    target: JudoIdentifiable<AdminIssueCategory>,
    queryCustomizer?: AdminIssueCategoryQueryCustomizer,
  ): Promise<Array<AdminIssueCategoryStored>>;

  getRangeForSubcategories(
    owner?: JudoIdentifiable<AdminIssueCategory> | AdminIssueCategory,
    queryCustomizer?: AdminIssueCategoryQueryCustomizer,
  ): Promise<Array<AdminIssueCategoryStored>>;

  getOwner(
    target: JudoIdentifiable<AdminIssueCategory>,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<AdminUserStored>;

  getRangeForOwner(
    owner?: JudoIdentifiable<AdminIssueCategory> | AdminIssueCategory,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>>;

  setOwner(target: JudoIdentifiable<AdminIssueCategory>, selected: JudoIdentifiable<AdminUser>): Promise<void>;

  unsetOwner(target: JudoIdentifiable<AdminIssueCategory>): Promise<void>;
}
