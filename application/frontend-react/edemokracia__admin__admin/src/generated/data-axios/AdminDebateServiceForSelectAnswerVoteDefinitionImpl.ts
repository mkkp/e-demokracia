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
  SelectAnswerVoteSelectionQueryCustomizer,
  AdminIssueQueryCustomizer,
  AdminSelectAnswerVoteDefinitionStored,
  SelectAnswerVoteSelectionStored,
  AdminDebate,
  AdminIssue,
  AdminIssueStored,
  AdminSelectAnswerVoteDefinition,
  AdminDebateStored,
  AdminSelectAnswerVoteDefinitionQueryCustomizer,
  SelectAnswerVoteSelection,
  AdminDebateQueryCustomizer,
} from '../data-api';
import type { AdminDebateServiceForSelectAnswerVoteDefinition } from '../data-service';

/**
 * Relation Service Implementation for AdminDebate.selectAnswerVoteDefinition
 */
export class AdminDebateServiceForSelectAnswerVoteDefinitionImpl
  extends JudoAxiosService
  implements AdminDebateServiceForSelectAnswerVoteDefinition
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getSelectAnswerVoteDefinition(
    owner: JudoIdentifiable<AdminDebate>,
    mask?: string,
  ): Promise<AdminSelectAnswerVoteDefinitionStored> {
    const path = '/admin/Debate/selectAnswerVoteDefinition/~get';
    const queryCustomizer: AdminSelectAnswerVoteDefinitionQueryCustomizer | undefined = mask
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
