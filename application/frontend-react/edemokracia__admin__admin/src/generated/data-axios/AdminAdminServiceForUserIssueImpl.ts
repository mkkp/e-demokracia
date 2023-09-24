//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { AdminUserIssuesQueryCustomizer, AdminUserIssues, AdminUserIssuesStored } from '../data-api';
import type { AdminAdminServiceForUserIssue } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.userIssue
 */
export class AdminAdminServiceForUserIssueImpl extends JudoAxiosService implements AdminAdminServiceForUserIssue {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getUserIssue(mask?: string): Promise<AdminUserIssuesStored> {
    const path = 'admin/Admin/userIssue/~get';
    const queryCustomizer: AdminUserIssuesQueryCustomizer | undefined = mask
      ? {
          _mask: mask,
        }
      : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
