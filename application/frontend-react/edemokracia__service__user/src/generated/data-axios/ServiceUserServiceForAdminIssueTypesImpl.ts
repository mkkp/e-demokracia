//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { ServiceIssueTypeQueryCustomizer, ServiceIssueTypeStored, ServiceIssueType } from '../data-api';
import type { ServiceUserServiceForAdminIssueTypes } from '../data-service';

/**
 * Access Relation Service Implementation for ServiceUser.adminIssueTypes
 */
export class ServiceUserServiceForAdminIssueTypesImpl
  extends JudoAxiosService
  implements ServiceUserServiceForAdminIssueTypes
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listAdminIssueTypes(queryCustomizer?: ServiceIssueTypeQueryCustomizer): Promise<Array<ServiceIssueTypeStored>> {
    const path = 'service/User/adminIssueTypes/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createAdminIssueTypes(target: ServiceIssueType): Promise<ServiceIssueTypeStored> {
    const path = '/service/User/adminIssueTypes/~create';
    const response = await this.axios.post(this.getPathForActor(path), target);
    return response.data;
  }
}
