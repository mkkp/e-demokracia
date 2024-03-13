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
  JudoRestResponse,
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
  ServiceYesNoAbstainVoteDefinition,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceYesNoAbstainVoteDefinition.issue
 */
export interface ServiceYesNoAbstainVoteDefinitionServiceForIssue {
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueStored>>;
  listAttachments(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueAttachmentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueAttachmentStored>>>;
  getTemplateForAttachments(): Promise<JudoRestResponse<ServiceIssueAttachment>>;
  createAttachments(
    owner: JudoIdentifiable<ServiceIssue>,
    target: ServiceIssueAttachment,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueAttachmentStored>>;
  deleteAttachments(target: JudoIdentifiable<ServiceIssueAttachment>): Promise<JudoRestResponse<void>>;
  updateAttachments(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceIssueAttachmentStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueAttachmentStored>>;
  listCategories(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueCategoryStored>>>;
  getRangeForCategories(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer: ServiceIssueCategoryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueCategoryStored>>>;
  getTemplateForCategories(): Promise<JudoRestResponse<ServiceIssueCategory>>;
  setCategories(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<JudoRestResponse<void>>;
  addCategories(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<JudoRestResponse<void>>;
  removeCategories(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<JudoRestResponse<void>>;
  getCity(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
  getRangeForCity(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>>;
  getTemplateForCity(): Promise<JudoRestResponse<ServiceCity>>;
  setCity(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: JudoIdentifiable<ServiceCity>,
  ): Promise<JudoRestResponse<void>>;
  unsetCity(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceCity>,
  ): Promise<JudoRestResponse<void>>;
  listComments(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceCommentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCommentStored>>>;
  voteDownForComments(owner: JudoIdentifiable<ServiceComment>): Promise<JudoRestResponse<void>>;
  voteUpForComments(owner: JudoIdentifiable<ServiceComment>): Promise<JudoRestResponse<void>>;
  listCons(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceConQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceConStored>>>;
  deleteCons(target: JudoIdentifiable<ServiceCon>): Promise<JudoRestResponse<void>>;
  updateCons(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceConStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceConStored>>;
  createConArgumentForCons(
    owner: JudoIdentifiable<ServiceCon>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateConArgumentForCons(): Promise<JudoRestResponse<CreateArgumentInput>>;
  createProArgumentForCons(
    owner: JudoIdentifiable<ServiceCon>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateProArgumentForCons(): Promise<JudoRestResponse<CreateArgumentInput>>;
  voteDownForCons(owner: JudoIdentifiable<ServiceCon>): Promise<JudoRestResponse<void>>;
  voteUpForCons(owner: JudoIdentifiable<ServiceCon>): Promise<JudoRestResponse<void>>;
  getCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceCountyStored>>;
  getRangeForCounty(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCountyStored>>>;
  getTemplateForCounty(): Promise<JudoRestResponse<ServiceCounty>>;
  setCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<JudoRestResponse<void>>;
  unsetCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceCounty>,
  ): Promise<JudoRestResponse<void>>;
  getCreatedBy(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  getDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
  getRangeForDistrict(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>>;
  getTemplateForDistrict(): Promise<JudoRestResponse<ServiceDistrict>>;
  setDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<JudoRestResponse<void>>;
  unsetDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceDistrict>,
  ): Promise<JudoRestResponse<void>>;
  getIssueType(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueTypeStored>>;
  getRangeForIssueType(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer: ServiceIssueTypeQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueTypeStored>>>;
  getTemplateForIssueType(): Promise<JudoRestResponse<ServiceIssueType>>;
  setIssueType(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: JudoIdentifiable<ServiceIssueType>,
  ): Promise<JudoRestResponse<void>>;
  unsetIssueType(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceIssueType>,
  ): Promise<JudoRestResponse<void>>;
  getOwner(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  getRangeForOwner(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>>;
  setOwner(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>>;
  unsetOwner(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>>;
  listPros(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceProQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceProStored>>>;
  deletePros(target: JudoIdentifiable<ServicePro>): Promise<JudoRestResponse<void>>;
  updatePros(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceProStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceProStored>>;
  createConArgumentForPros(
    owner: JudoIdentifiable<ServicePro>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateConArgumentForPros(): Promise<JudoRestResponse<CreateArgumentInput>>;
  createProArgumentForPros(
    owner: JudoIdentifiable<ServicePro>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateProArgumentForPros(): Promise<JudoRestResponse<CreateArgumentInput>>;
  voteDownForPros(owner: JudoIdentifiable<ServicePro>): Promise<JudoRestResponse<void>>;
  voteUpForPros(owner: JudoIdentifiable<ServicePro>): Promise<JudoRestResponse<void>>;
  activate(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  addToFavorites(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  closeDebate(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<JudoRestResponse<CloseDebateOutputVoteDefinitionReferenceStored>>;
  getTemplateOnCloseDebate(): Promise<JudoRestResponse<CloseDebateInput>>;
  closeVote(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  createComment(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateComment(): Promise<JudoRestResponse<CreateCommentInput>>;
  createConArgument(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateConArgument(): Promise<JudoRestResponse<CreateArgumentInput>>;
  createProArgument(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateProArgument(): Promise<JudoRestResponse<CreateArgumentInput>>;
  deleteOrArchive(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  removeFromFavorites(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
}
