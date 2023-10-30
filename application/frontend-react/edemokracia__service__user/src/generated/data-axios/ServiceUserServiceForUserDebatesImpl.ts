//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { ServiceUserDebates, ServiceUserDebatesStored, ServiceUserDebatesQueryCustomizer } from '../data-api';
import type { ServiceUserServiceForUserDebates } from '../data-service';

/**
 * Access Relation Service Implementation for ServiceUser.userDebates
 */
export class ServiceUserServiceForUserDebatesImpl extends JudoAxiosService implements ServiceUserServiceForUserDebates {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getUserDebates(mask?: string): Promise<ServiceUserDebatesStored> {
    const path = 'service/User/userDebates/~get';
    const queryCustomizer: ServiceUserDebatesQueryCustomizer | undefined = mask
      ? {
          _mask: mask,
        }
      : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
