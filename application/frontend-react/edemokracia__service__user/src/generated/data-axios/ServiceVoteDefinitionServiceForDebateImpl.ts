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
  ServiceServiceUserQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
} from '../data-api';
import type { ServiceVoteDefinitionServiceForDebate } from '../data-service';

/**
 * Relation Service Implementation for ServiceVoteDefinition.debate
 */
export class ServiceVoteDefinitionServiceForDebateImpl
  extends JudoAxiosService
  implements ServiceVoteDefinitionServiceForDebate
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getDebate(owner: JudoIdentifiable<ServiceVoteDefinition>, mask?: string): Promise<ServiceDebateStored> {
    const path = '/service/VoteDefinition/debate/~get';
    const queryCustomizer: ServiceDebateQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
