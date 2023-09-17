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
  AdminProParentQueryCustomizer,
  AdminProParent,
  AdminCon,
  AdminConParentQueryCustomizer,
  AdminSimpleVote,
  AdminDebateParentQueryCustomizer,
  AdminCommentQueryCustomizer,
  AdminConParentStored,
  AdminProQueryCustomizer,
  AdminComment,
  AdminUser,
  AdminConParent,
  AdminSimpleVoteStored,
  AdminDebateParentStored,
  AdminConStored,
  AdminProParentStored,
  AdminUserStored,
  AdminPro,
  AdminUserQueryCustomizer,
  AdminSimpleVoteQueryCustomizer,
  AdminProStored,
  AdminDebate,
  AdminConQueryCustomizer,
  AdminDebateParent,
  AdminCommentStored,
} from '../data-api';
import type { AdminDebateServiceForPros } from '../data-service';

/**
 * Relation Service Implementation for AdminDebate.pros
 */
export class AdminDebateServiceForProsImpl extends JudoAxiosService implements AdminDebateServiceForPros {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listPros(
    owner: JudoIdentifiable<AdminDebate>,
    queryCustomizer?: AdminProQueryCustomizer,
  ): Promise<Array<AdminProStored>> {
    const path = '/admin/Debate/pros/~list';
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
  async deletePros(owner: JudoIdentifiable<AdminDebate>, target: JudoIdentifiable<AdminPro>): Promise<void> {
    const path = '/admin/Debate/~update/pros/~delete';
    await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async updatePros(owner: JudoIdentifiable<AdminDebate>, target: Partial<AdminProStored>): Promise<AdminProStored> {
    const path = '/admin/Debate/~update/pros/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
