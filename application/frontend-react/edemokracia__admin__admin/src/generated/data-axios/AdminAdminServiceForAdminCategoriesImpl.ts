//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { AdminIssueCategoryStored, AdminIssueCategory, AdminIssueCategoryQueryCustomizer } from '../data-api';
import type { AdminAdminServiceForAdminCategories } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.adminCategories
 */
export class AdminAdminServiceForAdminCategoriesImpl
  extends JudoAxiosService
  implements AdminAdminServiceForAdminCategories
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listAdminCategories(
    queryCustomizer?: AdminIssueCategoryQueryCustomizer,
  ): Promise<Array<AdminIssueCategoryStored>> {
    const path = 'admin/Admin/adminCategories/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createAdminCategories(target: AdminIssueCategory): Promise<AdminIssueCategoryStored> {
    const path = '/admin/Admin/adminCategories/~create';
    const response = await this.axios.post(this.getPathForActor(path), target);
    return response.data;
  }
}
