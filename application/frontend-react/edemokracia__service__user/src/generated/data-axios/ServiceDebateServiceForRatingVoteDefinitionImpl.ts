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
  ServiceRatingVoteDefinition,
  ServiceRatingVoteEntryQueryCustomizer,
  ServiceDebate,
  ServiceRatingVoteDefinitionStored,
  ServiceDebateQueryCustomizer,
  ServiceDebateStored,
  ServiceIssueQueryCustomizer,
  ServiceRatingVoteDefinitionQueryCustomizer,
  ServiceRatingVoteEntry,
  ServiceIssueStored,
  ServiceRatingVoteEntryStored,
  ServiceIssue,
} from '../data-api';
import type { ServiceDebateServiceForRatingVoteDefinition } from '../data-service';

/**
 * Relation Service Implementation for ServiceDebate.ratingVoteDefinition
 */
export class ServiceDebateServiceForRatingVoteDefinitionImpl
  extends JudoAxiosService
  implements ServiceDebateServiceForRatingVoteDefinition
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRatingVoteDefinition(
    owner: JudoIdentifiable<ServiceDebate>,
    mask?: string,
  ): Promise<ServiceRatingVoteDefinitionStored> {
    const path = '/service/Debate/ratingVoteDefinition/~get';
    const queryCustomizer: ServiceRatingVoteDefinitionQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
