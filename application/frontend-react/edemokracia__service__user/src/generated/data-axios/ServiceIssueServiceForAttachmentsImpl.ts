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
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
  ServiceIssue,
} from '../data-api';
import type { ServiceIssueServiceForAttachments } from '../data-service';

/**
 * Relation Service Implementation for ServiceIssue.attachments
 */
export class ServiceIssueServiceForAttachmentsImpl extends JudoAxiosService implements ServiceIssueServiceForAttachments {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listAttachments(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueAttachmentQueryCustomizer,
  ): Promise<Array<ServiceIssueAttachmentStored>> {
    const path = '/service/Issue/attachments/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createAttachments(
    owner: JudoIdentifiable<ServiceIssue>,
    target: ServiceIssueAttachment,
  ): Promise<ServiceIssueAttachmentStored> {
    const path = '/service/Issue/~update/attachments/~create';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async deleteAttachments(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceIssueAttachment>,
  ): Promise<void> {
    const path = '/service/Issue/~update/attachments/~delete';
    await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async updateAttachments(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceIssueAttachmentStored>,
  ): Promise<ServiceIssueAttachmentStored> {
    const path = '/service/Issue/~update/attachments/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
