//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { AdminUserIssuesQueryCustomizer, AdminUserIssues, AdminUserIssuesStored } from '../data-api';
import type { AdminAdminServiceForUserIssues } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.userIssues
 */
export class AdminAdminServiceForUserIssuesImpl extends JudoAxiosService implements AdminAdminServiceForUserIssues {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getUserIssues(mask?: string): Promise<AdminUserIssuesStored> {
    const path = 'admin/Admin/userIssues/~get';
    const queryCustomizer: AdminUserIssuesQueryCustomizer | undefined = mask
      ? {
          _mask: mask,
        }
      : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
