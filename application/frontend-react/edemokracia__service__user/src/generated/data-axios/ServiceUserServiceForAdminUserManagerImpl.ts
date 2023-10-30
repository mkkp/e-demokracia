//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { ServiceUserManagerStored, ServiceUserManager, ServiceUserManagerQueryCustomizer } from '../data-api';
import type { ServiceUserServiceForAdminUserManager } from '../data-service';

/**
 * Access Relation Service Implementation for ServiceUser.adminUserManager
 */
export class ServiceUserServiceForAdminUserManagerImpl
  extends JudoAxiosService
  implements ServiceUserServiceForAdminUserManager
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getAdminUserManager(mask?: string): Promise<ServiceUserManagerStored> {
    const path = 'service/User/adminUserManager/~get';
    const queryCustomizer: ServiceUserManagerQueryCustomizer | undefined = mask
      ? {
          _mask: mask,
        }
      : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
