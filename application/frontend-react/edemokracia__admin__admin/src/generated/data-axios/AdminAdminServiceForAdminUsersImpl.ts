//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { AdminUserStored, AdminUserQueryCustomizer, AdminUser } from '../data-api';
import type { AdminAdminServiceForAdminUsers } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.adminUsers
 */
export class AdminAdminServiceForAdminUsersImpl extends JudoAxiosService implements AdminAdminServiceForAdminUsers {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listAdminUsers(queryCustomizer?: AdminUserQueryCustomizer): Promise<Array<AdminUserStored>> {
    const path = 'admin/Admin/adminUsers/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
