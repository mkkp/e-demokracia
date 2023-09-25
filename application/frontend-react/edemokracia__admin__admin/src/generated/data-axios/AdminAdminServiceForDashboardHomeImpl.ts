//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { AdminDashboardQueryCustomizer, AdminDashboardStored, AdminDashboard } from '../data-api';
import type { AdminAdminServiceForDashboardHome } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.dashboardHome
 */
export class AdminAdminServiceForDashboardHomeImpl extends JudoAxiosService implements AdminAdminServiceForDashboardHome {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getDashboardHome(mask?: string): Promise<AdminDashboardStored> {
    const path = 'admin/Admin/dashboardHome/~get';
    const queryCustomizer: AdminDashboardQueryCustomizer | undefined = mask
      ? {
          _mask: mask,
        }
      : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
