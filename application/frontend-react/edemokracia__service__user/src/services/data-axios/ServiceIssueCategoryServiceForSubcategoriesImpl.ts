//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type {
  ServiceServiceUser,
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceIssueCategoryStored,
} from '../data-api';
import type { ServiceIssueCategoryServiceForSubcategories } from '../data-service';

/**
 * Relation Service Implementation for ServiceIssueCategory.subcategories
 */
export class ServiceIssueCategoryServiceForSubcategoriesImpl
  extends JudoAxiosService
  implements ServiceIssueCategoryServiceForSubcategories
{
  /**
   * From: relation.isListable, relation.isCollection
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>> {
    const path = '/service/IssueCategory/subcategories/~list';
    const response = await this.axios.post(
      this.getPathForActor(path),
      queryCustomizer ?? {},
      owner
        ? {
            headers: {
              'X-Judo-SignedIdentifier': owner.__signedIdentifier,
            },
          }
        : undefined,
    );

    return response.data;
  }

  /**
   * From: relation.isRefreshable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
  ): Promise<ServiceIssueCategoryStored> {
    const path = '/service/IssueCategory/~get';
    const response = await this.axios.post(
      this.getPathForActor(path),
      queryCustomizer ?? {},
      owner
        ? {
            headers: {
              'X-Judo-SignedIdentifier': owner.__signedIdentifier,
            },
          }
        : undefined,
    );

    return response.data;
  }

  /**
   * From: relation.target.isTemplateable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getTemplate(): Promise<ServiceIssueCategory> {
    const path = '/service/IssueCategory/~template';
    const response = await this.axios.get(this.getPathForActor(path));

    return response.data;
  }

  /**
   * From: relation.isCreatable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async create(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: ServiceIssueCategory,
  ): Promise<ServiceIssueCategoryStored> {
    const path = '/service/IssueCategory/~update/subcategories/~create';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * From: relation.isDeletable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async delete(target: JudoIdentifiable<ServiceIssueCategory>): Promise<void> {
    const path = '/service/IssueCategory/~delete';
    await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * From: relation.isUpdatable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async update(target: Partial<ServiceIssueCategoryStored>): Promise<ServiceIssueCategoryStored> {
    const path = '/service/IssueCategory/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });

    return response.data;
  }

  async listSubcategories(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>> {
    const path = '/service/IssueCategory/subcategories/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  async getTemplateForSubcategories(): Promise<ServiceIssueCategory> {
    const path = '/service/IssueCategory/~template';
    const response = await this.axios.get(this.getPathForActor(path));

    return response.data;
  }

  async createSubcategories(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: ServiceIssueCategory,
  ): Promise<ServiceIssueCategoryStored> {
    const path = '/service/IssueCategory/~update/subcategories/~create';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  async deleteSubcategories(target: JudoIdentifiable<ServiceIssueCategory>): Promise<void> {
    const path = '/service/IssueCategory/~delete';
    await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  async updateSubcategories(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: Partial<ServiceIssueCategoryStored>,
  ): Promise<ServiceIssueCategoryStored> {
    const path = '/service/IssueCategory/~update/subcategories/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  async getOwner(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored> {
    const path = '/service/IssueCategory/owner/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * Form: targetRelation.isRangeable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForOwner(
    owner: JudoIdentifiable<ServiceIssueCategory> | ServiceIssueCategory,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>> {
    const path = '/service/IssueCategory/owner/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner,
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * From: targetRelation.isSetable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setOwner(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void> {
    const path = '/service/IssueCategory/~update/owner/~set';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });
  }

  /**
   * From: targetRelation.isUnsetable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async unsetOwner(owner: JudoIdentifiable<ServiceIssueCategory>): Promise<void> {
    const path = '/service/IssueCategory/~update/owner/~unset';
    await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });
  }
}
