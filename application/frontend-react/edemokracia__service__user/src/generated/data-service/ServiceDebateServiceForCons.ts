//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceComment,
  ServiceProParentQueryCustomizer,
  ServiceConParent,
  ServiceDebate,
  ServiceCommentQueryCustomizer,
  ServiceConParentQueryCustomizer,
  ServiceSimpleVote,
  ServiceConParentStored,
  ServiceServiceUserStored,
  ServiceCommentStored,
  ServiceConStored,
  ServiceCon,
  ServiceSimpleVoteStored,
  ServiceServiceUser,
  ServiceProQueryCustomizer,
  ServiceProParentStored,
  ServiceConQueryCustomizer,
  ServiceProStored,
  ServiceProParent,
  ServiceServiceUserQueryCustomizer,
  ServicePro,
  ServiceSimpleVoteQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServiceDebate.cons
 */
export interface ServiceDebateServiceForCons {
  listCons(
    owner: JudoIdentifiable<ServiceDebate>,
    queryCustomizer?: ServiceConQueryCustomizer,
  ): Promise<Array<ServiceConStored>>;

  deleteCons(owner: JudoIdentifiable<ServiceDebate>, target: JudoIdentifiable<ServiceCon>): Promise<void>;

  updateCons(owner: JudoIdentifiable<ServiceDebate>, target: Partial<ServiceConStored>): Promise<ServiceConStored>;
}
