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
  ServiceServiceUser,
  ServiceRatingVoteEntryQueryCustomizer,
  ServiceRatingVoteEntry,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceRatingVoteEntryStored,
} from '../data-api';
import type { ServiceRatingVoteDefinitionServiceForUserVoteEntry } from '../data-service';

/**
 * Relation Service Implementation for ServiceRatingVoteDefinition.userVoteEntry
 */
export class ServiceRatingVoteDefinitionServiceForUserVoteEntryImpl
  extends JudoAxiosService
  implements ServiceRatingVoteDefinitionServiceForUserVoteEntry
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getUserVoteEntry(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    mask?: string,
  ): Promise<ServiceRatingVoteEntryStored> {
    const path = '/service/RatingVoteDefinition/userVoteEntry/~get';
    const queryCustomizer: ServiceRatingVoteEntryQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
