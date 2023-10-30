//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type {
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceYesNoAbstainVoteDefinition,
} from '../data-api';
import type { ServiceUserServiceForUserOwnedYesNoAbstainVoteDefinitions } from '../data-service';

/**
 * Access Relation Service Implementation for ServiceUser.userOwnedYesNoAbstainVoteDefinitions
 */
export class ServiceUserServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl
  extends JudoAxiosService
  implements ServiceUserServiceForUserOwnedYesNoAbstainVoteDefinitions
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listUserOwnedYesNoAbstainVoteDefinitions(
    queryCustomizer?: ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceYesNoAbstainVoteDefinitionStored>> {
    const path = 'service/User/userOwnedYesNoAbstainVoteDefinitions/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
