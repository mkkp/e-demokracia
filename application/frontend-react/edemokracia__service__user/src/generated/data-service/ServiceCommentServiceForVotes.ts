//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceSimpleVoteStored,
  ServiceServiceUser,
  ServiceComment,
  ServiceSimpleVote,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceSimpleVoteQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServiceComment.votes
 */
export interface ServiceCommentServiceForVotes {
  listVotes(
    owner: JudoIdentifiable<ServiceComment>,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
  ): Promise<Array<ServiceSimpleVoteStored>>;
}
