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
  ServiceConParentStored,
  CreateArgumentInputStored,
  ServiceServiceUserStored,
  ServiceCon,
  ServiceConStored,
  ServiceSimpleVoteStored,
  ServiceServiceUser,
  ServiceProQueryCustomizer,
  ServiceProParentStored,
  ServiceConQueryCustomizer,
  ServiceProStored,
  ServiceProParent,
  CreateArgumentInput,
  ServicePro,
  ServiceServiceUserQueryCustomizer,
  ServiceSimpleVoteQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServiceCon.pros
 */
export interface ServiceConServiceForPros {
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

  listCons(
    owner: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceConQueryCustomizer,
  ): Promise<Array<ServiceConStored>>;

  deleteCons(target: JudoIdentifiable<ServiceCon>): Promise<void>;

  updateCons(owner: JudoIdentifiable<ServicePro>, target: Partial<ServiceConStored>): Promise<ServiceConStored>;

  getParentPro(
    owner: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceProParentQueryCustomizer,
  ): Promise<ServiceProParentStored>;

  getParentCon(
    owner: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceConParentQueryCustomizer,
  ): Promise<ServiceConParentStored>;

  createConArgument(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateConArgument(): Promise<CreateArgumentInput>;

  createProArgument(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateProArgument(): Promise<CreateArgumentInput>;

  voteUp(owner: JudoIdentifiable<ServicePro>): Promise<void>;

  voteDown(owner: JudoIdentifiable<ServicePro>): Promise<void>;
}
