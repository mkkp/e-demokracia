//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type {
  AdminIssueCategoryStored,
  AdminIssue,
  AdminIssueCategory,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminUser,
  AdminIssueCategoryQueryCustomizer,
} from '../data-api';
import type { AdminIssueServiceForCategories } from '../data-service';

/**
 * Relation Service Implementation for AdminIssue.categories
 */
export class AdminIssueServiceForCategoriesImpl extends JudoAxiosService implements AdminIssueServiceForCategories {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listCategories(
    owner: JudoIdentifiable<AdminIssue>,
    queryCustomizer?: AdminIssueCategoryQueryCustomizer,
  ): Promise<Array<AdminIssueCategoryStored>> {
    const path = '/admin/Issue/categories/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForOwner(
    owner: JudoIdentifiable<AdminIssue> | AdminIssue,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>> {
    const path = '/admin/User/owner/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner,
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setOwner(
    owner: JudoIdentifiable<AdminIssue>,
    target: JudoIdentifiable<AdminIssueCategory>,
    selected: JudoIdentifiable<AdminUser>,
  ): Promise<void> {
    const path = '/admin/User/~update/owner/~set';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async unsetOwner(owner: JudoIdentifiable<AdminIssue>, target: JudoIdentifiable<AdminIssueCategory>): Promise<void> {
    const path = '/admin/User/~update/owner/~unset';
    await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }
}
