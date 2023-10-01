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
  AdminDashboard,
  AdminDebateQueryCustomizer,
} from '../data-api';
import type { AdminDashboardServiceForOwnedVoteDefinitions } from '../data-service';

/**
 * Relation Service Implementation for AdminDashboard.ownedVoteDefinitions
 */
export class AdminDashboardServiceForOwnedVoteDefinitionsImpl
  extends JudoAxiosService
  implements AdminDashboardServiceForOwnedVoteDefinitions
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listOwnedVoteDefinitions(
    owner: JudoIdentifiable<AdminDashboard>,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>> {
    const path = '/admin/Dashboard/ownedVoteDefinitions/~list';
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
  async deleteOwnedVoteDefinitions(
    owner: JudoIdentifiable<AdminDashboard>,
    target: JudoIdentifiable<AdminVoteDefinition>,
  ): Promise<void> {
    const path = '/admin/Dashboard/~update/ownedVoteDefinitions/~delete';
    await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async updateOwnedVoteDefinitions(
    owner: JudoIdentifiable<AdminDashboard>,
    target: Partial<AdminVoteDefinitionStored>,
  ): Promise<AdminVoteDefinitionStored> {
    const path = '/admin/Dashboard/~update/ownedVoteDefinitions/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
