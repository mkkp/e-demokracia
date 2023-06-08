//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminDebate,
  AdminComment,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminSimpleVote,
  AdminUser,
  AdminCommentQueryCustomizer,
  AdminCommentStored,
  AdminSimpleVoteStored,
  AdminSimpleVoteQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for AdminDebate.comments
 */
export interface AdminDebateServiceForComments {
  listComments(
    owner: JudoIdentifiable<AdminDebate>,
    queryCustomizer?: AdminCommentQueryCustomizer,
  ): Promise<Array<AdminCommentStored>>;

  deleteComments(owner: JudoIdentifiable<AdminDebate>, target: JudoIdentifiable<AdminComment>): Promise<void>;

  updateComments(
    owner: JudoIdentifiable<AdminDebate>,
    target: Partial<AdminCommentStored>,
  ): Promise<AdminCommentStored>;
}
