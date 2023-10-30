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
  ServiceSimpleVoteStored,
  ServiceServiceUser,
  ServiceComment,
  ServiceDebate,
  ServiceCommentQueryCustomizer,
  ServiceSimpleVote,
  ServiceCommentStored,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceSimpleVoteQueryCustomizer,
} from '../data-api';
import type { ServiceDebateServiceForComments } from '../data-service';

/**
 * Relation Service Implementation for ServiceDebate.comments
 */
export class ServiceDebateServiceForCommentsImpl extends JudoAxiosService implements ServiceDebateServiceForComments {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listComments(
    owner: JudoIdentifiable<ServiceDebate>,
    queryCustomizer?: ServiceCommentQueryCustomizer,
  ): Promise<Array<ServiceCommentStored>> {
    const path = '/service/Debate/comments/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async deleteComments(
    owner: JudoIdentifiable<ServiceDebate>,
    target: JudoIdentifiable<ServiceComment>,
  ): Promise<void> {
    const path = '/service/Debate/~update/comments/~delete';
    await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async updateComments(
    owner: JudoIdentifiable<ServiceDebate>,
    target: Partial<ServiceCommentStored>,
  ): Promise<ServiceCommentStored> {
    const path = '/service/Debate/~update/comments/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
