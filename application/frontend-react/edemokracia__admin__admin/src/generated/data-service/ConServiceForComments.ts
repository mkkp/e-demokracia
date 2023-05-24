//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import {
  CommentStored,
  Comment,
  SimpleVote,
  Con,
  User,
  UserQueryCustomizer,
  CommentQueryCustomizer,
  UserStored,
  SimpleVoteStored,
  SimpleVoteQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for Con.comments
 */
export interface ConServiceForComments {
  listComments(owner: JudoIdentifiable<Con>, queryCustomizer?: CommentQueryCustomizer): Promise<Array<CommentStored>>;
}
