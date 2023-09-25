//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminComment,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminSimpleVote,
  AdminUser,
  AdminSimpleVoteStored,
  AdminSimpleVoteQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for AdminComment.votes
 */
export interface AdminCommentServiceForVotes {
  listVotes(
    owner: JudoIdentifiable<AdminComment>,
    queryCustomizer?: AdminSimpleVoteQueryCustomizer,
  ): Promise<Array<AdminSimpleVoteStored>>;
}
