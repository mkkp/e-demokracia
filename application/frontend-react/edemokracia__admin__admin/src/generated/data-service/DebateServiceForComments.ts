//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  CommentStored,
  Comment,
  SimpleVote,
  User,
  UserQueryCustomizer,
  CommentQueryCustomizer,
  Debate,
  UserStored,
  SimpleVoteStored,
  SimpleVoteQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for Debate.comments
 */
export interface DebateServiceForComments {
  listComments(
    owner: JudoIdentifiable<Debate>,
    queryCustomizer?: CommentQueryCustomizer,
  ): Promise<Array<CommentStored>>;
}
