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
  ServiceSelectAnswerVoteDefinition,
  ServiceIssueQueryCustomizer,
  ServiceIssueCategoryQueryCustomizer,
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
 * Relation Service for ServiceSelectAnswerVoteDefinition.issue
 */
export interface ServiceSelectAnswerVoteDefinitionServiceForIssue {
  getIssue(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>, mask?: string): Promise<ServiceIssueStored>;

  getRangeForOwner(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;

  setOwner(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<ServiceServiceUser>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void>;

  unsetOwner(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void>;

  getRangeForCategories(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>>;

  setCategories(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<ServiceIssueCategory>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void>;

  addIssueCategories(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<ServiceIssueCategory>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void>;

  removeIssueCategories(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<ServiceIssueCategory>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void>;

  getRangeForIssueType(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer: ServiceIssueTypeQueryCustomizer,
  ): Promise<Array<ServiceIssueTypeStored>>;

  setIssueType(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<ServiceIssueType>,
    selected: JudoIdentifiable<ServiceIssueType>,
  ): Promise<void>;

  unsetIssueType(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<ServiceIssueType>,
  ): Promise<void>;

  getRangeForCounty(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;

  setCounty(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<void>;

  unsetCounty(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<ServiceCounty>,
  ): Promise<void>;

  getRangeForCity(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;

  setCity(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<ServiceCity>,
    selected: JudoIdentifiable<ServiceCity>,
  ): Promise<void>;

  unsetCity(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<ServiceCity>,
  ): Promise<void>;

  getRangeForDistrict(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;

  setDistrict(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;

  unsetDistrict(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;
}
