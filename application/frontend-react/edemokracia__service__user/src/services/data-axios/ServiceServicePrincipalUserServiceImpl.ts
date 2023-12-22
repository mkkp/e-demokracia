//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type {
  ServiceServicePrincipalUser,
  ServiceServicePrincipalUserQueryCustomizer,
  ServiceServicePrincipalUserStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import type { ServiceServicePrincipalUserService } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

/**
 * Class Service Implementation for ServiceServicePrincipalUser
 */
export class ServiceServicePrincipalUserServiceImpl
  extends JudoAxiosService
  implements ServiceServicePrincipalUserService
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<ServiceServicePrincipalUser>,
    queryCustomizer?: ServiceServicePrincipalUserQueryCustomizer,
  ): Promise<ServiceServicePrincipalUserStored> {
    const path = '/service/ServicePrincipalUser/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });

    return response.data;
  }
}
