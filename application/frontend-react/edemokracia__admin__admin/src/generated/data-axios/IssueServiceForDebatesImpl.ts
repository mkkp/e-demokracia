//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import {
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
import { IssueServiceForDebates } from '../data-service';

/**
 * Relation Service Implementation for Issue.debates
 */
export class IssueServiceForDebatesImpl extends JudoAxiosService implements IssueServiceForDebates {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listDebates(
    owner: JudoIdentifiable<Issue>,
    queryCustomizer?: DebateQueryCustomizer,
  ): Promise<Array<DebateStored>> {
    const path = '/Issue/debates/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
