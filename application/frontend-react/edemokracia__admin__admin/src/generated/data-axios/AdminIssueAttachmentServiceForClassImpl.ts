//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type {
  AdminIssueAttachment,
  AdminIssueAttachmentStored,
  AdminIssueAttachmentQueryCustomizer,
} from '../data-api';
import type { AdminIssueAttachmentServiceForClass } from '../data-service';

/**
 * Class Service Implementation for AdminIssueAttachment
 */
export class AdminIssueAttachmentServiceForClassImpl
  extends JudoAxiosService
  implements AdminIssueAttachmentServiceForClass
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getTemplate(): Promise<AdminIssueAttachment> {
    const path = '/admin/IssueAttachment/~template';
    const response = await this.axios.get(this.getPathForActor(path));

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<AdminIssueAttachment>,
    queryCustomizer?: AdminIssueAttachmentQueryCustomizer,
  ): Promise<AdminIssueAttachmentStored> {
    const path = '/admin/IssueAttachment/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async delete(target: JudoIdentifiable<AdminIssueAttachment>): Promise<void> {
    const path = '/admin/IssueAttachment/~delete';
    await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async update(target: Partial<AdminIssueAttachmentStored>): Promise<AdminIssueAttachmentStored> {
    const path = '/admin/IssueAttachment/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier!,
      },
    });

    return response.data;
  }
}
