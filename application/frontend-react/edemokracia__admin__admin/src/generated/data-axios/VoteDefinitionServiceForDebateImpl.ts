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
  DebateQueryCustomizer,
  Issue,
  User,
  Con,
  VoteDefinitionQueryCustomizer,
  ProStored,
  Pro,
  VoteDefinitionStored,
  ConQueryCustomizer,
  UserQueryCustomizer,
  IssueQueryCustomizer,
  ProQueryCustomizer,
  IssueStored,
  CommentQueryCustomizer,
  Debate,
  ConStored,
  DebateStored,
  UserStored,
  VoteDefinition,
} from '../data-api';
import type { VoteDefinitionServiceForDebate } from '../data-service';

/**
 * Relation Service Implementation for VoteDefinition.debate
 */
export class VoteDefinitionServiceForDebateImpl extends JudoAxiosService implements VoteDefinitionServiceForDebate {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getDebate(owner: JudoIdentifiable<VoteDefinition>, mask?: string): Promise<DebateStored> {
    const path = '/VoteDefinition/debate/~get';
    const queryCustomizer: DebateQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
