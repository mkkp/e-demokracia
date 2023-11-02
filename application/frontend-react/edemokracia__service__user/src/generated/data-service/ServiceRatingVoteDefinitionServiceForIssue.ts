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
  ServiceRatingVoteDefinition,
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
 * Relation Service for ServiceRatingVoteDefinition.issue
 */
export interface ServiceRatingVoteDefinitionServiceForIssue {
  getIssue(owner: JudoIdentifiable<ServiceRatingVoteDefinition>, mask?: string): Promise<ServiceIssueStored>;

  getRangeForOwner(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;

  setOwner(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    target: JudoIdentifiable<ServiceServiceUser>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void>;

  unsetOwner(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    target: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void>;

  getRangeForCategories(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>>;

  setCategories(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    target: JudoIdentifiable<ServiceIssueCategory>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void>;

  addIssueCategories(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    target: JudoIdentifiable<ServiceIssueCategory>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void>;

  removeIssueCategories(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    target: JudoIdentifiable<ServiceIssueCategory>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void>;

  getRangeForIssueType(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer: ServiceIssueTypeQueryCustomizer,
  ): Promise<Array<ServiceIssueTypeStored>>;

  setIssueType(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    target: JudoIdentifiable<ServiceIssueType>,
    selected: JudoIdentifiable<ServiceIssueType>,
  ): Promise<void>;

  unsetIssueType(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    target: JudoIdentifiable<ServiceIssueType>,
  ): Promise<void>;

  getRangeForCounty(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;

  setCounty(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<void>;

  unsetCounty(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    target: JudoIdentifiable<ServiceCounty>,
  ): Promise<void>;

  getRangeForCity(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;

  setCity(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    target: JudoIdentifiable<ServiceCity>,
    selected: JudoIdentifiable<ServiceCity>,
  ): Promise<void>;

  unsetCity(owner: JudoIdentifiable<ServiceRatingVoteDefinition>, target: JudoIdentifiable<ServiceCity>): Promise<void>;

  getRangeForDistrict(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;

  setDistrict(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;

  unsetDistrict(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    target: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;
}
