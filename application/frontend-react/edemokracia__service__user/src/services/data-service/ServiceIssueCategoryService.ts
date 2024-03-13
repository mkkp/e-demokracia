//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

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
 * Class Service for ServiceIssueCategory
 */
export interface ServiceIssueCategoryService {
  getTemplate(): Promise<JudoRestResponse<ServiceIssueCategory>>;
  refresh(
    target: JudoIdentifiable<ServiceIssueCategory>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueCategoryStored>>;
  delete(target: JudoIdentifiable<ServiceIssueCategory>): Promise<JudoRestResponse<void>>;
  update(
    target: Partial<ServiceIssueCategoryStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueCategoryStored>>;
  validateUpdate(
    target: Partial<ServiceIssueCategoryStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueCategoryStored>>;
  getOwner(
    target: JudoIdentifiable<ServiceIssueCategory>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  getRangeForOwner(
    owner?: JudoIdentifiable<ServiceIssueCategory> | ServiceIssueCategory,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>>;
  setOwner(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>>;
  unsetOwner(owner: JudoIdentifiable<ServiceIssueCategory>): Promise<JudoRestResponse<void>>;
  getTemplateForSubcategories(): Promise<JudoRestResponse<ServiceIssueCategory>>;
  createSubcategories(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: JudoIdentifiable<ServiceIssueCategory>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueCategoryStored>>;
  validateCreateSubcategories(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: ServiceIssueCategory,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueCategory>>;
  listSubcategories(
    target: JudoIdentifiable<ServiceIssueCategory>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueCategoryStored>>>;
  getRangeForSubcategories(
    owner?: JudoIdentifiable<ServiceIssueCategory> | ServiceIssueCategory,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueCategoryStored>>>;
  deleteSubcategories(target: JudoIdentifiable<ServiceIssueCategory>): Promise<JudoRestResponse<void>>;
}
