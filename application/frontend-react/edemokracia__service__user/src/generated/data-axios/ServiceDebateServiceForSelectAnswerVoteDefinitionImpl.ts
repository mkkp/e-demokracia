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
  ServiceSelectAnswerVoteEntryStored,
  ServiceDebate,
  ServiceSelectAnswerVoteDefinition,
  ServiceDebateStored,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  SelectAnswerVoteSelection,
  ServiceSelectAnswerVoteEntry,
  ServiceIssue,
  ServiceSelectAnswerVoteSelectionStored,
  SelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionStored,
  SelectAnswerVoteSelectionStored,
  ServiceDebateQueryCustomizer,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
  ServiceSelectAnswerVoteSelection,
} from '../data-api';
import type { ServiceDebateServiceForSelectAnswerVoteDefinition } from '../data-service';

/**
 * Relation Service Implementation for ServiceDebate.selectAnswerVoteDefinition
 */
export class ServiceDebateServiceForSelectAnswerVoteDefinitionImpl
  extends JudoAxiosService
  implements ServiceDebateServiceForSelectAnswerVoteDefinition
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getSelectAnswerVoteDefinition(
    owner: JudoIdentifiable<ServiceDebate>,
    mask?: string,
  ): Promise<ServiceSelectAnswerVoteDefinitionStored> {
    const path = '/service/Debate/selectAnswerVoteDefinition/~get';
    const queryCustomizer: ServiceSelectAnswerVoteDefinitionQueryCustomizer | undefined = mask
      ? { _mask: mask }
      : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
