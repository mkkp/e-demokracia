//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { ServiceUserIssuesStored, ServiceUserIssuesQueryCustomizer, ServiceUserIssues } from '../data-api';
import type { ServiceUserServiceForUserIssues } from '../data-service';

/**
 * Access Relation Service Implementation for ServiceUser.userIssues
 */
export class ServiceUserServiceForUserIssuesImpl extends JudoAxiosService implements ServiceUserServiceForUserIssues {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getUserIssues(mask?: string): Promise<ServiceUserIssuesStored> {
    const path = 'service/User/userIssues/~get';
    const queryCustomizer: ServiceUserIssuesQueryCustomizer | undefined = mask
      ? {
          _mask: mask,
        }
      : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
