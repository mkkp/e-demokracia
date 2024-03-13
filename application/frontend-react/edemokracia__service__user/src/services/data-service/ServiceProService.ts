//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import {
  CreateArgumentInput,
  JudoRestResponse,
  ServiceCon,
  ServiceConParent,
  ServiceConParentQueryCustomizer,
  ServiceConParentStored,
  ServiceConQueryCustomizer,
  ServiceConStored,
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
 * Class Service for ServicePro
 */
export interface ServiceProService {
  refresh(
    target: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceProQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceProStored>>;
  delete(target: JudoIdentifiable<ServicePro>): Promise<JudoRestResponse<void>>;
  update(
    target: Partial<ServiceProStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceProStored>>;
  validateUpdate(
    target: Partial<ServiceProStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceProStored>>;
  listCons(
    target: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceConQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceConStored>>>;
  getRangeForCons(
    owner?: JudoIdentifiable<ServicePro> | ServicePro,
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
  getCreatedBy(
    target: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  getRangeForCreatedBy(
    owner?: JudoIdentifiable<ServicePro> | ServicePro,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>>;
  getParentCon(
    target: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceConParentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceConParentStored>>;
  getRangeForParentCon(
    owner?: JudoIdentifiable<ServicePro> | ServicePro,
    queryCustomizer?: ServiceConParentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceConParentStored>>>;
  getParentPro(
    target: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceProParentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceProParentStored>>;
  getRangeForParentPro(
    owner?: JudoIdentifiable<ServicePro> | ServicePro,
    queryCustomizer?: ServiceProParentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceProParentStored>>>;
  listPros(
    target: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceProQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceProStored>>>;
  getRangeForPros(
    owner?: JudoIdentifiable<ServicePro> | ServicePro,
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
  listVotes(
    target: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceSimpleVoteStored>>>;
  getRangeForVotes(
    owner?: JudoIdentifiable<ServicePro> | ServicePro,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceSimpleVoteStored>>>;
  createConArgument(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateConArgument(): Promise<JudoRestResponse<CreateArgumentInput>>;
  createProArgument(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateProArgument(): Promise<JudoRestResponse<CreateArgumentInput>>;
  voteDown(owner: JudoIdentifiable<ServicePro>): Promise<JudoRestResponse<void>>;
  voteUp(owner: JudoIdentifiable<ServicePro>): Promise<JudoRestResponse<void>>;
}
