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
  ServiceVoteDefinitionStored,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  ServiceDebate,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceDebateQueryCustomizer,
  ServiceDebateStored,
  ServiceIssueQueryCustomizer,
  ServiceVoteDefinition,
  ServiceIssueStored,
  SelectAnswerVoteSelection,
  ServiceIssue,
} from '../data-api';
import type { ServiceDebateServiceForVoteDefinition } from '../data-service';

/**
 * Relation Service Implementation for ServiceDebate.voteDefinition
 */
export class ServiceDebateServiceForVoteDefinitionImpl
  extends JudoAxiosService
  implements ServiceDebateServiceForVoteDefinition
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getVoteDefinition(owner: JudoIdentifiable<ServiceDebate>, mask?: string): Promise<ServiceVoteDefinitionStored> {
    const path = '/service/Debate/voteDefinition/~get';
    const queryCustomizer: ServiceVoteDefinitionQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
