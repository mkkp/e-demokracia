//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type {
  ServiceUserVoteDefinitionQueryCustomizer,
  ServiceUserVoteDefinitionStored,
  ServiceUserVoteDefinition,
} from '../data-api';
import type { ServiceUserServiceForUserVoteDefinitions } from '../data-service';

/**
 * Access Relation Service Implementation for ServiceUser.userVoteDefinitions
 */
export class ServiceUserServiceForUserVoteDefinitionsImpl
  extends JudoAxiosService
  implements ServiceUserServiceForUserVoteDefinitions
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getUserVoteDefinitions(mask?: string): Promise<ServiceUserVoteDefinitionStored> {
    const path = 'service/User/userVoteDefinitions/~get';
    const queryCustomizer: ServiceUserVoteDefinitionQueryCustomizer | undefined = mask
      ? {
          _mask: mask,
        }
      : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
