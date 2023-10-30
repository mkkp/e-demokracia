//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type {
  ServiceRatingVoteDefinition,
  ServiceRatingVoteDefinitionStored,
  ServiceRatingVoteDefinitionQueryCustomizer,
} from '../data-api';
import type { ServiceUserServiceForUserOwnedRatingVoteDefinitions } from '../data-service';

/**
 * Access Relation Service Implementation for ServiceUser.userOwnedRatingVoteDefinitions
 */
export class ServiceUserServiceForUserOwnedRatingVoteDefinitionsImpl
  extends JudoAxiosService
  implements ServiceUserServiceForUserOwnedRatingVoteDefinitions
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listUserOwnedRatingVoteDefinitions(
    queryCustomizer?: ServiceRatingVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceRatingVoteDefinitionStored>> {
    const path = 'service/User/userOwnedRatingVoteDefinitions/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
