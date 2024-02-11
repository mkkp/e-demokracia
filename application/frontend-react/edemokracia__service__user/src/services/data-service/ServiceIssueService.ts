//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import {
  CloseDebateInput,
  CloseDebateOutputVoteDefinitionReferenceStored,
  CreateArgumentInput,
  CreateCommentInput,
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
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceIssue
 */
export interface ServiceIssueService {
  refresh(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueStored>>;
  update(target: Partial<ServiceIssueStored>): Promise<JudoRestResponse<ServiceIssueStored>>;
  validateUpdate(target: Partial<ServiceIssueStored>): Promise<JudoRestResponse<ServiceIssueStored>>;
  getTemplateForAttachments(): Promise<JudoRestResponse<ServiceIssueAttachment>>;
  createAttachments(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceIssueAttachment>,
  ): Promise<JudoRestResponse<ServiceIssueAttachmentStored>>;
  validateCreateAttachments(
    owner: JudoIdentifiable<ServiceIssue>,
    target: ServiceIssueAttachment,
  ): Promise<JudoRestResponse<ServiceIssueAttachment>>;
  listAttachments(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueAttachmentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueAttachmentStored>>>;
  getRangeForAttachments(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceIssueAttachmentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueAttachmentStored>>>;
  deleteAttachments(target: JudoIdentifiable<ServiceIssueAttachment>): Promise<JudoRestResponse<void>>;
  getTemplateForCategories(): Promise<JudoRestResponse<ServiceIssueCategory>>;
  listCategories(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueCategoryStored>>>;
  getRangeForCategories(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueCategoryStored>>>;
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
  getTemplateForCity(): Promise<JudoRestResponse<ServiceCity>>;
  getCity(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
  getRangeForCity(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>>;
  setCity(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: JudoIdentifiable<ServiceCity>,
  ): Promise<JudoRestResponse<void>>;
  unsetCity(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  listComments(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceCommentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCommentStored>>>;
  getRangeForComments(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceCommentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCommentStored>>>;
  voteDownForComments(owner: JudoIdentifiable<ServiceComment>): Promise<JudoRestResponse<void>>;
  voteUpForComments(owner: JudoIdentifiable<ServiceComment>): Promise<JudoRestResponse<void>>;
  listCons(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceConQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceConStored>>>;
  getRangeForCons(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceConQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceConStored>>>;
  deleteCons(target: JudoIdentifiable<ServiceCon>): Promise<JudoRestResponse<void>>;
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
  getTemplateForCounty(): Promise<JudoRestResponse<ServiceCounty>>;
  getCounty(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceCountyStored>>;
  getRangeForCounty(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCountyStored>>>;
  setCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<JudoRestResponse<void>>;
  unsetCounty(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  getCreatedBy(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  getRangeForCreatedBy(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>>;
  getTemplateForDistrict(): Promise<JudoRestResponse<ServiceDistrict>>;
  getDistrict(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
  getRangeForDistrict(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>>;
  setDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<JudoRestResponse<void>>;
  unsetDistrict(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  getTemplateForIssueType(): Promise<JudoRestResponse<ServiceIssueType>>;
  getIssueType(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueTypeStored>>;
  getRangeForIssueType(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueTypeStored>>>;
  setIssueType(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: JudoIdentifiable<ServiceIssueType>,
  ): Promise<JudoRestResponse<void>>;
  unsetIssueType(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  getOwner(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  getRangeForOwner(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>>;
  setOwner(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>>;
  unsetOwner(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  listPros(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceProQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceProStored>>>;
  getRangeForPros(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceProQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceProStored>>>;
  deletePros(target: JudoIdentifiable<ServicePro>): Promise<JudoRestResponse<void>>;
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
