//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type {
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
} from '../data-api';
import type { ServiceUserServiceForAdminCategories } from '../data-service';

/**
 * Access Relation Service Implementation for ServiceUser.adminCategories
 */
export class ServiceUserServiceForAdminCategoriesImpl
  extends JudoAxiosService
  implements ServiceUserServiceForAdminCategories
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listAdminCategories(
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>> {
    const path = 'service/User/adminCategories/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createAdminCategories(target: ServiceIssueCategory): Promise<ServiceIssueCategoryStored> {
    const path = '/service/User/adminCategories/~create';
    const response = await this.axios.post(this.getPathForActor(path), target);
    return response.data;
  }
}
