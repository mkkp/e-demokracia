//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type { Issue, IssueType, IssueTypeQueryCustomizer, IssueTypeStored } from '../data-api';
import type { IssueServiceForIssueType } from '../data-service';

/**
 * Relation Service Implementation for Issue.issueType
 */
export class IssueServiceForIssueTypeImpl extends JudoAxiosService implements IssueServiceForIssueType {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getIssueType(owner: JudoIdentifiable<Issue>, mask?: string): Promise<IssueTypeStored> {
    const path = '/Issue/issueType/~get';
    const queryCustomizer: IssueTypeQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
