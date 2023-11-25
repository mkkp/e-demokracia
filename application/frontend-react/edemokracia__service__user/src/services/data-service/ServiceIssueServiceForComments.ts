//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceSimpleVoteStored,
  ServiceServiceUser,
  ServiceComment,
  ServiceCommentQueryCustomizer,
  ServiceSimpleVote,
  ServiceCommentStored,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceSimpleVoteQueryCustomizer,
  ServiceIssue,
} from '../data-api';

/**
 * Relation Service for ServiceIssue.comments
 */
export interface ServiceIssueServiceForComments {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceCommentQueryCustomizer,
  ): Promise<Array<ServiceCommentStored>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceCommentQueryCustomizer,
  ): Promise<ServiceCommentStored>;
  listVotes(
    owner: JudoIdentifiable<ServiceComment>,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
  ): Promise<Array<ServiceSimpleVoteStored>>;
  getCreatedBy(
    owner: JudoIdentifiable<ServiceComment>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;
  voteDown(owner: JudoIdentifiable<ServiceComment>): Promise<void>;
  voteUp(owner: JudoIdentifiable<ServiceComment>): Promise<void>;
}
