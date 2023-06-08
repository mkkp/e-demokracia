//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import { AdminDashboardQueryCustomizer, AdminDashboardStored, AdminDashboard } from '../data-api';
import { AdminAdminServiceForDashboardhome } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.dashboardhome
 */
export class AdminAdminServiceForDashboardhomeImpl extends JudoAxiosService implements AdminAdminServiceForDashboardhome {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getDashboardhome(mask?: string): Promise<AdminDashboardStored> {
    const path = 'admin/Admin/dashboardhome/~get';
    const queryCustomizer: AdminDashboardQueryCustomizer | undefined = mask
      ? {
          _mask: mask,
        }
      : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
