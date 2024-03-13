//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type {
  JudoRestResponse,
  ServiceIssue,
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import { CommandQueryCustomizer } from '../data-api/common';
import { X_JUDO_MASK, X_JUDO_SIGNED_IDENTIFIER } from '../data-api/rest/headers';
import type { ServiceIssueServiceForAttachments } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

const DEFAULT_COMMAND_MASK = '{}';

/**
 * Relation Service Implementation for ServiceIssue.attachments
 */
export class ServiceIssueServiceForAttachmentsImpl
  extends JudoAxiosService
  implements ServiceIssueServiceForAttachments
{
  /**
   * From: relation.isListable, relation.isCollection
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueAttachmentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueAttachmentStored>>> {
    const path = '/service/Issue/attachments/~list';
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
    queryCustomizer?: ServiceIssueAttachmentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueAttachmentStored>> {
    const path = '/service/IssueAttachment/~get';
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
  async getTemplate(): Promise<JudoRestResponse<ServiceIssueAttachment>> {
    const path = '/service/IssueAttachment/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * From: relation.isCreatable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async create(
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

  /**
   * From: relation.validateCreate
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async validateCreate(
    owner: JudoIdentifiable<ServiceIssue>,
    target: ServiceIssueAttachment,
  ): Promise<JudoRestResponse<ServiceIssueAttachment>> {
    const path = '/service/Issue/~update/attachments/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  /**
   * From: relation.isDeletable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async delete(target: JudoIdentifiable<ServiceIssueAttachment>): Promise<JudoRestResponse<void>> {
    const path = '/service/IssueAttachment/~delete';
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
    target: Partial<ServiceIssueAttachmentStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueAttachmentStored>> {
    const path = '/service/IssueAttachment/~update';
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
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceIssueAttachmentStored>,
  ): Promise<JudoRestResponse<ServiceIssueAttachmentStored>> {
    const path = '/service/IssueAttachment/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
      },
    });
  }
}
