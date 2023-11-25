//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceSimpleVoteStored,
  ServiceServiceUser,
  ServiceComment,
  ServiceCommentQueryCustomizer,
  ServiceSimpleVote,
  ServiceCommentStored,
  ServiceServiceUserStored,
  ServiceServiceUserQueryCustomizer,
  ServiceSimpleVoteQueryCustomizer,
} from '../data-api';

/**
 * Class Service for ServiceComment
 */
export interface ServiceCommentService {
  refresh(
    target: JudoIdentifiable<ServiceComment>,
    queryCustomizer?: ServiceCommentQueryCustomizer,
  ): Promise<ServiceCommentStored>;
  listVotes(
    target: JudoIdentifiable<ServiceComment>,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
  ): Promise<Array<ServiceSimpleVoteStored>>;
  getRangeForVotes(
    owner?: JudoIdentifiable<ServiceComment> | ServiceComment,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
  ): Promise<Array<ServiceSimpleVoteStored>>;
  getCreatedBy(
    target: JudoIdentifiable<ServiceComment>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;
  getRangeForCreatedBy(
    owner?: JudoIdentifiable<ServiceComment> | ServiceComment,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;
  voteDown(owner: JudoIdentifiable<ServiceComment>): Promise<void>;
  voteUp(owner: JudoIdentifiable<ServiceComment>): Promise<void>;
}
