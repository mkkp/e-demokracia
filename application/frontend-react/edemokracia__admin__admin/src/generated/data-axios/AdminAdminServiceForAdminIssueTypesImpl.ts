//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { AdminIssueTypeQueryCustomizer, AdminIssueType, AdminIssueTypeStored } from '../data-api';
import type { AdminAdminServiceForAdminIssueTypes } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.adminIssueTypes
 */
export class AdminAdminServiceForAdminIssueTypesImpl
  extends JudoAxiosService
  implements AdminAdminServiceForAdminIssueTypes
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listAdminIssueTypes(queryCustomizer?: AdminIssueTypeQueryCustomizer): Promise<Array<AdminIssueTypeStored>> {
    const path = 'admin/Admin/adminIssueTypes/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createAdminIssueTypes(target: AdminIssueType): Promise<AdminIssueTypeStored> {
    const path = '/admin/Admin/adminIssueTypes/~create';
    const response = await this.axios.post(this.getPathForActor(path), target);
    return response.data;
  }
}
