//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { ServiceIssueQueryCustomizer, ServiceIssueStored, ServiceIssue } from '../data-api';
import type { ServiceUserServiceForActiveIssues } from '../data-service';

/**
 * Access Relation Service Implementation for ServiceUser.activeIssues
 */
export class ServiceUserServiceForActiveIssuesImpl extends JudoAxiosService implements ServiceUserServiceForActiveIssues {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listActiveIssues(queryCustomizer?: ServiceIssueQueryCustomizer): Promise<Array<ServiceIssueStored>> {
    const path = 'service/User/activeIssues/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
