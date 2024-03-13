//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  JudoRestResponse,
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceIssueCategory.subcategories
 */
export interface ServiceIssueCategoryServiceForSubcategories {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueCategoryStored>>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueCategoryStored>>;
  getTemplate(): Promise<JudoRestResponse<ServiceIssueCategory>>;
  create(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: ServiceIssueCategory,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueCategoryStored>>;
  validateCreate(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: ServiceIssueCategory,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueCategory>>;
  delete(target: JudoIdentifiable<ServiceIssueCategory>): Promise<JudoRestResponse<void>>;
  update(
    target: Partial<ServiceIssueCategoryStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueCategoryStored>>;
  validateUpdate(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: Partial<ServiceIssueCategoryStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueCategoryStored>>;
  getOwner(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  getRangeForOwner(
    owner: JudoIdentifiable<ServiceIssueCategory> | ServiceIssueCategory,
    queryCustomizer: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>>;
  validateCreateOwner(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: ServiceServiceUser,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceServiceUser>>;
  validateUpdateOwner(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: Partial<ServiceServiceUserStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  setOwner(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>>;
  unsetOwner(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>>;
  listSubcategories(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueCategoryStored>>>;
  getTemplateForSubcategories(): Promise<JudoRestResponse<ServiceIssueCategory>>;
  createSubcategories(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: ServiceIssueCategory,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueCategoryStored>>;
  validateCreateSubcategories(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: ServiceIssueCategory,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueCategory>>;
  deleteSubcategories(target: JudoIdentifiable<ServiceIssueCategory>): Promise<JudoRestResponse<void>>;
  updateSubcategories(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: Partial<ServiceIssueCategoryStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueCategoryStored>>;
  validateUpdateSubcategories(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: Partial<ServiceIssueCategoryStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueCategoryStored>>;
}
