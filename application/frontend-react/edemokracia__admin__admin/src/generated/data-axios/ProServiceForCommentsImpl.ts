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
import type { ProServiceForComments } from '../data-service';

/**
 * Relation Service Implementation for Pro.comments
 */
export class ProServiceForCommentsImpl extends JudoAxiosService implements ProServiceForComments {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listComments(
    owner: JudoIdentifiable<Pro>,
    queryCustomizer?: CommentQueryCustomizer,
  ): Promise<Array<CommentStored>> {
    const path = '/Pro/comments/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
