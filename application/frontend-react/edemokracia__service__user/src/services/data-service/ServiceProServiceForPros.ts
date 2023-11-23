//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceProParentQueryCustomizer,
  ServiceConParent,
  ServiceConParentQueryCustomizer,
  ServiceSimpleVote,
  CreateArgumentInputStored,
  ServiceConParentStored,
  ServiceServiceUserStored,
  ServiceConStored,
  ServiceCon,
  ServiceSimpleVoteStored,
  ServiceServiceUser,
  ServiceProQueryCustomizer,
  ServiceProParentStored,
  ServiceConQueryCustomizer,
  ServiceProStored,
  CreateArgumentInput,
  ServiceProParent,
  ServicePro,
  ServiceServiceUserQueryCustomizer,
  ServiceSimpleVoteQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServicePro.pros
 */
export interface ServiceProServiceForPros {
  list(owner?: JudoIdentifiable<any>, queryCustomizer?: ServiceProQueryCustomizer): Promise<Array<ServiceProStored>>;

  refresh(owner?: JudoIdentifiable<any>, queryCustomizer?: ServiceProQueryCustomizer): Promise<ServiceProStored>;

  delete(target: JudoIdentifiable<ServicePro>): Promise<void>;

  update(target: Partial<ServiceProStored>): Promise<ServiceProStored>;

  listVotes(
    owner: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
  ): Promise<Array<ServiceSimpleVoteStored>>;

  getCreatedBy(
    owner: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;

  listPros(
    owner: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceProQueryCustomizer,
  ): Promise<Array<ServiceProStored>>;

  deletePros(target: JudoIdentifiable<ServicePro>): Promise<void>;

  updatePros(owner: JudoIdentifiable<ServicePro>, target: Partial<ServiceProStored>): Promise<ServiceProStored>;

  createProArgumentForPros(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateProArgumentForPros(): Promise<CreateArgumentInput>;

  createConArgumentForPros(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateConArgumentForPros(): Promise<CreateArgumentInput>;

  voteUpForPros(owner: JudoIdentifiable<ServicePro>): Promise<void>;

  voteDownForPros(owner: JudoIdentifiable<ServicePro>): Promise<void>;

  listCons(
    owner: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceConQueryCustomizer,
  ): Promise<Array<ServiceConStored>>;

  deleteCons(target: JudoIdentifiable<ServiceCon>): Promise<void>;

  updateCons(owner: JudoIdentifiable<ServicePro>, target: Partial<ServiceConStored>): Promise<ServiceConStored>;

  createProArgumentForCons(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateProArgumentForCons(): Promise<CreateArgumentInput>;

  createConArgumentForCons(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateConArgumentForCons(): Promise<CreateArgumentInput>;

  voteDownForCons(owner: JudoIdentifiable<ServiceCon>): Promise<void>;

  voteUpForCons(owner: JudoIdentifiable<ServiceCon>): Promise<void>;

  getParentPro(
    owner: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceProParentQueryCustomizer,
  ): Promise<ServiceProParentStored>;

  getParentCon(
    owner: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceConParentQueryCustomizer,
  ): Promise<ServiceConParentStored>;

  createProArgument(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateProArgument(): Promise<CreateArgumentInput>;

  createConArgument(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateConArgument(): Promise<CreateArgumentInput>;

  voteUp(owner: JudoIdentifiable<ServicePro>): Promise<void>;

  voteDown(owner: JudoIdentifiable<ServicePro>): Promise<void>;
}
