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
  ProStored,
  Pro,
  SimpleVoteQueryCustomizer,
  ConQueryCustomizer,
  UserQueryCustomizer,
  ProQueryCustomizer,
  CommentQueryCustomizer,
  Debate,
  ConStored,
  UserStored,
  SimpleVoteStored,
} from '../data-api';

/**
 * Relation Service for Debate.cons
 */
export interface DebateServiceForCons {
  listCons(owner: JudoIdentifiable<Debate>, queryCustomizer?: ConQueryCustomizer): Promise<Array<ConStored>>;
}
