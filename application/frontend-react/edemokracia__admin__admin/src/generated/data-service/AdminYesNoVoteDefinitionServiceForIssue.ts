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
  AdminYesNoVoteDefinition,
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
  AdminIssueCategoryQueryCustomizer,
  AdminCommentStored,
} from '../data-api';

/**
 * Relation Service for AdminYesNoVoteDefinition.issue
 */
export interface AdminYesNoVoteDefinitionServiceForIssue {
  getIssue(owner: JudoIdentifiable<AdminYesNoVoteDefinition>, mask?: string): Promise<AdminIssueStored>;

  getRangeForOwner(
    owner: JudoIdentifiable<AdminYesNoVoteDefinition>,
    queryCustomizer: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>>;

  setOwner(
    owner: JudoIdentifiable<AdminYesNoVoteDefinition>,
    target: JudoIdentifiable<AdminUser>,
    selected: JudoIdentifiable<AdminUser>,
  ): Promise<void>;

  unsetOwner(owner: JudoIdentifiable<AdminYesNoVoteDefinition>, target: JudoIdentifiable<AdminUser>): Promise<void>;

  getRangeForCategories(
    owner: JudoIdentifiable<AdminYesNoVoteDefinition>,
    queryCustomizer: AdminIssueCategoryQueryCustomizer,
  ): Promise<Array<AdminIssueCategoryStored>>;

  setCategories(
    owner: JudoIdentifiable<AdminYesNoVoteDefinition>,
    target: JudoIdentifiable<AdminIssueCategory>,
    selected: Array<JudoIdentifiable<AdminIssueCategory>>,
  ): Promise<void>;

  addIssueCategories(
    owner: JudoIdentifiable<AdminYesNoVoteDefinition>,
    target: JudoIdentifiable<AdminIssueCategory>,
    selected: Array<JudoIdentifiable<AdminIssueCategory>>,
  ): Promise<void>;

  removeIssueCategories(
    owner: JudoIdentifiable<AdminYesNoVoteDefinition>,
    target: JudoIdentifiable<AdminIssueCategory>,
    selected: Array<JudoIdentifiable<AdminIssueCategory>>,
  ): Promise<void>;

  getRangeForIssueType(
    owner: JudoIdentifiable<AdminYesNoVoteDefinition>,
    queryCustomizer: AdminIssueTypeQueryCustomizer,
  ): Promise<Array<AdminIssueTypeStored>>;

  setIssueType(
    owner: JudoIdentifiable<AdminYesNoVoteDefinition>,
    target: JudoIdentifiable<AdminIssueType>,
    selected: JudoIdentifiable<AdminIssueType>,
  ): Promise<void>;

  unsetIssueType(
    owner: JudoIdentifiable<AdminYesNoVoteDefinition>,
    target: JudoIdentifiable<AdminIssueType>,
  ): Promise<void>;

  getRangeForCounty(
    owner: JudoIdentifiable<AdminYesNoVoteDefinition>,
    queryCustomizer: AdminCountyQueryCustomizer,
  ): Promise<Array<AdminCountyStored>>;

  setCounty(
    owner: JudoIdentifiable<AdminYesNoVoteDefinition>,
    target: JudoIdentifiable<AdminCounty>,
    selected: JudoIdentifiable<AdminCounty>,
  ): Promise<void>;

  unsetCounty(owner: JudoIdentifiable<AdminYesNoVoteDefinition>, target: JudoIdentifiable<AdminCounty>): Promise<void>;

  getRangeForCity(
    owner: JudoIdentifiable<AdminYesNoVoteDefinition>,
    queryCustomizer: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>>;

  setCity(
    owner: JudoIdentifiable<AdminYesNoVoteDefinition>,
    target: JudoIdentifiable<AdminCity>,
    selected: JudoIdentifiable<AdminCity>,
  ): Promise<void>;

  unsetCity(owner: JudoIdentifiable<AdminYesNoVoteDefinition>, target: JudoIdentifiable<AdminCity>): Promise<void>;

  getRangeForDistrict(
    owner: JudoIdentifiable<AdminYesNoVoteDefinition>,
    queryCustomizer: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>>;

  setDistrict(
    owner: JudoIdentifiable<AdminYesNoVoteDefinition>,
    target: JudoIdentifiable<AdminDistrict>,
    selected: JudoIdentifiable<AdminDistrict>,
  ): Promise<void>;

  unsetDistrict(
    owner: JudoIdentifiable<AdminYesNoVoteDefinition>,
    target: JudoIdentifiable<AdminDistrict>,
  ): Promise<void>;
}
