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
  AdminCon,
  AdminConStored,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminPro,
  AdminSimpleVote,
  AdminCommentQueryCustomizer,
  AdminSimpleVoteQueryCustomizer,
  AdminProQueryCustomizer,
  AdminProStored,
  AdminDebate,
  AdminConQueryCustomizer,
  AdminComment,
  AdminUser,
  AdminCommentStored,
  AdminSimpleVoteStored,
} from '../data-api';
import type { AdminDebateServiceForCons } from '../data-service';

/**
 * Relation Service Implementation for AdminDebate.cons
 */
export class AdminDebateServiceForConsImpl extends JudoAxiosService implements AdminDebateServiceForCons {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listCons(
    owner: JudoIdentifiable<AdminDebate>,
    queryCustomizer?: AdminConQueryCustomizer,
  ): Promise<Array<AdminConStored>> {
    const path = '/admin/Debate/cons/~list';
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
  async deleteCons(owner: JudoIdentifiable<AdminDebate>, target: JudoIdentifiable<AdminCon>): Promise<void> {
    const path = '/admin/Debate/~update/cons/~delete';
    await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async updateCons(owner: JudoIdentifiable<AdminDebate>, target: Partial<AdminConStored>): Promise<AdminConStored> {
    const path = '/admin/Debate/~update/cons/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
