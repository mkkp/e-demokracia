//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { ServiceServiceUser, ServiceServiceUserQueryCustomizer, ServiceServiceUserStored } from '../data-api';
import type { ServiceUserServiceForAdminUsers } from '../data-service';

/**
 * Access Relation Service Implementation for ServiceUser.adminUsers
 */
export class ServiceUserServiceForAdminUsersImpl extends JudoAxiosService implements ServiceUserServiceForAdminUsers {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listAdminUsers(queryCustomizer?: ServiceServiceUserQueryCustomizer): Promise<Array<ServiceServiceUserStored>> {
    const path = 'service/User/adminUsers/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
