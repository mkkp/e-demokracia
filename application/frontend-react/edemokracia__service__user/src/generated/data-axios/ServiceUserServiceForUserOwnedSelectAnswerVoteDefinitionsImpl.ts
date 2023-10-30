//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type {
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
} from '../data-api';
import type { ServiceUserServiceForUserOwnedSelectAnswerVoteDefinitions } from '../data-service';

/**
 * Access Relation Service Implementation for ServiceUser.userOwnedSelectAnswerVoteDefinitions
 */
export class ServiceUserServiceForUserOwnedSelectAnswerVoteDefinitionsImpl
  extends JudoAxiosService
  implements ServiceUserServiceForUserOwnedSelectAnswerVoteDefinitions
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listUserOwnedSelectAnswerVoteDefinitions(
    queryCustomizer?: ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceSelectAnswerVoteDefinitionStored>> {
    const path = 'service/User/userOwnedSelectAnswerVoteDefinitions/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
