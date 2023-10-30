//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { ServiceUserProfileStored, ServiceUserProfile, ServiceUserProfileQueryCustomizer } from '../data-api';
import type { ServiceUserServiceForUserProfile } from '../data-service';

/**
 * Access Relation Service Implementation for ServiceUser.userProfile
 */
export class ServiceUserServiceForUserProfileImpl extends JudoAxiosService implements ServiceUserServiceForUserProfile {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getUserProfile(mask?: string): Promise<ServiceUserProfileStored> {
    const path = 'service/User/userProfile/~get';
    const queryCustomizer: ServiceUserProfileQueryCustomizer | undefined = mask
      ? {
          _mask: mask,
        }
      : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
