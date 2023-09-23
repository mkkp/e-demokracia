//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminIssueDebate,
  AdminCityQueryCustomizer,
  AdminIssueStored,
  AdminDistrictStored,
  AdminCommentQueryCustomizer,
  AdminCounty,
  AdminCity,
  AdminIssueDebateQueryCustomizer,
  AdminDistrictQueryCustomizer,
  AdminIssueQueryCustomizer,
  AdminIssueCategoryStored,
  AdminIssueCategory,
  AdminComment,
  AdminUser,
  AdminCountyStored,
  AdminCityStored,
  AdminIssueTypeStored,
  AdminUserStored,
  AdminIssueAttachmentStored,
  AdminUserQueryCustomizer,
  AdminCountyQueryCustomizer,
  AdminIssueDebateStored,
  AdminIssueAttachmentQueryCustomizer,
  AdminIssueAttachment,
  AdminIssue,
  AdminIssueTypeQueryCustomizer,
  AdminIssueType,
  AdminDistrict,
  AdminSelectAnswerVoteDefinition,
  AdminIssueCategoryQueryCustomizer,
  AdminCommentStored,
} from '../data-api';

/**
 * Relation Service for AdminSelectAnswerVoteDefinition.issue
 */
export interface AdminSelectAnswerVoteDefinitionServiceForIssue {
  getIssue(owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>, mask?: string): Promise<AdminIssueStored>;

  getRangeForOwner(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    queryCustomizer: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>>;

  setOwner(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<AdminUser>,
    selected: JudoIdentifiable<AdminUser>,
  ): Promise<void>;

  unsetOwner(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<AdminUser>,
  ): Promise<void>;

  getRangeForCategories(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    queryCustomizer: AdminIssueCategoryQueryCustomizer,
  ): Promise<Array<AdminIssueCategoryStored>>;

  setCategories(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<AdminIssueCategory>,
    selected: Array<JudoIdentifiable<AdminIssueCategory>>,
  ): Promise<void>;

  addIssueCategories(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<AdminIssueCategory>,
    selected: Array<JudoIdentifiable<AdminIssueCategory>>,
  ): Promise<void>;

  removeIssueCategories(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<AdminIssueCategory>,
    selected: Array<JudoIdentifiable<AdminIssueCategory>>,
  ): Promise<void>;

  getRangeForIssueType(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    queryCustomizer: AdminIssueTypeQueryCustomizer,
  ): Promise<Array<AdminIssueTypeStored>>;

  setIssueType(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<AdminIssueType>,
    selected: JudoIdentifiable<AdminIssueType>,
  ): Promise<void>;

  unsetIssueType(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<AdminIssueType>,
  ): Promise<void>;

  getRangeForCounty(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    queryCustomizer: AdminCountyQueryCustomizer,
  ): Promise<Array<AdminCountyStored>>;

  setCounty(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<AdminCounty>,
    selected: JudoIdentifiable<AdminCounty>,
  ): Promise<void>;

  unsetCounty(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<AdminCounty>,
  ): Promise<void>;

  getRangeForCity(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    queryCustomizer: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>>;

  setCity(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<AdminCity>,
    selected: JudoIdentifiable<AdminCity>,
  ): Promise<void>;

  unsetCity(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<AdminCity>,
  ): Promise<void>;

  getRangeForDistrict(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    queryCustomizer: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>>;

  setDistrict(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<AdminDistrict>,
    selected: JudoIdentifiable<AdminDistrict>,
  ): Promise<void>;

  unsetDistrict(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<AdminDistrict>,
  ): Promise<void>;
}
