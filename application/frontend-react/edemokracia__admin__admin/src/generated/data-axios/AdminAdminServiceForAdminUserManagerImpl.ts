//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { AdminUserManagerStored, AdminUserManager, AdminUserManagerQueryCustomizer } from '../data-api';
import type { AdminAdminServiceForAdminUserManager } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.adminUserManager
 */
export class AdminAdminServiceForAdminUserManagerImpl
  extends JudoAxiosService
  implements AdminAdminServiceForAdminUserManager
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getAdminUserManager(mask?: string): Promise<AdminUserManagerStored> {
    const path = 'admin/Admin/adminUserManager/~get';
    const queryCustomizer: AdminUserManagerQueryCustomizer | undefined = mask
      ? {
          _mask: mask,
        }
      : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
