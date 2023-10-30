//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type {
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionStored,
  ServiceYesNoVoteDefinitionQueryCustomizer,
} from '../data-api';
import type { ServiceUserServiceForUserOwnedYesNoVoteDefinitions } from '../data-service';

/**
 * Access Relation Service Implementation for ServiceUser.userOwnedYesNoVoteDefinitions
 */
export class ServiceUserServiceForUserOwnedYesNoVoteDefinitionsImpl
  extends JudoAxiosService
  implements ServiceUserServiceForUserOwnedYesNoVoteDefinitions
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listUserOwnedYesNoVoteDefinitions(
    queryCustomizer?: ServiceYesNoVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceYesNoVoteDefinitionStored>> {
    const path = 'service/User/userOwnedYesNoVoteDefinitions/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
