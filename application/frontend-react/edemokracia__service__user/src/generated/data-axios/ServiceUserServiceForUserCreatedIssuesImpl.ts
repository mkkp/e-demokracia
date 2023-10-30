//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { ServiceIssueQueryCustomizer, ServiceIssueStored, ServiceIssue } from '../data-api';
import type { ServiceUserServiceForUserCreatedIssues } from '../data-service';

/**
 * Access Relation Service Implementation for ServiceUser.userCreatedIssues
 */
export class ServiceUserServiceForUserCreatedIssuesImpl
  extends JudoAxiosService
  implements ServiceUserServiceForUserCreatedIssues
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listUserCreatedIssues(queryCustomizer?: ServiceIssueQueryCustomizer): Promise<Array<ServiceIssueStored>> {
    const path = 'service/User/userCreatedIssues/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
