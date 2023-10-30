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
  ServiceDebate,
  ServiceCommentQueryCustomizer,
  ServiceSimpleVote,
  ServiceCommentStored,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceSimpleVoteQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServiceDebate.comments
 */
export interface ServiceDebateServiceForComments {
  listComments(
    owner: JudoIdentifiable<ServiceDebate>,
    queryCustomizer?: ServiceCommentQueryCustomizer,
  ): Promise<Array<ServiceCommentStored>>;

  deleteComments(owner: JudoIdentifiable<ServiceDebate>, target: JudoIdentifiable<ServiceComment>): Promise<void>;

  updateComments(
    owner: JudoIdentifiable<ServiceDebate>,
    target: Partial<ServiceCommentStored>,
  ): Promise<ServiceCommentStored>;
}
