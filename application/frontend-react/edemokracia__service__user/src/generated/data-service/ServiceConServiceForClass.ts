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
  ServiceServiceUserQueryCustomizer,
  ServicePro,
  ServiceSimpleVoteQueryCustomizer,
} from '../data-api';

/**
 * Class Service for ServiceCon
 */
export interface ServiceConServiceForClass {
  refresh(target: JudoIdentifiable<ServiceCon>, queryCustomizer?: ServiceConQueryCustomizer): Promise<ServiceConStored>;

  delete(target: JudoIdentifiable<ServiceCon>): Promise<void>;

  update(target: Partial<ServiceConStored>): Promise<ServiceConStored>;

  getVotes(
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

  getCons(
    target: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceConQueryCustomizer,
  ): Promise<Array<ServiceConStored>>;

  getRangeForCons(
    owner?: JudoIdentifiable<ServiceCon> | ServiceCon,
    queryCustomizer?: ServiceConQueryCustomizer,
  ): Promise<Array<ServiceConStored>>;

  getPros(
    target: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceProQueryCustomizer,
  ): Promise<Array<ServiceProStored>>;

  getRangeForPros(
    owner?: JudoIdentifiable<ServiceCon> | ServiceCon,
    queryCustomizer?: ServiceProQueryCustomizer,
  ): Promise<Array<ServiceProStored>>;

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

  voteUp(owner: JudoIdentifiable<ServiceCon>): Promise<void>;

  voteDown(owner: JudoIdentifiable<ServiceCon>): Promise<void>;

  createConArgument(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;

  createProArgument(owner: JudoIdentifiable<ServiceCon>, target: CreateArgumentInput): Promise<void>;
}
