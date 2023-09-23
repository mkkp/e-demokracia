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
  AdminYesNoAbstainVoteDefinition,
  AdminIssueAttachment,
  AdminIssue,
  AdminIssueTypeQueryCustomizer,
  AdminIssueType,
  AdminDistrict,
  AdminIssueCategoryQueryCustomizer,
  AdminCommentStored,
} from '../data-api';

/**
 * Relation Service for AdminYesNoAbstainVoteDefinition.issue
 */
export interface AdminYesNoAbstainVoteDefinitionServiceForIssue {
  getIssue(owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>, mask?: string): Promise<AdminIssueStored>;

  getRangeForOwner(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    queryCustomizer: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>>;

  setOwner(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<AdminUser>,
    selected: JudoIdentifiable<AdminUser>,
  ): Promise<void>;

  unsetOwner(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<AdminUser>,
  ): Promise<void>;

  getRangeForCategories(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    queryCustomizer: AdminIssueCategoryQueryCustomizer,
  ): Promise<Array<AdminIssueCategoryStored>>;

  setCategories(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<AdminIssueCategory>,
    selected: Array<JudoIdentifiable<AdminIssueCategory>>,
  ): Promise<void>;

  addIssueCategories(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<AdminIssueCategory>,
    selected: Array<JudoIdentifiable<AdminIssueCategory>>,
  ): Promise<void>;

  removeIssueCategories(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<AdminIssueCategory>,
    selected: Array<JudoIdentifiable<AdminIssueCategory>>,
  ): Promise<void>;

  getRangeForIssueType(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    queryCustomizer: AdminIssueTypeQueryCustomizer,
  ): Promise<Array<AdminIssueTypeStored>>;

  setIssueType(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<AdminIssueType>,
    selected: JudoIdentifiable<AdminIssueType>,
  ): Promise<void>;

  unsetIssueType(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<AdminIssueType>,
  ): Promise<void>;

  getRangeForCounty(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    queryCustomizer: AdminCountyQueryCustomizer,
  ): Promise<Array<AdminCountyStored>>;

  setCounty(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<AdminCounty>,
    selected: JudoIdentifiable<AdminCounty>,
  ): Promise<void>;

  unsetCounty(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<AdminCounty>,
  ): Promise<void>;

  getRangeForCity(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    queryCustomizer: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>>;

  setCity(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<AdminCity>,
    selected: JudoIdentifiable<AdminCity>,
  ): Promise<void>;

  unsetCity(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<AdminCity>,
  ): Promise<void>;

  getRangeForDistrict(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    queryCustomizer: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>>;

  setDistrict(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<AdminDistrict>,
    selected: JudoIdentifiable<AdminDistrict>,
  ): Promise<void>;

  unsetDistrict(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<AdminDistrict>,
  ): Promise<void>;
}
