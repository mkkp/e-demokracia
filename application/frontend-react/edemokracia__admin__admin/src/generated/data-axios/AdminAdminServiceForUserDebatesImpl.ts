//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { AdminUserDebatesQueryCustomizer, AdminUserDebatesStored, AdminUserDebates } from '../data-api';
import type { AdminAdminServiceForUserDebates } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.userDebates
 */
export class AdminAdminServiceForUserDebatesImpl extends JudoAxiosService implements AdminAdminServiceForUserDebates {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getUserDebates(mask?: string): Promise<AdminUserDebatesStored> {
    const path = 'admin/Admin/userDebates/~get';
    const queryCustomizer: AdminUserDebatesQueryCustomizer | undefined = mask
      ? {
          _mask: mask,
        }
      : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
