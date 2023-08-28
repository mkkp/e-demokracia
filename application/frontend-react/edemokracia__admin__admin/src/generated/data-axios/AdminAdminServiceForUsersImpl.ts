//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { AdminUserStored, AdminUserQueryCustomizer, AdminUser } from '../data-api';
import type { AdminAdminServiceForUsers } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.users
 */
export class AdminAdminServiceForUsersImpl extends JudoAxiosService implements AdminAdminServiceForUsers {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listUsers(queryCustomizer?: AdminUserQueryCustomizer): Promise<Array<AdminUserStored>> {
    const path = 'admin/Admin/users/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
