//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceDistrictQueryCustomizer,
  ServiceCommentQueryCustomizer,
  CloseDebateOutputVoteDefinitionReferenceStored,
  ServiceIssueQueryCustomizer,
  ServiceIssueCategoryQueryCustomizer,
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
 * Class Service for ServiceIssue
 */
export interface ServiceIssueService {
  refresh(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored>;
  delete(target: JudoIdentifiable<ServiceIssue>): Promise<void>;
  update(target: Partial<ServiceIssueStored>): Promise<ServiceIssueStored>;
  getTemplateForAttachments(): Promise<ServiceIssueAttachment>;
  createAttachments(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceIssueAttachment>,
  ): Promise<ServiceIssueAttachmentStored>;
  listAttachments(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueAttachmentQueryCustomizer,
  ): Promise<Array<ServiceIssueAttachmentStored>>;
  getRangeForAttachments(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceIssueAttachmentQueryCustomizer,
  ): Promise<Array<ServiceIssueAttachmentStored>>;
  deleteAttachments(target: JudoIdentifiable<ServiceIssueAttachment>): Promise<void>;
  getOwner(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;
  getRangeForOwner(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;
  setOwner(owner: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceServiceUser>): Promise<void>;
  unsetOwner(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  getTemplateForCategories(): Promise<ServiceIssueCategory>;
  listCategories(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>>;
  getRangeForCategories(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>>;
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
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceCommentQueryCustomizer,
  ): Promise<Array<ServiceCommentStored>>;
  getRangeForComments(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceCommentQueryCustomizer,
  ): Promise<Array<ServiceCommentStored>>;
  voteUpForComments(owner: JudoIdentifiable<ServiceComment>): Promise<void>;
  voteDownForComments(owner: JudoIdentifiable<ServiceComment>): Promise<void>;
  getCreatedBy(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;
  getRangeForCreatedBy(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;
  getTemplateForIssueType(): Promise<ServiceIssueType>;
  getIssueType(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
  ): Promise<ServiceIssueTypeStored>;
  getRangeForIssueType(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
  ): Promise<Array<ServiceIssueTypeStored>>;
  setIssueType(owner: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceIssueType>): Promise<void>;
  unsetIssueType(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  getTemplateForCounty(): Promise<ServiceCounty>;
  getCounty(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<ServiceCountyStored>;
  getRangeForCounty(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;
  setCounty(owner: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceCounty>): Promise<void>;
  unsetCounty(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  getTemplateForCity(): Promise<ServiceCity>;
  getCity(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<ServiceCityStored>;
  getRangeForCity(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;
  setCity(owner: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceCity>): Promise<void>;
  unsetCity(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  getTemplateForDistrict(): Promise<ServiceDistrict>;
  getDistrict(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored>;
  getRangeForDistrict(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
  setDistrict(owner: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceDistrict>): Promise<void>;
  unsetDistrict(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  listCons(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceConQueryCustomizer,
  ): Promise<Array<ServiceConStored>>;
  getRangeForCons(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceConQueryCustomizer,
  ): Promise<Array<ServiceConStored>>;
  deleteCons(target: JudoIdentifiable<ServiceCon>): Promise<void>;
  voteDownForCons(owner: JudoIdentifiable<ServiceCon>): Promise<void>;
  voteUpForCons(owner: JudoIdentifiable<ServiceCon>): Promise<void>;
  createProArgumentForCons(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgumentForCons(): Promise<CreateArgumentInput>;
  createConArgumentForCons(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgumentForCons(): Promise<CreateArgumentInput>;
  listPros(
    target: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceProQueryCustomizer,
  ): Promise<Array<ServiceProStored>>;
  getRangeForPros(
    owner?: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceProQueryCustomizer,
  ): Promise<Array<ServiceProStored>>;
  deletePros(target: JudoIdentifiable<ServicePro>): Promise<void>;
  createConArgumentForPros(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgumentForPros(): Promise<CreateArgumentInput>;
  createProArgumentForPros(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgumentForPros(): Promise<CreateArgumentInput>;
  voteUpForPros(owner: JudoIdentifiable<ServicePro>): Promise<void>;
  voteDownForPros(owner: JudoIdentifiable<ServicePro>): Promise<void>;
  createProArgument(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgument(): Promise<CreateArgumentInput>;
  createConArgument(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgument(): Promise<CreateArgumentInput>;
  createComment(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void>;
  getTemplateOnCreateComment(): Promise<CreateCommentInput>;
  removeFromFavorites(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  closeDebate(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebate(): Promise<CloseDebateInput>;
  closeVote(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  activate(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  deleteOrArchive(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavorites(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
}
