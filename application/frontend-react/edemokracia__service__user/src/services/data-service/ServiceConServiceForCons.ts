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
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceCon.cons
 */
export interface ServiceConServiceForCons {
  list(owner?: JudoIdentifiable<any>, queryCustomizer?: ServiceConQueryCustomizer): Promise<Array<ServiceConStored>>;
  refresh(owner?: JudoIdentifiable<any>, queryCustomizer?: ServiceConQueryCustomizer): Promise<ServiceConStored>;
  delete(target: JudoIdentifiable<ServiceCon>): Promise<void>;
  update(target: Partial<ServiceConStored>): Promise<ServiceConStored>;
  validateUpdate(owner: JudoIdentifiable<ServiceCon>, target: Partial<ServiceConStored>): Promise<ServiceConStored>;
  listCons(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceConQueryCustomizer,
  ): Promise<Array<ServiceConStored>>;
  deleteCons(target: JudoIdentifiable<ServiceCon>): Promise<void>;
  updateCons(owner: JudoIdentifiable<ServiceCon>, target: Partial<ServiceConStored>): Promise<ServiceConStored>;
  validateUpdateCons(owner: JudoIdentifiable<ServiceCon>, target: Partial<ServiceConStored>): Promise<ServiceConStored>;
  createConArgumentForCons(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgumentForCons(): Promise<CreateArgumentInput>;
  createProArgumentForCons(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgumentForCons(): Promise<CreateArgumentInput>;
  voteDownForCons(owner: JudoIdentifiable<ServiceCon>): Promise<void>;
  voteUpForCons(owner: JudoIdentifiable<ServiceCon>): Promise<void>;
  getCreatedBy(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;
  validateUpdateCreatedBy(
    owner: JudoIdentifiable<ServiceCon>,
    target: Partial<ServiceServiceUserStored>,
  ): Promise<ServiceServiceUserStored>;
  getParentCon(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceConParentQueryCustomizer,
  ): Promise<ServiceConParentStored>;
  validateUpdateParentCon(
    owner: JudoIdentifiable<ServiceCon>,
    target: Partial<ServiceConParentStored>,
  ): Promise<ServiceConParentStored>;
  getParentPro(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceProParentQueryCustomizer,
  ): Promise<ServiceProParentStored>;
  validateUpdateParentPro(
    owner: JudoIdentifiable<ServiceCon>,
    target: Partial<ServiceProParentStored>,
  ): Promise<ServiceProParentStored>;
  listPros(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceProQueryCustomizer,
  ): Promise<Array<ServiceProStored>>;
  deletePros(target: JudoIdentifiable<ServicePro>): Promise<void>;
  updatePros(owner: JudoIdentifiable<ServiceCon>, target: Partial<ServiceProStored>): Promise<ServiceProStored>;
  validateUpdatePros(owner: JudoIdentifiable<ServiceCon>, target: Partial<ServiceProStored>): Promise<ServiceProStored>;
  createConArgumentForPros(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgumentForPros(): Promise<CreateArgumentInput>;
  createProArgumentForPros(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgumentForPros(): Promise<CreateArgumentInput>;
  voteDownForPros(owner: JudoIdentifiable<ServicePro>): Promise<void>;
  voteUpForPros(owner: JudoIdentifiable<ServicePro>): Promise<void>;
  listVotes(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
  ): Promise<Array<ServiceSimpleVoteStored>>;
  validateUpdateVotes(
    owner: JudoIdentifiable<ServiceCon>,
    target: Partial<ServiceSimpleVoteStored>,
  ): Promise<ServiceSimpleVoteStored>;
  createConArgument(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgument(): Promise<CreateArgumentInput>;
  createProArgument(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgument(): Promise<CreateArgumentInput>;
  voteDown(owner: JudoIdentifiable<ServiceCon>): Promise<void>;
  voteUp(owner: JudoIdentifiable<ServiceCon>): Promise<void>;
}
