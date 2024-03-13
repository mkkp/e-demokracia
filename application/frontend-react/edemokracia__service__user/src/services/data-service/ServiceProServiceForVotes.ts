//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  JudoRestResponse,
  ServicePro,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceSimpleVote,
  ServiceSimpleVoteQueryCustomizer,
  ServiceSimpleVoteStored,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServicePro.votes
 */
export interface ServiceProServiceForVotes {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceSimpleVoteStored>>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceSimpleVoteStored>>;
  getUser(
    owner: JudoIdentifiable<ServiceSimpleVote>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  getRangeForUser(
    owner: JudoIdentifiable<ServiceSimpleVote> | ServiceSimpleVote,
    queryCustomizer: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>>;
  setUser(
    owner: JudoIdentifiable<ServiceSimpleVote>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>>;
  unsetUser(
    owner: JudoIdentifiable<ServiceSimpleVote>,
    target: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>>;
}
