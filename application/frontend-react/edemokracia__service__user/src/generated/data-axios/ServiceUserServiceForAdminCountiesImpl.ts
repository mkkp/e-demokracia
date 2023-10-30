//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { ServiceCountyStored, ServiceCountyQueryCustomizer, ServiceCounty } from '../data-api';
import type { ServiceUserServiceForAdminCounties } from '../data-service';

/**
 * Access Relation Service Implementation for ServiceUser.adminCounties
 */
export class ServiceUserServiceForAdminCountiesImpl
  extends JudoAxiosService
  implements ServiceUserServiceForAdminCounties
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listAdminCounties(queryCustomizer?: ServiceCountyQueryCustomizer): Promise<Array<ServiceCountyStored>> {
    const path = 'service/User/adminCounties/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createAdminCounties(target: ServiceCounty): Promise<ServiceCountyStored> {
    const path = '/service/User/adminCounties/~create';
    const response = await this.axios.post(this.getPathForActor(path), target);
    return response.data;
  }
}
