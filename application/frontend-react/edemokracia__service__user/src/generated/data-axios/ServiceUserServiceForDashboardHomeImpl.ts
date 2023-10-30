//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { ServiceDashboardQueryCustomizer, ServiceDashboard, ServiceDashboardStored } from '../data-api';
import type { ServiceUserServiceForDashboardHome } from '../data-service';

/**
 * Access Relation Service Implementation for ServiceUser.dashboardHome
 */
export class ServiceUserServiceForDashboardHomeImpl
  extends JudoAxiosService
  implements ServiceUserServiceForDashboardHome
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getDashboardHome(mask?: string): Promise<ServiceDashboardStored> {
    const path = 'service/User/dashboardHome/~get';
    const queryCustomizer: ServiceDashboardQueryCustomizer | undefined = mask
      ? {
          _mask: mask,
        }
      : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
