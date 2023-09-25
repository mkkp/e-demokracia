//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { AdminIssueQueryCustomizer, AdminIssue, AdminIssueStored } from '../data-api';
import type { AdminAdminServiceForAdminIssues } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.adminIssues
 */
export class AdminAdminServiceForAdminIssuesImpl extends JudoAxiosService implements AdminAdminServiceForAdminIssues {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listAdminIssues(queryCustomizer?: AdminIssueQueryCustomizer): Promise<Array<AdminIssueStored>> {
    const path = 'admin/Admin/adminIssues/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
