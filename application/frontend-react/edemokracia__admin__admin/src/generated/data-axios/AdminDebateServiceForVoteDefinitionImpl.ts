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
  AdminVoteDefinitionQueryCustomizer,
  SelectAnswerVoteSelectionQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminIssueQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  AdminDebate,
  AdminIssue,
  AdminIssueStored,
  AdminVoteDefinition,
  AdminDebateStored,
  SelectAnswerVoteSelection,
  AdminDebateQueryCustomizer,
} from '../data-api';
import type { AdminDebateServiceForVoteDefinition } from '../data-service';

/**
 * Relation Service Implementation for AdminDebate.voteDefinition
 */
export class AdminDebateServiceForVoteDefinitionImpl
  extends JudoAxiosService
  implements AdminDebateServiceForVoteDefinition
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getVoteDefinition(owner: JudoIdentifiable<AdminDebate>, mask?: string): Promise<AdminVoteDefinitionStored> {
    const path = '/admin/Debate/voteDefinition/~get';
    const queryCustomizer: AdminVoteDefinitionQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
