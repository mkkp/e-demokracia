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
  AdminRatingVoteDefinition,
  AdminIssueAttachment,
  AdminIssue,
  AdminIssueTypeQueryCustomizer,
  AdminIssueType,
  AdminDistrict,
  AdminIssueCategoryQueryCustomizer,
  AdminCommentStored,
} from '../data-api';

/**
 * Relation Service for AdminRatingVoteDefinition.issue
 */
export interface AdminRatingVoteDefinitionServiceForIssue {
  getIssue(owner: JudoIdentifiable<AdminRatingVoteDefinition>, mask?: string): Promise<AdminIssueStored>;

  getRangeForOwner(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    queryCustomizer: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>>;

  setOwner(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    target: JudoIdentifiable<AdminUser>,
    selected: JudoIdentifiable<AdminUser>,
  ): Promise<void>;

  unsetOwner(owner: JudoIdentifiable<AdminRatingVoteDefinition>, target: JudoIdentifiable<AdminUser>): Promise<void>;

  getRangeForCategories(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    queryCustomizer: AdminIssueCategoryQueryCustomizer,
  ): Promise<Array<AdminIssueCategoryStored>>;

  setCategories(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    target: JudoIdentifiable<AdminIssueCategory>,
    selected: Array<JudoIdentifiable<AdminIssueCategory>>,
  ): Promise<void>;

  addIssueCategories(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    target: JudoIdentifiable<AdminIssueCategory>,
    selected: Array<JudoIdentifiable<AdminIssueCategory>>,
  ): Promise<void>;

  removeIssueCategories(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    target: JudoIdentifiable<AdminIssueCategory>,
    selected: Array<JudoIdentifiable<AdminIssueCategory>>,
  ): Promise<void>;

  getRangeForIssueType(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    queryCustomizer: AdminIssueTypeQueryCustomizer,
  ): Promise<Array<AdminIssueTypeStored>>;

  setIssueType(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    target: JudoIdentifiable<AdminIssueType>,
    selected: JudoIdentifiable<AdminIssueType>,
  ): Promise<void>;

  unsetIssueType(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    target: JudoIdentifiable<AdminIssueType>,
  ): Promise<void>;

  getRangeForCounty(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    queryCustomizer: AdminCountyQueryCustomizer,
  ): Promise<Array<AdminCountyStored>>;

  setCounty(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    target: JudoIdentifiable<AdminCounty>,
    selected: JudoIdentifiable<AdminCounty>,
  ): Promise<void>;

  unsetCounty(owner: JudoIdentifiable<AdminRatingVoteDefinition>, target: JudoIdentifiable<AdminCounty>): Promise<void>;

  getRangeForCity(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    queryCustomizer: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>>;

  setCity(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    target: JudoIdentifiable<AdminCity>,
    selected: JudoIdentifiable<AdminCity>,
  ): Promise<void>;

  unsetCity(owner: JudoIdentifiable<AdminRatingVoteDefinition>, target: JudoIdentifiable<AdminCity>): Promise<void>;

  getRangeForDistrict(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    queryCustomizer: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>>;

  setDistrict(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    target: JudoIdentifiable<AdminDistrict>,
    selected: JudoIdentifiable<AdminDistrict>,
  ): Promise<void>;

  unsetDistrict(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    target: JudoIdentifiable<AdminDistrict>,
  ): Promise<void>;
}
