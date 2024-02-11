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
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceIssue.cons
 */
export interface ServiceIssueServiceForCons {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceConQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceConStored>>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceConQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceConStored>>;
  delete(target: JudoIdentifiable<ServiceCon>): Promise<JudoRestResponse<void>>;
  update(target: Partial<ServiceConStored>): Promise<JudoRestResponse<ServiceConStored>>;
  validateUpdate(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceConStored>,
  ): Promise<JudoRestResponse<ServiceConStored>>;
  listCons(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceConQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceConStored>>>;
  deleteCons(target: JudoIdentifiable<ServiceCon>): Promise<JudoRestResponse<void>>;
  updateCons(
    owner: JudoIdentifiable<ServiceCon>,
    target: Partial<ServiceConStored>,
  ): Promise<JudoRestResponse<ServiceConStored>>;
  validateUpdateCons(
    owner: JudoIdentifiable<ServiceCon>,
    target: Partial<ServiceConStored>,
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
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  validateUpdateCreatedBy(
    owner: JudoIdentifiable<ServiceCon>,
    target: Partial<ServiceServiceUserStored>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  getParentCon(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceConParentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceConParentStored>>;
  validateUpdateParentCon(
    owner: JudoIdentifiable<ServiceCon>,
    target: Partial<ServiceConParentStored>,
  ): Promise<JudoRestResponse<ServiceConParentStored>>;
  getParentPro(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceProParentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceProParentStored>>;
  validateUpdateParentPro(
    owner: JudoIdentifiable<ServiceCon>,
    target: Partial<ServiceProParentStored>,
  ): Promise<JudoRestResponse<ServiceProParentStored>>;
  listPros(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceProQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceProStored>>>;
  deletePros(target: JudoIdentifiable<ServicePro>): Promise<JudoRestResponse<void>>;
  updatePros(
    owner: JudoIdentifiable<ServiceCon>,
    target: Partial<ServiceProStored>,
  ): Promise<JudoRestResponse<ServiceProStored>>;
  validateUpdatePros(
    owner: JudoIdentifiable<ServiceCon>,
    target: Partial<ServiceProStored>,
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
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceSimpleVoteStored>>>;
  validateUpdateVotes(
    owner: JudoIdentifiable<ServiceCon>,
    target: Partial<ServiceSimpleVoteStored>,
  ): Promise<JudoRestResponse<ServiceSimpleVoteStored>>;
  createConArgument(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateConArgument(): Promise<JudoRestResponse<CreateArgumentInput>>;
  createProArgument(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateProArgument(): Promise<JudoRestResponse<CreateArgumentInput>>;
  voteDown(owner: JudoIdentifiable<ServiceCon>): Promise<JudoRestResponse<void>>;
  voteUp(owner: JudoIdentifiable<ServiceCon>): Promise<JudoRestResponse<void>>;
}
