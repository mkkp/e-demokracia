//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { ServiceDebate, ServiceDebateQueryCustomizer, ServiceDebateStored } from '../data-api';
import type { ServiceUserServiceForAdminDebates } from '../data-service';

/**
 * Access Relation Service Implementation for ServiceUser.adminDebates
 */
export class ServiceUserServiceForAdminDebatesImpl extends JudoAxiosService implements ServiceUserServiceForAdminDebates {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listAdminDebates(queryCustomizer?: ServiceDebateQueryCustomizer): Promise<Array<ServiceDebateStored>> {
    const path = 'service/User/adminDebates/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
