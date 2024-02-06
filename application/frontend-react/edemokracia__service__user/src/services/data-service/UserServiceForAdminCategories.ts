//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for User.adminCategories
 */
export interface UserServiceForAdminCategories {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
  ): Promise<ServiceIssueCategoryStored>;
  getTemplate(): Promise<ServiceIssueCategory>;
  create(target: ServiceIssueCategory): Promise<ServiceIssueCategoryStored>;
  validateCreate(target: ServiceIssueCategory): Promise<ServiceIssueCategory>;
  delete(target: JudoIdentifiable<ServiceIssueCategory>): Promise<void>;
  update(target: Partial<ServiceIssueCategoryStored>): Promise<ServiceIssueCategoryStored>;
  validateUpdate(target: Partial<ServiceIssueCategoryStored>): Promise<ServiceIssueCategoryStored>;
  getOwner(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;
  getRangeForOwner(
    owner: JudoIdentifiable<ServiceIssueCategory> | ServiceIssueCategory,
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;
  validateCreateOwner(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: ServiceServiceUser,
  ): Promise<ServiceServiceUser>;
  validateUpdateOwner(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: Partial<ServiceServiceUserStored>,
  ): Promise<ServiceServiceUserStored>;
  setOwner(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void>;
  unsetOwner(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void>;
  listSubcategories(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>>;
  getTemplateForSubcategories(): Promise<ServiceIssueCategory>;
  createSubcategories(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: ServiceIssueCategory,
  ): Promise<ServiceIssueCategoryStored>;
  validateCreateSubcategories(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: ServiceIssueCategory,
  ): Promise<ServiceIssueCategory>;
  deleteSubcategories(target: JudoIdentifiable<ServiceIssueCategory>): Promise<void>;
  updateSubcategories(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: Partial<ServiceIssueCategoryStored>,
  ): Promise<ServiceIssueCategoryStored>;
  validateUpdateSubcategories(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: Partial<ServiceIssueCategoryStored>,
  ): Promise<ServiceIssueCategoryStored>;
}
