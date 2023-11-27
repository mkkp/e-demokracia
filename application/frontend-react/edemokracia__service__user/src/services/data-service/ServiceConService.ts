//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceProParentQueryCustomizer,
  ServiceConParent,
  ServiceConParentQueryCustomizer,
  ServiceSimpleVote,
  ServiceConParentStored,
  ServiceServiceUserStored,
  ServiceCon,
  ServiceConStored,
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
 * Class Service for ServiceCon
 */
export interface ServiceConService {
  refresh(target: JudoIdentifiable<ServiceCon>, queryCustomizer?: ServiceConQueryCustomizer): Promise<ServiceConStored>;
  delete(target: JudoIdentifiable<ServiceCon>): Promise<void>;
  update(target: Partial<ServiceConStored>): Promise<ServiceConStored>;
  listVotes(
    target: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
  ): Promise<Array<ServiceSimpleVoteStored>>;
  getRangeForVotes(
    owner?: JudoIdentifiable<ServiceCon> | ServiceCon,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
  ): Promise<Array<ServiceSimpleVoteStored>>;
  getCreatedBy(
    target: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;
  getRangeForCreatedBy(
    owner?: JudoIdentifiable<ServiceCon> | ServiceCon,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;
  listCons(
    target: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceConQueryCustomizer,
  ): Promise<Array<ServiceConStored>>;
  getRangeForCons(
    owner?: JudoIdentifiable<ServiceCon> | ServiceCon,
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
    target: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceProQueryCustomizer,
  ): Promise<Array<ServiceProStored>>;
  getRangeForPros(
    owner?: JudoIdentifiable<ServiceCon> | ServiceCon,
    queryCustomizer?: ServiceProQueryCustomizer,
  ): Promise<Array<ServiceProStored>>;
  deletePros(target: JudoIdentifiable<ServicePro>): Promise<void>;
  createConArgumentForPros(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgumentForPros(): Promise<CreateArgumentInput>;
  createProArgumentForPros(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgumentForPros(): Promise<CreateArgumentInput>;
  voteUpForPros(owner: JudoIdentifiable<ServicePro>): Promise<void>;
  voteDownForPros(owner: JudoIdentifiable<ServicePro>): Promise<void>;
  getParentCon(
    target: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceConParentQueryCustomizer,
  ): Promise<ServiceConParentStored>;
  getRangeForParentCon(
    owner?: JudoIdentifiable<ServiceCon> | ServiceCon,
    queryCustomizer?: ServiceConParentQueryCustomizer,
  ): Promise<Array<ServiceConParentStored>>;
  getParentPro(
    target: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceProParentQueryCustomizer,
  ): Promise<ServiceProParentStored>;
  getRangeForParentPro(
    owner?: JudoIdentifiable<ServiceCon> | ServiceCon,
    queryCustomizer?: ServiceProParentQueryCustomizer,
  ): Promise<Array<ServiceProParentStored>>;
  voteDown(owner: JudoIdentifiable<ServiceCon>): Promise<void>;
  voteUp(owner: JudoIdentifiable<ServiceCon>): Promise<void>;
  createProArgument(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgument(): Promise<CreateArgumentInput>;
  createConArgument(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgument(): Promise<CreateArgumentInput>;
}
