//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceDistrictQueryCustomizer,
  ServiceCommentQueryCustomizer,
  CloseDebateOutputVoteDefinitionReferenceStored,
  ServiceIssueQueryCustomizer,
  ServiceIssueCategoryQueryCustomizer,
  CreateArgumentInputStored,
  ServiceIssueStored,
  ServiceConStored,
  ServiceIssue,
  ServiceServiceUser,
  ServiceCity,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueCategory,
  CreateCommentInput,
  ServiceCountyStored,
  ServiceConQueryCustomizer,
  ServiceCounty,
  CreateArgumentInput,
  ServiceProStored,
  ServicePro,
  CloseDebateInput,
  ServiceIssueType,
  ServiceComment,
  ServiceIssueAttachment,
  ServiceDistrict,
  CloseDebateOutputVoteDefinitionReference,
  ServiceCountyQueryCustomizer,
  ServiceServiceUserStored,
  ServiceCommentStored,
  ServiceIssueCategoryStored,
  ServiceCon,
  ServiceYesNoVoteDefinition,
  CreateCommentInputStored,
  ServiceProQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceServiceUserQueryCustomizer,
  ServiceCityStored,
  CloseDebateInputStored,
  ServiceIssueAttachmentStored,
  ServiceIssueTypeStored,
  ServiceCityQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServiceYesNoVoteDefinition.issue
 */
export interface ServiceYesNoVoteDefinitionServiceForIssue {
  refresh(owner?: JudoIdentifiable<any>, queryCustomizer?: ServiceIssueQueryCustomizer): Promise<ServiceIssueStored>;
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
  getOwner(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;
  getRangeForOwner(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;
  setOwner(owner: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceServiceUser>): Promise<void>;
  unsetOwner(owner: JudoIdentifiable<ServiceIssue>, target: JudoIdentifiable<ServiceServiceUser>): Promise<void>;
  listCategories(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>>;
  getRangeForCategories(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>>;
  getTemplateForCategories(): Promise<ServiceIssueCategory>;
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
  listComments(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceCommentQueryCustomizer,
  ): Promise<Array<ServiceCommentStored>>;
  voteUpForComments(owner: JudoIdentifiable<ServiceComment>): Promise<void>;
  voteDownForComments(owner: JudoIdentifiable<ServiceComment>): Promise<void>;
  getCreatedBy(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;
  getIssueType(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
  ): Promise<ServiceIssueTypeStored>;
  getRangeForIssueType(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer: ServiceIssueTypeQueryCustomizer,
  ): Promise<Array<ServiceIssueTypeStored>>;
  getTemplateForIssueType(): Promise<ServiceIssueType>;
  setIssueType(owner: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceIssueType>): Promise<void>;
  unsetIssueType(owner: JudoIdentifiable<ServiceIssue>, target: JudoIdentifiable<ServiceIssueType>): Promise<void>;
  getCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<ServiceCountyStored>;
  getRangeForCounty(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;
  getTemplateForCounty(): Promise<ServiceCounty>;
  setCounty(owner: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceCounty>): Promise<void>;
  unsetCounty(owner: JudoIdentifiable<ServiceIssue>, target: JudoIdentifiable<ServiceCounty>): Promise<void>;
  getCity(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<ServiceCityStored>;
  getRangeForCity(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;
  getTemplateForCity(): Promise<ServiceCity>;
  setCity(owner: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceCity>): Promise<void>;
  unsetCity(owner: JudoIdentifiable<ServiceIssue>, target: JudoIdentifiable<ServiceCity>): Promise<void>;
  getDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored>;
  getRangeForDistrict(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
  getTemplateForDistrict(): Promise<ServiceDistrict>;
  setDistrict(owner: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceDistrict>): Promise<void>;
  unsetDistrict(owner: JudoIdentifiable<ServiceIssue>, target: JudoIdentifiable<ServiceDistrict>): Promise<void>;
  listCons(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceConQueryCustomizer,
  ): Promise<Array<ServiceConStored>>;
  deleteCons(target: JudoIdentifiable<ServiceCon>): Promise<void>;
  updateCons(owner: JudoIdentifiable<ServiceIssue>, target: Partial<ServiceConStored>): Promise<ServiceConStored>;
  createConArgumentForCons(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgumentForCons(): Promise<CreateArgumentInput>;
  createProArgumentForCons(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgumentForCons(): Promise<CreateArgumentInput>;
  voteUpForCons(owner: JudoIdentifiable<ServiceCon>): Promise<void>;
  voteDownForCons(owner: JudoIdentifiable<ServiceCon>): Promise<void>;
  listPros(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceProQueryCustomizer,
  ): Promise<Array<ServiceProStored>>;
  deletePros(target: JudoIdentifiable<ServicePro>): Promise<void>;
  updatePros(owner: JudoIdentifiable<ServiceIssue>, target: Partial<ServiceProStored>): Promise<ServiceProStored>;
  createProArgumentForPros(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgumentForPros(): Promise<CreateArgumentInput>;
  createConArgumentForPros(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgumentForPros(): Promise<CreateArgumentInput>;
  voteUpForPros(owner: JudoIdentifiable<ServicePro>): Promise<void>;
  voteDownForPros(owner: JudoIdentifiable<ServicePro>): Promise<void>;
  createConArgument(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgument(): Promise<CreateArgumentInput>;
  createProArgument(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgument(): Promise<CreateArgumentInput>;
  closeDebate(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebate(): Promise<CloseDebateInput>;
  deleteOrArchive(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavorites(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  createComment(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void>;
  getTemplateOnCreateComment(): Promise<CreateCommentInput>;
  closeVote(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  activate(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavorites(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
}
