//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type {
  JudoRestResponse,
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import { CommandQueryCustomizer } from '../data-api/common';
import { X_JUDO_MASK, X_JUDO_SIGNED_IDENTIFIER } from '../data-api/rest/headers';
import type { UserServiceForAdminCategories } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

const DEFAULT_COMMAND_MASK = '{}';

/**
 * Relation Service Implementation for User.adminCategories
 */
export class UserServiceForAdminCategoriesImpl extends JudoAxiosService implements UserServiceForAdminCategories {
  /**
   * From: relation.isListable, relation.isCollection
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueCategoryStored>>> {
    const path = '/service/User/adminCategories/~list';
    return this.axios.post(
      this.getPathForActor(path),
      queryCustomizer ?? {},
      owner
        ? {
            headers: {
              [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
              ...(headers ?? {}),
            },
          }
        : headers
          ? { headers }
          : undefined,
    );
  }

  /**
   * From: relation.isRefreshable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueCategoryStored>> {
    const path = '/service/IssueCategory/~get';
    return this.axios.post(
      this.getPathForActor(path),
      queryCustomizer ?? {},
      owner
        ? {
            headers: {
              [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
              ...(headers ?? {}),
            },
          }
        : headers
          ? { headers }
          : undefined,
    );
  }

  /**
   * From: relation.target.isTemplateable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getTemplate(): Promise<JudoRestResponse<ServiceIssueCategory>> {
    const path = '/service/IssueCategory/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * From: relation.isCreatable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async create(
    target: ServiceIssueCategory,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueCategoryStored>> {
    const path = '/service/User/adminCategories/~create';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_MASK]: queryCustomizer?._mask ?? DEFAULT_COMMAND_MASK,
      },
    });
  }

  /**
   * From: relation.validateCreate
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async validateCreate(target: ServiceIssueCategory): Promise<JudoRestResponse<ServiceIssueCategory>> {
    const path = '/service/User/adminCategories/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {},
    });
  }

  /**
   * From: relation.isDeletable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async delete(target: JudoIdentifiable<ServiceIssueCategory>): Promise<JudoRestResponse<void>> {
    const path = '/service/IssueCategory/~delete';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
      },
    });
  }

  /**
   * From: relation.isUpdatable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async update(
    target: Partial<ServiceIssueCategoryStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueCategoryStored>> {
    const path = '/service/IssueCategory/~update';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
        [X_JUDO_MASK]: queryCustomizer?._mask ?? DEFAULT_COMMAND_MASK,
      },
    });
  }

  /**
   * From: relation.validateUpdate
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async validateUpdate(
    target: Partial<ServiceIssueCategoryStored>,
  ): Promise<JudoRestResponse<ServiceIssueCategoryStored>> {
    const path = '/service/IssueCategory/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
      },
    });
  }

  async getOwner(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>> {
    const path = '/service/IssueCategory/owner/~get';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  /**
   * Form: targetRelation.isRangeable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForOwner(
    owner: JudoIdentifiable<ServiceIssueCategory> | ServiceIssueCategory,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>> {
    const path = '/service/IssueCategory/owner/~range';
    return this.axios.post(
      this.getPathForActor(path),
      {
        owner: owner,
        queryCustomizer: queryCustomizer ?? {},
      },
      headers ? { headers } : undefined,
    );
  }

  async validateCreateOwner(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: ServiceServiceUser,
  ): Promise<JudoRestResponse<ServiceServiceUser>> {
    const path = '/service/IssueCategory/~update/owner/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  async validateUpdateOwner(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: Partial<ServiceServiceUserStored>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>> {
    const path = '/service/IssueCategory/~update/owner/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  /**
   * From: targetRelation.isSetable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setOwner(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/IssueCategory/~update/owner/~set';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  /**
   * From: targetRelation.isUnsetable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async unsetOwner(owner: JudoIdentifiable<ServiceIssueCategory>): Promise<JudoRestResponse<void>> {
    const path = '/service/IssueCategory/~update/owner/~unset';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  async listSubcategories(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueCategoryStored>>> {
    const path = '/service/IssueCategory/subcategories/~list';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
        ...(headers ?? {}),
      },
    });
  }

  async getTemplateForSubcategories(): Promise<JudoRestResponse<ServiceIssueCategory>> {
    const path = '/service/IssueCategory/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  async createSubcategories(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: ServiceIssueCategory,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueCategoryStored>> {
    const path = '/service/IssueCategory/~update/subcategories/~create';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
        [X_JUDO_MASK]: queryCustomizer?._mask ?? DEFAULT_COMMAND_MASK,
      },
    });
  }

  async validateCreateSubcategories(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: ServiceIssueCategory,
  ): Promise<JudoRestResponse<ServiceIssueCategory>> {
    const path = '/service/IssueCategory/~update/subcategories/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  async deleteSubcategories(target: JudoIdentifiable<ServiceIssueCategory>): Promise<JudoRestResponse<void>> {
    const path = '/service/IssueCategory/~delete';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
      },
    });
  }

  async updateSubcategories(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: Partial<ServiceIssueCategoryStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueCategoryStored>> {
    const path = '/service/IssueCategory/~update/subcategories/~update';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
        [X_JUDO_MASK]: queryCustomizer?._mask ?? DEFAULT_COMMAND_MASK,
      },
    });
  }

  async validateUpdateSubcategories(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: Partial<ServiceIssueCategoryStored>,
  ): Promise<JudoRestResponse<ServiceIssueCategoryStored>> {
    const path = '/service/IssueCategory/~update/subcategories/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }
}
