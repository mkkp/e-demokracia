//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type {
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminSimpleVote,
  AdminUser,
  AdminSimpleVoteStored,
  AdminSimpleVoteQueryCustomizer,
} from '../data-api';
import type { AdminSimpleVoteServiceForClass } from '../data-service';

/**
 * Class Service Implementation for AdminSimpleVote
 */
export class AdminSimpleVoteServiceForClassImpl extends JudoAxiosService implements AdminSimpleVoteServiceForClass {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<AdminSimpleVote>,
    queryCustomizer?: AdminSimpleVoteQueryCustomizer,
  ): Promise<AdminSimpleVoteStored> {
    const path = '/admin/SimpleVote/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getUser(
    target: JudoIdentifiable<AdminSimpleVote>,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<AdminUserStored> {
    const path = '/admin/SimpleVote/user/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier!,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForUser(
    owner?: JudoIdentifiable<AdminSimpleVote> | AdminSimpleVote,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>> {
    const path = '/admin/SimpleVote/user/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }
}
