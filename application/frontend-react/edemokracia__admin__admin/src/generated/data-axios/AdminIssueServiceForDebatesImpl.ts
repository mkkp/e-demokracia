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
  AdminIssueDebate,
  AdminIssue,
  AdminIssueDebateStored,
  AdminIssueDebateQueryCustomizer,
} from '../data-api';
import type { AdminIssueServiceForDebates } from '../data-service';

/**
 * Relation Service Implementation for AdminIssue.debates
 */
export class AdminIssueServiceForDebatesImpl extends JudoAxiosService implements AdminIssueServiceForDebates {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listDebates(
    owner: JudoIdentifiable<AdminIssue>,
    queryCustomizer?: AdminIssueDebateQueryCustomizer,
  ): Promise<Array<AdminIssueDebateStored>> {
    const path = '/admin/Issue/debates/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
