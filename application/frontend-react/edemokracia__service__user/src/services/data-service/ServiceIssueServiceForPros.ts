//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  CreateArgumentInput,
  CreateArgumentInputStored,
  JudoRestResponse,
  ServiceCon,
  ServiceConParent,
  ServiceConParentQueryCustomizer,
  ServiceConParentStored,
  ServiceConQueryCustomizer,
  ServiceConStored,
  ServiceIssue,
  ServicePro,
  ServiceProParent,
  ServiceProParentQueryCustomizer,
  ServiceProParentStored,
  ServiceProQueryCustomizer,
  ServiceProStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceSimpleVote,
  ServiceSimpleVoteQueryCustomizer,
  ServiceSimpleVoteStored,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceIssue.pros
 */
export interface ServiceIssueServiceForPros {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceProQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceProStored>>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceProQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceProStored>>;
  delete(target: JudoIdentifiable<ServicePro>): Promise<JudoRestResponse<void>>;
  update(
    target: Partial<ServiceProStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceProStored>>;
  validateUpdate(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceProStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceProStored>>;
  listCons(
    owner: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceConQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceConStored>>>;
  deleteCons(target: JudoIdentifiable<ServiceCon>): Promise<JudoRestResponse<void>>;
  updateCons(
    owner: JudoIdentifiable<ServicePro>,
    target: Partial<ServiceConStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceConStored>>;
  validateUpdateCons(
    owner: JudoIdentifiable<ServicePro>,
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
  getCreatedBy(
    owner: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  validateUpdateCreatedBy(
    owner: JudoIdentifiable<ServicePro>,
    target: Partial<ServiceServiceUserStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  getParentCon(
    owner: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceConParentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceConParentStored>>;
  validateUpdateParentCon(
    owner: JudoIdentifiable<ServicePro>,
    target: Partial<ServiceConParentStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceConParentStored>>;
  getParentPro(
    owner: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceProParentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceProParentStored>>;
  validateUpdateParentPro(
    owner: JudoIdentifiable<ServicePro>,
    target: Partial<ServiceProParentStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceProParentStored>>;
  listPros(
    owner: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceProQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceProStored>>>;
  deletePros(target: JudoIdentifiable<ServicePro>): Promise<JudoRestResponse<void>>;
  updatePros(
    owner: JudoIdentifiable<ServicePro>,
    target: Partial<ServiceProStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceProStored>>;
  validateUpdatePros(
    owner: JudoIdentifiable<ServicePro>,
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
  listVotes(
    owner: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceSimpleVoteStored>>>;
  validateUpdateVotes(
    owner: JudoIdentifiable<ServicePro>,
    target: Partial<ServiceSimpleVoteStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceSimpleVoteStored>>;
  createConArgument(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateConArgument(): Promise<JudoRestResponse<CreateArgumentInput>>;
  createProArgument(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateProArgument(): Promise<JudoRestResponse<CreateArgumentInput>>;
  voteDown(owner: JudoIdentifiable<ServicePro>): Promise<JudoRestResponse<void>>;
  voteUp(owner: JudoIdentifiable<ServicePro>): Promise<JudoRestResponse<void>>;
}
