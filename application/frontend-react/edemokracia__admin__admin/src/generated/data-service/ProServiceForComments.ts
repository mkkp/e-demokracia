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
  User,
  UserQueryCustomizer,
  CommentQueryCustomizer,
  UserStored,
  SimpleVoteStored,
  Pro,
  SimpleVoteQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for Pro.comments
 */
export interface ProServiceForComments {
  listComments(owner: JudoIdentifiable<Pro>, queryCustomizer?: CommentQueryCustomizer): Promise<Array<CommentStored>>;
}
