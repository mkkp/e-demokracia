//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  CloseDebateInput,
  CloseDebateInputStored,
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceStored,
  CreateArgumentInput,
  CreateArgumentInputStored,
  CreateCommentInput,
  CreateCommentInputStored,
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceComment,
  ServiceCommentQueryCustomizer,
  ServiceCommentStored,
  ServiceCon,
  ServiceConQueryCustomizer,
  ServiceConStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssue,
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  ServicePro,
  ServiceProQueryCustomizer,
  ServiceProStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceUserIssues,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceUserIssues.activeIssuesInResidentCity
 */
export interface ServiceUserIssuesServiceForActiveIssuesInResidentCity {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;
  refresh(owner?: JudoIdentifiable<any>, queryCustomizer?: ServiceIssueQueryCustomizer): Promise<ServiceIssueStored>;
  update(target: Partial<ServiceIssueStored>): Promise<ServiceIssueStored>;
  validateUpdate(
    owner: JudoIdentifiable<ServiceUserIssues>,
    target: Partial<ServiceIssueStored>,
  ): Promise<ServiceIssueStored>;
  listAttachments(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueAttachmentQueryCustomizer,
  ): Promise<Array<ServiceIssueAttachmentStored>>;
  getTemplateForAttachments(): Promise<ServiceIssueAttachment>;
  createAttachments(
    owner: JudoIdentifiable<ServiceIssue>,
    target: ServiceIssueAttachment,
  ): Promise<ServiceIssueAttachmentStored>;
  deleteAttachments(target: JudoIdentifiable<ServiceIssueAttachment>): Promise<void>;
  updateAttachments(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceIssueAttachmentStored>,
  ): Promise<ServiceIssueAttachmentStored>;
  validateUpdateAttachments(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceIssueAttachmentStored>,
  ): Promise<ServiceIssueAttachmentStored>;
  listCategories(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>>;
  getRangeForCategories(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>>;
  getTemplateForCategories(): Promise<ServiceIssueCategory>;
  validateUpdateCategories(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceIssueCategoryStored>,
  ): Promise<ServiceIssueCategoryStored>;
  setCategories(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void>;
  addCategories(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void>;
  removeCategories(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void>;
  getCity(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<ServiceCityStored>;
  getRangeForCity(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;
  getTemplateForCity(): Promise<ServiceCity>;
  validateUpdateCity(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceCityStored>,
  ): Promise<ServiceCityStored>;
  setCity(owner: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceCity>): Promise<void>;
  unsetCity(owner: JudoIdentifiable<ServiceIssue>, target: JudoIdentifiable<ServiceCity>): Promise<void>;
  listComments(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceCommentQueryCustomizer,
  ): Promise<Array<ServiceCommentStored>>;
  validateUpdateComments(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceCommentStored>,
  ): Promise<ServiceCommentStored>;
  voteDownForComments(owner: JudoIdentifiable<ServiceComment>): Promise<void>;
  voteUpForComments(owner: JudoIdentifiable<ServiceComment>): Promise<void>;
  listCons(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceConQueryCustomizer,
  ): Promise<Array<ServiceConStored>>;
  deleteCons(target: JudoIdentifiable<ServiceCon>): Promise<void>;
  updateCons(owner: JudoIdentifiable<ServiceIssue>, target: Partial<ServiceConStored>): Promise<ServiceConStored>;
  validateUpdateCons(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceConStored>,
  ): Promise<ServiceConStored>;
  createConArgumentForCons(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgumentForCons(): Promise<CreateArgumentInput>;
  createProArgumentForCons(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgumentForCons(): Promise<CreateArgumentInput>;
  voteDownForCons(owner: JudoIdentifiable<ServiceCon>): Promise<void>;
  voteUpForCons(owner: JudoIdentifiable<ServiceCon>): Promise<void>;
  getCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<ServiceCountyStored>;
  getRangeForCounty(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;
  getTemplateForCounty(): Promise<ServiceCounty>;
  validateUpdateCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceCountyStored>,
  ): Promise<ServiceCountyStored>;
  setCounty(owner: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceCounty>): Promise<void>;
  unsetCounty(owner: JudoIdentifiable<ServiceIssue>, target: JudoIdentifiable<ServiceCounty>): Promise<void>;
  getCreatedBy(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;
  validateUpdateCreatedBy(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceServiceUserStored>,
  ): Promise<ServiceServiceUserStored>;
  getDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored>;
  getRangeForDistrict(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
  getTemplateForDistrict(): Promise<ServiceDistrict>;
  validateUpdateDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceDistrictStored>,
  ): Promise<ServiceDistrictStored>;
  setDistrict(owner: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceDistrict>): Promise<void>;
  unsetDistrict(owner: JudoIdentifiable<ServiceIssue>, target: JudoIdentifiable<ServiceDistrict>): Promise<void>;
  getIssueType(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
  ): Promise<ServiceIssueTypeStored>;
  getRangeForIssueType(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer: ServiceIssueTypeQueryCustomizer,
  ): Promise<Array<ServiceIssueTypeStored>>;
  getTemplateForIssueType(): Promise<ServiceIssueType>;
  validateUpdateIssueType(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceIssueTypeStored>,
  ): Promise<ServiceIssueTypeStored>;
  setIssueType(owner: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceIssueType>): Promise<void>;
  unsetIssueType(owner: JudoIdentifiable<ServiceIssue>, target: JudoIdentifiable<ServiceIssueType>): Promise<void>;
  getOwner(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;
  getRangeForOwner(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;
  validateUpdateOwner(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceServiceUserStored>,
  ): Promise<ServiceServiceUserStored>;
  setOwner(owner: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceServiceUser>): Promise<void>;
  unsetOwner(owner: JudoIdentifiable<ServiceIssue>, target: JudoIdentifiable<ServiceServiceUser>): Promise<void>;
  listPros(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceProQueryCustomizer,
  ): Promise<Array<ServiceProStored>>;
  deletePros(target: JudoIdentifiable<ServicePro>): Promise<void>;
  updatePros(owner: JudoIdentifiable<ServiceIssue>, target: Partial<ServiceProStored>): Promise<ServiceProStored>;
  validateUpdatePros(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceProStored>,
  ): Promise<ServiceProStored>;
  createConArgumentForPros(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgumentForPros(): Promise<CreateArgumentInput>;
  createProArgumentForPros(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgumentForPros(): Promise<CreateArgumentInput>;
  voteDownForPros(owner: JudoIdentifiable<ServicePro>): Promise<void>;
  voteUpForPros(owner: JudoIdentifiable<ServicePro>): Promise<void>;
  activate(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavorites(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  closeDebate(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebate(): Promise<CloseDebateInput>;
  closeVote(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  createComment(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void>;
  getTemplateOnCreateComment(): Promise<CreateCommentInput>;
  createConArgument(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgument(): Promise<CreateArgumentInput>;
  createProArgument(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgument(): Promise<CreateArgumentInput>;
  deleteOrArchive(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavorites(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
}
