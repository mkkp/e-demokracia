//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { AdminUserProfileQueryCustomizer, AdminUserProfile, AdminUserProfileStored } from '../data-api';
import type { AdminAdminServiceForUserProfile } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.userProfile
 */
export class AdminAdminServiceForUserProfileImpl extends JudoAxiosService implements AdminAdminServiceForUserProfile {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getUserProfile(mask?: string): Promise<AdminUserProfileStored> {
    const path = 'admin/Admin/userProfile/~get';
    const queryCustomizer: AdminUserProfileQueryCustomizer | undefined = mask
      ? {
          _mask: mask,
        }
      : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
