//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type {
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceQueryCustomizer,
  CloseDebateOutputVoteDefinitionReferenceStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import type { CloseDebateOutputVoteDefinitionReferenceService } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

/**
 * Class Service Implementation for CloseDebateOutputVoteDefinitionReference
 */
export class CloseDebateOutputVoteDefinitionReferenceServiceImpl
  extends JudoAxiosService
  implements CloseDebateOutputVoteDefinitionReferenceService
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<CloseDebateOutputVoteDefinitionReference>,
    queryCustomizer?: CloseDebateOutputVoteDefinitionReferenceQueryCustomizer,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored> {
    const path = '/CloseDebateOutputVoteDefinitionReference/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });

    return response.data;
  }
}
