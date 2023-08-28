//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  SimpleVote,
  User,
  UserQueryCustomizer,
  UserStored,
  SimpleVoteStored,
  Pro,
  SimpleVoteQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for Pro.votes
 */
export interface ProServiceForVotes {
  listVotes(
    owner: JudoIdentifiable<Pro>,
    queryCustomizer?: SimpleVoteQueryCustomizer,
  ): Promise<Array<SimpleVoteStored>>;
}
