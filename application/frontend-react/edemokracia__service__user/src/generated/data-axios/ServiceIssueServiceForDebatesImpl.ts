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
  ServiceIssueDebateQueryCustomizer,
  ServiceIssueDebateStored,
  ServiceIssue,
  ServiceIssueDebate,
} from '../data-api';
import type { ServiceIssueServiceForDebates } from '../data-service';

/**
 * Relation Service Implementation for ServiceIssue.debates
 */
export class ServiceIssueServiceForDebatesImpl extends JudoAxiosService implements ServiceIssueServiceForDebates {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listDebates(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer?: ServiceIssueDebateQueryCustomizer,
  ): Promise<Array<ServiceIssueDebateStored>> {
    const path = '/service/Issue/debates/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
