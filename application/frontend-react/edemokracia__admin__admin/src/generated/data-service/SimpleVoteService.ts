//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import {
  SimpleVote,
  User,
  UserQueryCustomizer,
  UserStored,
  SimpleVoteStored,
  SimpleVoteQueryCustomizer,
} from '../data-api';

/**
 * Class Service for SimpleVote
 */
export interface SimpleVoteService {
  refresh(target: JudoIdentifiable<SimpleVote>, queryCustomizer?: SimpleVoteQueryCustomizer): Promise<SimpleVoteStored>;

  getUser(target: JudoIdentifiable<SimpleVote>, queryCustomizer?: UserQueryCustomizer): Promise<UserStored>;

  getRangeForUser(
    owner?: JudoIdentifiable<SimpleVote> | SimpleVote,
    queryCustomizer?: UserQueryCustomizer,
  ): Promise<Array<UserStored>>;
}
