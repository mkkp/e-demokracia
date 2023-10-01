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
  AdminVoteDefinitionQueryCustomizer,
  AdminUserVoteDefinition,
  AdminIssueStored,
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminIssueQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  AdminDebate,
  AdminIssue,
  AdminVoteDefinition,
  AdminDebateStored,
  AdminDebateQueryCustomizer,
} from '../data-api';
import type { AdminUserVoteDefinitionServiceForActiveVoteDefinitionsGlobal } from '../data-service';

/**
 * Relation Service Implementation for AdminUserVoteDefinition.activeVoteDefinitionsGlobal
 */
export class AdminUserVoteDefinitionServiceForActiveVoteDefinitionsGlobalImpl
  extends JudoAxiosService
  implements AdminUserVoteDefinitionServiceForActiveVoteDefinitionsGlobal
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<AdminUserVoteDefinition>,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>> {
    const path = '/admin/UserVoteDefinition/activeVoteDefinitionsGlobal/~list';
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
  async updateActiveVoteDefinitionsGlobal(
    owner: JudoIdentifiable<AdminUserVoteDefinition>,
    target: Partial<AdminVoteDefinitionStored>,
  ): Promise<AdminVoteDefinitionStored> {
    const path = '/admin/UserVoteDefinition/~update/activeVoteDefinitionsGlobal/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
