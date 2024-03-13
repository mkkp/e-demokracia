//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type {
  CloseDebateInput,
  CloseDebateInputStored,
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceStored,
  CreateArgumentInput,
  CreateArgumentInputStored,
  CreateCommentInput,
  CreateCommentInputStored,
  JudoRestResponse,
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceComment,
  ServiceCommentQueryCustomizer,
  ServiceCommentStored,
  ServiceCon,
  ServiceConQueryCustomizer,
  ServiceConStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceDashboard,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssue,
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  ServicePro,
  ServiceProQueryCustomizer,
  ServiceProStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import { CommandQueryCustomizer } from '../data-api/common';
import { X_JUDO_MASK, X_JUDO_SIGNED_IDENTIFIER } from '../data-api/rest/headers';
import type { ServiceDashboardServiceForOwnedIssues } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

const DEFAULT_COMMAND_MASK = '{}';

/**
 * Relation Service Implementation for ServiceDashboard.ownedIssues
 */
export class ServiceDashboardServiceForOwnedIssuesImpl
  extends JudoAxiosService
  implements ServiceDashboardServiceForOwnedIssues
{
  /**
   * From: relation.isListable, relation.isCollection
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>> {
    const path = '/service/Dashboard/ownedIssues/~list';
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
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueStored>> {
    const path = '/service/Issue/~get';
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
   * From: relation.isRangeable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForOwnedIssues(
    owner: JudoIdentifiable<ServiceDashboard> | ServiceDashboard,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>> {
    const path = '/service/Dashboard/ownedIssues/~range';
    return this.axios.post(
      this.getPathForActor(path),
      {
        owner: owner ?? {},
        queryCustomizer: queryCustomizer ?? {},
      },
      headers ? { headers } : undefined,
    );
  }

  /**
   * From: relation.isUpdatable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async update(
    target: Partial<ServiceIssueStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueStored>> {
    const path = '/service/Issue/~update';
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
    owner: JudoIdentifiable<ServiceDashboard>,
    target: Partial<ServiceIssueStored>,
  ): Promise<JudoRestResponse<ServiceIssueStored>> {
    const path = '/service/Issue/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
      },
    });
  }

  /**
   * From: relation.isAddable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async addOwnedIssues(
    owner: JudoIdentifiable<ServiceDashboard>,
    selected: Array<JudoIdentifiable<ServiceIssue>>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Dashboard/~update/ownedIssues/~add';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * From: relation.isRemovable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async removeOwnedIssues(
    owner: JudoIdentifiable<ServiceDashboard>,
    selected: Array<JudoIdentifiable<ServiceIssue>>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Dashboard/~update/ownedIssues/~remove';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async listAttachments(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueAttachmentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueAttachmentStored>>> {
    const path = '/service/Issue/attachments/~list';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
        ...(headers ?? {}),
      },
    });
  }

  async getTemplateForAttachments(): Promise<JudoRestResponse<ServiceIssueAttachment>> {
    const path = '/service/IssueAttachment/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  async createAttachments(
    owner: JudoIdentifiable<ServiceIssue>,
    target: ServiceIssueAttachment,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueAttachmentStored>> {
    const path = '/service/Issue/~update/attachments/~create';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
        [X_JUDO_MASK]: queryCustomizer?._mask ?? DEFAULT_COMMAND_MASK,
      },
    });
  }

  async deleteAttachments(target: JudoIdentifiable<ServiceIssueAttachment>): Promise<JudoRestResponse<void>> {
    const path = '/service/IssueAttachment/~delete';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
      },
    });
  }

  async updateAttachments(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceIssueAttachmentStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueAttachmentStored>> {
    const path = '/service/Issue/~update/attachments/~update';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
        [X_JUDO_MASK]: queryCustomizer?._mask ?? DEFAULT_COMMAND_MASK,
      },
    });
  }

  async validateUpdateAttachments(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceIssueAttachmentStored>,
  ): Promise<JudoRestResponse<ServiceIssueAttachmentStored>> {
    const path = '/service/Issue/~update/attachments/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  async listCategories(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueCategoryStored>>> {
    const path = '/service/Issue/categories/~list';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * Form: targetRelation.isRangeable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForCategories(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueCategoryStored>>> {
    const path = '/service/Issue/categories/~range';
    return this.axios.post(
      this.getPathForActor(path),
      {
        owner: owner,
        queryCustomizer: queryCustomizer ?? {},
      },
      headers ? { headers } : undefined,
    );
  }

  async getTemplateForCategories(): Promise<JudoRestResponse<ServiceIssueCategory>> {
    const path = '/service/IssueCategory/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  async validateUpdateCategories(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceIssueCategoryStored>,
  ): Promise<JudoRestResponse<ServiceIssueCategoryStored>> {
    const path = '/service/Issue/~update/categories/~validate';
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
  async setCategories(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/~update/categories/~set';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  /**
   * From: targetRelation.isAddable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async addCategories(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/~update/categories/~add';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  /**
   * From: targetRelation.isRemovable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async removeCategories(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/~update/categories/~remove';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  async getCity(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCityStored>> {
    const path = '/service/Issue/city/~get';
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
  async getRangeForCity(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>> {
    const path = '/service/Issue/city/~range';
    return this.axios.post(
      this.getPathForActor(path),
      {
        owner: owner,
        queryCustomizer: queryCustomizer ?? {},
      },
      headers ? { headers } : undefined,
    );
  }

  async getTemplateForCity(): Promise<JudoRestResponse<ServiceCity>> {
    const path = '/service/City/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  async validateUpdateCity(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceCityStored>,
  ): Promise<JudoRestResponse<ServiceCityStored>> {
    const path = '/service/Issue/~update/city/~validate';
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
  async setCity(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: JudoIdentifiable<ServiceCity>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/~update/city/~set';
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
  async unsetCity(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/~update/city/~unset';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  async listComments(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceCommentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCommentStored>>> {
    const path = '/service/Issue/comments/~list';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
        ...(headers ?? {}),
      },
    });
  }

  async validateUpdateComments(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceCommentStored>,
  ): Promise<JudoRestResponse<ServiceCommentStored>> {
    const path = '/service/Issue/~update/comments/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  /**
   * From: targetRelation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteDownForComments(owner: JudoIdentifiable<ServiceComment>): Promise<JudoRestResponse<void>> {
    const path = '/service/Comment/voteDown';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * From: targetRelation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteUpForComments(owner: JudoIdentifiable<ServiceComment>): Promise<JudoRestResponse<void>> {
    const path = '/service/Comment/voteUp';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async listCons(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceConQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceConStored>>> {
    const path = '/service/Issue/cons/~list';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
        ...(headers ?? {}),
      },
    });
  }

  async deleteCons(target: JudoIdentifiable<ServiceCon>): Promise<JudoRestResponse<void>> {
    const path = '/service/Con/~delete';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
      },
    });
  }

  async updateCons(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceConStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceConStored>> {
    const path = '/service/Issue/~update/cons/~update';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
        [X_JUDO_MASK]: queryCustomizer?._mask ?? DEFAULT_COMMAND_MASK,
      },
    });
  }

  async validateUpdateCons(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceConStored>,
  ): Promise<JudoRestResponse<ServiceConStored>> {
    const path = '/service/Issue/~update/cons/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  /**
   * From: targetRelation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createConArgumentForCons(
    owner: JudoIdentifiable<ServiceCon>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Con/createConArgument';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnCreateConArgumentForCons(): Promise<JudoRestResponse<CreateArgumentInput>> {
    const path = '/CreateArgumentInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * From: targetRelation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createProArgumentForCons(
    owner: JudoIdentifiable<ServiceCon>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Con/createProArgument';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnCreateProArgumentForCons(): Promise<JudoRestResponse<CreateArgumentInput>> {
    const path = '/CreateArgumentInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * From: targetRelation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteDownForCons(owner: JudoIdentifiable<ServiceCon>): Promise<JudoRestResponse<void>> {
    const path = '/service/Con/voteDown';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * From: targetRelation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteUpForCons(owner: JudoIdentifiable<ServiceCon>): Promise<JudoRestResponse<void>> {
    const path = '/service/Con/voteUp';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCountyStored>> {
    const path = '/service/Issue/county/~get';
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
  async getRangeForCounty(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCountyStored>>> {
    const path = '/service/Issue/county/~range';
    return this.axios.post(
      this.getPathForActor(path),
      {
        owner: owner,
        queryCustomizer: queryCustomizer ?? {},
      },
      headers ? { headers } : undefined,
    );
  }

  async getTemplateForCounty(): Promise<JudoRestResponse<ServiceCounty>> {
    const path = '/service/County/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  async validateUpdateCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceCountyStored>,
  ): Promise<JudoRestResponse<ServiceCountyStored>> {
    const path = '/service/Issue/~update/county/~validate';
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
  async setCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/~update/county/~set';
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
  async unsetCounty(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/~update/county/~unset';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  async getCreatedBy(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>> {
    const path = '/service/Issue/createdBy/~get';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  async validateUpdateCreatedBy(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceServiceUserStored>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>> {
    const path = '/service/Issue/~update/createdBy/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  async getDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceDistrictStored>> {
    const path = '/service/Issue/district/~get';
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
  async getRangeForDistrict(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>> {
    const path = '/service/Issue/district/~range';
    return this.axios.post(
      this.getPathForActor(path),
      {
        owner: owner,
        queryCustomizer: queryCustomizer ?? {},
      },
      headers ? { headers } : undefined,
    );
  }

  async getTemplateForDistrict(): Promise<JudoRestResponse<ServiceDistrict>> {
    const path = '/service/District/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  async validateUpdateDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceDistrictStored>,
  ): Promise<JudoRestResponse<ServiceDistrictStored>> {
    const path = '/service/Issue/~update/district/~validate';
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
  async setDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/~update/district/~set';
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
  async unsetDistrict(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/~update/district/~unset';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  async getIssueType(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueTypeStored>> {
    const path = '/service/Issue/issueType/~get';
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
  async getRangeForIssueType(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueTypeStored>>> {
    const path = '/service/Issue/issueType/~range';
    return this.axios.post(
      this.getPathForActor(path),
      {
        owner: owner,
        queryCustomizer: queryCustomizer ?? {},
      },
      headers ? { headers } : undefined,
    );
  }

  async getTemplateForIssueType(): Promise<JudoRestResponse<ServiceIssueType>> {
    const path = '/service/IssueType/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  async validateUpdateIssueType(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceIssueTypeStored>,
  ): Promise<JudoRestResponse<ServiceIssueTypeStored>> {
    const path = '/service/Issue/~update/issueType/~validate';
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
  async setIssueType(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: JudoIdentifiable<ServiceIssueType>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/~update/issueType/~set';
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
  async unsetIssueType(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/~update/issueType/~unset';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  async getOwner(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>> {
    const path = '/service/Issue/owner/~get';
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
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>> {
    const path = '/service/Issue/owner/~range';
    return this.axios.post(
      this.getPathForActor(path),
      {
        owner: owner,
        queryCustomizer: queryCustomizer ?? {},
      },
      headers ? { headers } : undefined,
    );
  }

  async validateUpdateOwner(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceServiceUserStored>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>> {
    const path = '/service/Issue/~update/owner/~validate';
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
    owner: JudoIdentifiable<ServiceIssue>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/~update/owner/~set';
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
  async unsetOwner(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/~update/owner/~unset';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  async listPros(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceProQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceProStored>>> {
    const path = '/service/Issue/pros/~list';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
        ...(headers ?? {}),
      },
    });
  }

  async deletePros(target: JudoIdentifiable<ServicePro>): Promise<JudoRestResponse<void>> {
    const path = '/service/Pro/~delete';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
      },
    });
  }

  async updatePros(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceProStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceProStored>> {
    const path = '/service/Issue/~update/pros/~update';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
        [X_JUDO_MASK]: queryCustomizer?._mask ?? DEFAULT_COMMAND_MASK,
      },
    });
  }

  async validateUpdatePros(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceProStored>,
  ): Promise<JudoRestResponse<ServiceProStored>> {
    const path = '/service/Issue/~update/pros/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  /**
   * From: targetRelation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createConArgumentForPros(
    owner: JudoIdentifiable<ServicePro>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Pro/createConArgument';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnCreateConArgumentForPros(): Promise<JudoRestResponse<CreateArgumentInput>> {
    const path = '/CreateArgumentInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * From: targetRelation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createProArgumentForPros(
    owner: JudoIdentifiable<ServicePro>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Pro/createProArgument';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnCreateProArgumentForPros(): Promise<JudoRestResponse<CreateArgumentInput>> {
    const path = '/CreateArgumentInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * From: targetRelation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteDownForPros(owner: JudoIdentifiable<ServicePro>): Promise<JudoRestResponse<void>> {
    const path = '/service/Pro/voteDown';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * From: targetRelation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteUpForPros(owner: JudoIdentifiable<ServicePro>): Promise<JudoRestResponse<void>> {
    const path = '/service/Pro/voteUp';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * From: relation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async activate(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/activate';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * From: relation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async addToFavorites(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/addToFavorites';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * From: relation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async closeDebate(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<JudoRestResponse<CloseDebateOutputVoteDefinitionReferenceStored>> {
    const path = '/service/Issue/closeDebate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnCloseDebate(): Promise<JudoRestResponse<CloseDebateInput>> {
    const path = '/CloseDebateInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * From: relation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async closeVote(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/closeVote';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * From: relation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createComment(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/createComment';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnCreateComment(): Promise<JudoRestResponse<CreateCommentInput>> {
    const path = '/CreateCommentInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * From: relation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createConArgument(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/createConArgument';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnCreateConArgument(): Promise<JudoRestResponse<CreateArgumentInput>> {
    const path = '/CreateArgumentInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * From: relation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createProArgument(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/createProArgument';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnCreateProArgument(): Promise<JudoRestResponse<CreateArgumentInput>> {
    const path = '/CreateArgumentInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * From: relation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async deleteOrArchive(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/deleteOrArchive';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * From: relation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async removeFromFavorites(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/removeFromFavorites';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }
}
