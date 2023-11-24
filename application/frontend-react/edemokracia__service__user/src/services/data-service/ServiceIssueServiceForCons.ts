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
  createProArgumentForCons(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgumentForCons(): Promise<CreateArgumentInput>;
  createConArgumentForCons(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgumentForCons(): Promise<CreateArgumentInput>;
  voteDownForCons(owner: JudoIdentifiable<ServiceCon>): Promise<void>;
  voteUpForCons(owner: JudoIdentifiable<ServiceCon>): Promise<void>;
  listPros(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceProQueryCustomizer,
  ): Promise<Array<ServiceProStored>>;
  deletePros(target: JudoIdentifiable<ServicePro>): Promise<void>;
  updatePros(owner: JudoIdentifiable<ServiceCon>, target: Partial<ServiceProStored>): Promise<ServiceProStored>;
  createConArgumentForPros(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgumentForPros(): Promise<CreateArgumentInput>;
  createProArgumentForPros(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgumentForPros(): Promise<CreateArgumentInput>;
  voteDownForPros(owner: JudoIdentifiable<ServicePro>): Promise<void>;
  voteUpForPros(owner: JudoIdentifiable<ServicePro>): Promise<void>;
  getParentCon(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceConParentQueryCustomizer,
  ): Promise<ServiceConParentStored>;
  getParentPro(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceProParentQueryCustomizer,
  ): Promise<ServiceProParentStored>;
  createProArgument(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgument(): Promise<CreateArgumentInput>;
  createConArgument(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgument(): Promise<CreateArgumentInput>;
  voteDown(owner: JudoIdentifiable<ServiceCon>): Promise<void>;
  voteUp(owner: JudoIdentifiable<ServiceCon>): Promise<void>;
}
