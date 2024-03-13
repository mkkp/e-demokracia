//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  JudoRestResponse,
  ServiceIssue,
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceIssue.categories
 */
export interface ServiceIssueServiceForCategories {
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
  getRangeForCategories(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueCategoryStored>>>;
  getTemplate(): Promise<JudoRestResponse<ServiceIssueCategory>>;
  setCategories(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<JudoRestResponse<void>>;
  addCategories(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<JudoRestResponse<void>>;
  removeCategories(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<JudoRestResponse<void>>;
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
  deleteSubcategories(target: JudoIdentifiable<ServiceIssueCategory>): Promise<JudoRestResponse<void>>;
  updateSubcategories(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: Partial<ServiceIssueCategoryStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueCategoryStored>>;
}
