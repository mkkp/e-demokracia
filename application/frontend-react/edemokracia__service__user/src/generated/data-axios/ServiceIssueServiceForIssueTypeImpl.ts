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
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  ServiceIssue,
  ServiceIssueType,
} from '../data-api';
import type { ServiceIssueServiceForIssueType } from '../data-service';

/**
 * Relation Service Implementation for ServiceIssue.issueType
 */
export class ServiceIssueServiceForIssueTypeImpl extends JudoAxiosService implements ServiceIssueServiceForIssueType {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getIssueType(owner: JudoIdentifiable<ServiceIssue>, mask?: string): Promise<ServiceIssueTypeStored> {
    const path = '/service/Issue/issueType/~get';
    const queryCustomizer: ServiceIssueTypeQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
