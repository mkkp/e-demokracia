//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceServiceUser,
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceServiceUserStored,
  ServiceServiceUserQueryCustomizer,
  ServiceIssueCategoryStored,
} from '../data-api';

/**
 * Class Service for ServiceIssueCategory
 */
export interface ServiceIssueCategoryServiceForClass {
  getTemplate(): Promise<ServiceIssueCategory>;

  refresh(
    target: JudoIdentifiable<ServiceIssueCategory>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
  ): Promise<ServiceIssueCategoryStored>;

  delete(target: JudoIdentifiable<ServiceIssueCategory>): Promise<void>;

  update(target: Partial<ServiceIssueCategoryStored>): Promise<ServiceIssueCategoryStored>;

  getSubcategories(
    target: JudoIdentifiable<ServiceIssueCategory>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>>;

  getRangeForSubcategories(
    owner?: JudoIdentifiable<ServiceIssueCategory> | ServiceIssueCategory,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>>;

  getOwner(
    target: JudoIdentifiable<ServiceIssueCategory>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;

  getRangeForOwner(
    owner?: JudoIdentifiable<ServiceIssueCategory> | ServiceIssueCategory,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;

  setOwner(
    target: JudoIdentifiable<ServiceIssueCategory>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void>;

  unsetOwner(target: JudoIdentifiable<ServiceIssueCategory>): Promise<void>;
}
