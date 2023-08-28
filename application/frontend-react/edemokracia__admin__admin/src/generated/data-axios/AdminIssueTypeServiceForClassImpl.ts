//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type { AdminIssueType, AdminIssueTypeQueryCustomizer, AdminIssueTypeStored } from '../data-api';
import type { AdminIssueTypeServiceForClass } from '../data-service';

/**
 * Class Service Implementation for AdminIssueType
 */
export class AdminIssueTypeServiceForClassImpl extends JudoAxiosService implements AdminIssueTypeServiceForClass {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getTemplate(): Promise<AdminIssueType> {
    const path = '/admin/IssueType/~template';
    const response = await this.axios.get(this.getPathForActor(path));

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<AdminIssueType>,
    queryCustomizer?: AdminIssueTypeQueryCustomizer,
  ): Promise<AdminIssueTypeStored> {
    const path = '/admin/IssueType/~get';
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
  async delete(target: JudoIdentifiable<AdminIssueType>): Promise<void> {
    const path = '/admin/IssueType/~delete';
    await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async update(target: Partial<AdminIssueTypeStored>): Promise<AdminIssueTypeStored> {
    const path = '/admin/IssueType/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier!,
      },
    });

    return response.data;
  }
}
