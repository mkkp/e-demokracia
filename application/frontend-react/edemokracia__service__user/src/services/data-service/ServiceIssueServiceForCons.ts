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
  ServiceIssue,
  ServiceSimpleVoteStored,
  ServiceServiceUser,
  ServiceProQueryCustomizer,
  ServiceProParentStored,
  ServiceConQueryCustomizer,
  CreateArgumentInput,
  ServiceProStored,
  ServiceProParent,
  ServiceServiceUserQueryCustomizer,
  ServicePro,
  ServiceSimpleVoteQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServiceIssue.cons
 */
export interface ServiceIssueServiceForCons {
  list(owner?: JudoIdentifiable<any>, queryCustomizer?: ServiceConQueryCustomizer): Promise<Array<ServiceConStored>>;

  refresh(owner?: JudoIdentifiable<any>, queryCustomizer?: ServiceConQueryCustomizer): Promise<ServiceConStored>;

  delete(target: JudoIdentifiable<ServiceCon>): Promise<void>;

  update(target: Partial<ServiceConStored>): Promise<ServiceConStored>;

  listVotes(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
  ): Promise<Array<ServiceSimpleVoteStored>>;

  getCreatedBy(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;

  listCons(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceConQueryCustomizer,
  ): Promise<Array<ServiceConStored>>;

  deleteCons(target: JudoIdentifiable<ServiceCon>): Promise<void>;

  updateCons(owner: JudoIdentifiable<ServiceCon>, target: Partial<ServiceConStored>): Promise<ServiceConStored>;

  voteUpForCons(owner: JudoIdentifiable<ServiceCon>): Promise<void>;

  createConArgumentForCons(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateConArgumentForCons(): Promise<CreateArgumentInput>;

  createProArgumentForCons(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateProArgumentForCons(): Promise<CreateArgumentInput>;

  voteDownForCons(owner: JudoIdentifiable<ServiceCon>): Promise<void>;

  listPros(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceProQueryCustomizer,
  ): Promise<Array<ServiceProStored>>;

  deletePros(target: JudoIdentifiable<ServicePro>): Promise<void>;

  updatePros(owner: JudoIdentifiable<ServiceCon>, target: Partial<ServiceProStored>): Promise<ServiceProStored>;

  createProArgumentForPros(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateProArgumentForPros(): Promise<CreateArgumentInput>;

  createConArgumentForPros(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateConArgumentForPros(): Promise<CreateArgumentInput>;

  voteUpForPros(owner: JudoIdentifiable<ServicePro>): Promise<void>;

  voteDownForPros(owner: JudoIdentifiable<ServicePro>): Promise<void>;

  getParentCon(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceConParentQueryCustomizer,
  ): Promise<ServiceConParentStored>;

  getParentPro(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceProParentQueryCustomizer,
  ): Promise<ServiceProParentStored>;

  voteUp(owner: JudoIdentifiable<ServiceCon>): Promise<void>;

  createConArgument(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateConArgument(): Promise<CreateArgumentInput>;

  createProArgument(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateProArgument(): Promise<CreateArgumentInput>;

  voteDown(owner: JudoIdentifiable<ServiceCon>): Promise<void>;
}
