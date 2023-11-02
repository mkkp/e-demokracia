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
  ServiceComment,
  ServiceIssueAttachment,
  ServiceDistrict,
  ServiceCountyQueryCustomizer,
  ServiceServiceUserStored,
  ServiceCommentStored,
  ServiceIssueCategoryStored,
  ServiceCon,
  ServiceYesNoVoteDefinition,
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
 * Relation Service for ServiceYesNoVoteDefinition.issue
 */
export interface ServiceYesNoVoteDefinitionServiceForIssue {
  getIssue(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>, mask?: string): Promise<ServiceIssueStored>;

  getRangeForOwner(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;

  setOwner(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    target: JudoIdentifiable<ServiceServiceUser>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void>;

  unsetOwner(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    target: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void>;

  getRangeForCategories(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>>;

  setCategories(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    target: JudoIdentifiable<ServiceIssueCategory>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void>;

  addIssueCategories(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    target: JudoIdentifiable<ServiceIssueCategory>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void>;

  removeIssueCategories(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    target: JudoIdentifiable<ServiceIssueCategory>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void>;

  getRangeForIssueType(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer: ServiceIssueTypeQueryCustomizer,
  ): Promise<Array<ServiceIssueTypeStored>>;

  setIssueType(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    target: JudoIdentifiable<ServiceIssueType>,
    selected: JudoIdentifiable<ServiceIssueType>,
  ): Promise<void>;

  unsetIssueType(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    target: JudoIdentifiable<ServiceIssueType>,
  ): Promise<void>;

  getRangeForCounty(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;

  setCounty(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<void>;

  unsetCounty(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    target: JudoIdentifiable<ServiceCounty>,
  ): Promise<void>;

  getRangeForCity(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;

  setCity(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    target: JudoIdentifiable<ServiceCity>,
    selected: JudoIdentifiable<ServiceCity>,
  ): Promise<void>;

  unsetCity(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>, target: JudoIdentifiable<ServiceCity>): Promise<void>;

  getRangeForDistrict(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;

  setDistrict(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;

  unsetDistrict(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    target: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;
}
