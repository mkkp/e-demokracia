//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type {
  SimpleVote,
  Con,
  User,
  UserQueryCustomizer,
  UserStored,
  SimpleVoteStored,
  SimpleVoteQueryCustomizer,
} from '../data-api';
import type { ConServiceForVotes } from '../data-service';

/**
 * Relation Service Implementation for Con.votes
 */
export class ConServiceForVotesImpl extends JudoAxiosService implements ConServiceForVotes {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listVotes(
    owner: JudoIdentifiable<Con>,
    queryCustomizer?: SimpleVoteQueryCustomizer,
  ): Promise<Array<SimpleVoteStored>> {
    const path = '/Con/votes/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
