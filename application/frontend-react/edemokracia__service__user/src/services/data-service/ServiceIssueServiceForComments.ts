//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  ServiceComment,
  ServiceCommentQueryCustomizer,
  ServiceCommentStored,
  ServiceIssue,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceSimpleVote,
  ServiceSimpleVoteQueryCustomizer,
  ServiceSimpleVoteStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

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
  getCreatedBy(
    owner: JudoIdentifiable<ServiceComment>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;
  listVotes(
    owner: JudoIdentifiable<ServiceComment>,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
  ): Promise<Array<ServiceSimpleVoteStored>>;
  voteDown(owner: JudoIdentifiable<ServiceComment>): Promise<void>;
  voteUp(owner: JudoIdentifiable<ServiceComment>): Promise<void>;
}
