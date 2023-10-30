//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceServiceUser,
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceIssueCategoryStored,
  ServiceIssue,
} from '../data-api';

/**
 * Relation Service for ServiceIssue.categories
 */
export interface ServiceIssueServiceForCategories {
  listCategories(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>>;

  getRangeForOwner(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;

  setOwner(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceServiceUser>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void>;

  unsetOwner(owner: JudoIdentifiable<ServiceIssue>, target: JudoIdentifiable<ServiceServiceUser>): Promise<void>;
}
