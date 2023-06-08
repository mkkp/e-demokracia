//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import { AdminIssue, AdminIssueTypeQueryCustomizer, AdminIssueType, AdminIssueTypeStored } from '../data-api';
import { AdminIssueServiceForIssueType } from '../data-service';

/**
 * Relation Service Implementation for AdminIssue.issueType
 */
export class AdminIssueServiceForIssueTypeImpl extends JudoAxiosService implements AdminIssueServiceForIssueType {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getIssueType(owner: JudoIdentifiable<AdminIssue>, mask?: string): Promise<AdminIssueTypeStored> {
    const path = '/admin/Issue/issueType/~get';
    const queryCustomizer: AdminIssueTypeQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
