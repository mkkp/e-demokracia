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
  ServiceProStored,
  ServiceProParent,
  CreateArgumentInput,
  ServicePro,
  ServiceServiceUserQueryCustomizer,
  ServiceSimpleVoteQueryCustomizer,
} from '../data-api';

/**
 * Class Service for ServicePro
 */
export interface ServiceProServiceForClass {
  refresh(target: JudoIdentifiable<ServicePro>, queryCustomizer?: ServiceProQueryCustomizer): Promise<ServiceProStored>;

  delete(target: JudoIdentifiable<ServicePro>): Promise<void>;

  update(target: Partial<ServiceProStored>): Promise<ServiceProStored>;

  getVotes(
    target: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
  ): Promise<Array<ServiceSimpleVoteStored>>;

  getRangeForVotes(
    owner?: JudoIdentifiable<ServicePro> | ServicePro,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
  ): Promise<Array<ServiceSimpleVoteStored>>;

  getCreatedBy(
    target: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;

  getRangeForCreatedBy(
    owner?: JudoIdentifiable<ServicePro> | ServicePro,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;

  getPros(
    target: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceProQueryCustomizer,
  ): Promise<Array<ServiceProStored>>;

  getRangeForPros(
    owner?: JudoIdentifiable<ServicePro> | ServicePro,
    queryCustomizer?: ServiceProQueryCustomizer,
  ): Promise<Array<ServiceProStored>>;

  getCons(
    target: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceConQueryCustomizer,
  ): Promise<Array<ServiceConStored>>;

  getRangeForCons(
    owner?: JudoIdentifiable<ServicePro> | ServicePro,
    queryCustomizer?: ServiceConQueryCustomizer,
  ): Promise<Array<ServiceConStored>>;

  getParentPro(
    target: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceProParentQueryCustomizer,
  ): Promise<ServiceProParentStored>;

  getRangeForParentPro(
    owner?: JudoIdentifiable<ServicePro> | ServicePro,
    queryCustomizer?: ServiceProParentQueryCustomizer,
  ): Promise<Array<ServiceProParentStored>>;

  getParentCon(
    target: JudoIdentifiable<ServicePro>,
    queryCustomizer?: ServiceConParentQueryCustomizer,
  ): Promise<ServiceConParentStored>;

  getRangeForParentCon(
    owner?: JudoIdentifiable<ServicePro> | ServicePro,
    queryCustomizer?: ServiceConParentQueryCustomizer,
  ): Promise<Array<ServiceConParentStored>>;

  voteUp(owner: JudoIdentifiable<ServicePro>): Promise<void>;

  voteDown(owner: JudoIdentifiable<ServicePro>): Promise<void>;

  createConArgument(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<void>;

  createProArgument(owner: JudoIdentifiable<ServicePro>, target: CreateArgumentInput): Promise<void>;
}
