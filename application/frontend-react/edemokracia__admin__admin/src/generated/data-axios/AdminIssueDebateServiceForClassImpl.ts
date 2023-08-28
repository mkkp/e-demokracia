//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type { AdminIssueDebate, AdminIssueDebateStored, AdminIssueDebateQueryCustomizer } from '../data-api';
import type { AdminIssueDebateServiceForClass } from '../data-service';

/**
 * Class Service Implementation for AdminIssueDebate
 */
export class AdminIssueDebateServiceForClassImpl extends JudoAxiosService implements AdminIssueDebateServiceForClass {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<AdminIssueDebate>,
    queryCustomizer?: AdminIssueDebateQueryCustomizer,
  ): Promise<AdminIssueDebateStored> {
    const path = '/admin/IssueDebate/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });

    return response.data;
  }
}
