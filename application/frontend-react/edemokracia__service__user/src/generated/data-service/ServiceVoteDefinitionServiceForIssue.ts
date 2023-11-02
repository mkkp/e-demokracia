//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceDistrictQueryCustomizer,
  ServiceCommentQueryCustomizer,
  ServiceIssueQueryCustomizer,
  ServiceIssueCategoryQueryCustomizer,
  ServiceVoteDefinition,
  ServiceIssueStored,
  ServiceConStored,
  ServiceIssue,
  ServiceServiceUser,
  ServiceCity,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueCategory,
  ServiceCountyStored,
  ServiceConQueryCustomizer,
  ServiceCounty,
  ServiceProStored,
  ServicePro,
  ServiceIssueType,
  ServiceComment,
  ServiceIssueAttachment,
  ServiceDistrict,
  ServiceCountyQueryCustomizer,
  ServiceServiceUserStored,
  ServiceCommentStored,
  ServiceIssueCategoryStored,
  ServiceCon,
  ServiceProQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceServiceUserQueryCustomizer,
  ServiceCityStored,
  ServiceIssueAttachmentStored,
  ServiceIssueTypeStored,
  ServiceCityQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServiceVoteDefinition.issue
 */
export interface ServiceVoteDefinitionServiceForIssue {
  getIssue(owner: JudoIdentifiable<ServiceVoteDefinition>, mask?: string): Promise<ServiceIssueStored>;

  getRangeForOwner(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;

  setOwner(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: JudoIdentifiable<ServiceServiceUser>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void>;

  unsetOwner(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void>;

  getRangeForCategories(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    queryCustomizer: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>>;

  setCategories(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: JudoIdentifiable<ServiceIssueCategory>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void>;

  addIssueCategories(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: JudoIdentifiable<ServiceIssueCategory>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void>;

  removeIssueCategories(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: JudoIdentifiable<ServiceIssueCategory>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void>;

  getRangeForIssueType(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    queryCustomizer: ServiceIssueTypeQueryCustomizer,
  ): Promise<Array<ServiceIssueTypeStored>>;

  setIssueType(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: JudoIdentifiable<ServiceIssueType>,
    selected: JudoIdentifiable<ServiceIssueType>,
  ): Promise<void>;

  unsetIssueType(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: JudoIdentifiable<ServiceIssueType>,
  ): Promise<void>;

  getRangeForCounty(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;

  setCounty(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<void>;

  unsetCounty(owner: JudoIdentifiable<ServiceVoteDefinition>, target: JudoIdentifiable<ServiceCounty>): Promise<void>;

  getRangeForCity(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;

  setCity(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: JudoIdentifiable<ServiceCity>,
    selected: JudoIdentifiable<ServiceCity>,
  ): Promise<void>;

  unsetCity(owner: JudoIdentifiable<ServiceVoteDefinition>, target: JudoIdentifiable<ServiceCity>): Promise<void>;

  getRangeForDistrict(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;

  setDistrict(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;

  unsetDistrict(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;
}
