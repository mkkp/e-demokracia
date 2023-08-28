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
  Con,
  User,
  UserQueryCustomizer,
  CommentQueryCustomizer,
  UserStored,
  SimpleVoteStored,
  SimpleVoteQueryCustomizer,
} from '../data-api';
import type { ConServiceForComments } from '../data-service';

/**
 * Relation Service Implementation for Con.comments
 */
export class ConServiceForCommentsImpl extends JudoAxiosService implements ConServiceForComments {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listComments(
    owner: JudoIdentifiable<Con>,
    queryCustomizer?: CommentQueryCustomizer,
  ): Promise<Array<CommentStored>> {
    const path = '/Con/comments/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
