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
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ServiceCommentQueryCustomizer,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceRatingVoteDefinitionStored,
  ServiceSelectAnswerVoteDefinition,
  ServiceDebateStored,
  ServiceIssueQueryCustomizer,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceVoteDefinition,
  ServiceYesNoAbstainVoteDefinition,
  ServiceIssueStored,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceConStored,
  ServiceIssue,
  ServiceServiceUser,
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceDebateQueryCustomizer,
  ServiceConQueryCustomizer,
  ServiceProStored,
  ServicePro,
  ServiceVoteDefinitionStored,
  ServiceRatingVoteDefinition,
  ServiceComment,
  ServiceDebate,
  ServiceYesNoVoteDefinitionStored,
  ServiceRatingVoteDefinitionQueryCustomizer,
  ServiceCommentStored,
  ServiceServiceUserStored,
  ServiceCon,
  ServiceYesNoVoteDefinition,
  ServiceProQueryCustomizer,
  ServiceDashboard,
  ServiceServiceUserQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
} from '../data-api';
import type { ServiceDashboardServiceForOwnedDebates } from '../data-service';

/**
 * Relation Service Implementation for ServiceDashboard.ownedDebates
 */
export class ServiceDashboardServiceForOwnedDebatesImpl
  extends JudoAxiosService
  implements ServiceDashboardServiceForOwnedDebates
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listOwnedDebates(
    owner: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>> {
    const path = '/service/Dashboard/ownedDebates/~list';
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
  async deleteOwnedDebates(
    owner: JudoIdentifiable<ServiceDashboard>,
    target: JudoIdentifiable<ServiceDebate>,
  ): Promise<void> {
    const path = '/service/Dashboard/~update/ownedDebates/~delete';
    await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async updateOwnedDebates(
    owner: JudoIdentifiable<ServiceDashboard>,
    target: Partial<ServiceDebateStored>,
  ): Promise<ServiceDebateStored> {
    const path = '/service/Dashboard/~update/ownedDebates/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
