//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { AdminCountyQueryCustomizer, AdminCountyStored, AdminCounty } from '../data-api';
import type { AdminAdminServiceForAdminCounties } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.adminCounties
 */
export class AdminAdminServiceForAdminCountiesImpl extends JudoAxiosService implements AdminAdminServiceForAdminCounties {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listAdminCounties(queryCustomizer?: AdminCountyQueryCustomizer): Promise<Array<AdminCountyStored>> {
    const path = 'admin/Admin/adminCounties/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createAdminCounties(target: AdminCounty): Promise<AdminCountyStored> {
    const path = '/admin/Admin/adminCounties/~create';
    const response = await this.axios.post(this.getPathForActor(path), target);
    return response.data;
  }
}
