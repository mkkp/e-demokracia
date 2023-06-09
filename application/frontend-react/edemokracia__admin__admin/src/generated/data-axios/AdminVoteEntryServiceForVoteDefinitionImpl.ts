//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import {
  AdminVoteDefinitionQueryCustomizer,
  AdminIssueStored,
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminIssueQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  AdminVoteEntry,
  AdminDebate,
  AdminIssue,
  AdminVoteDefinition,
  AdminDebateStored,
  AdminDebateQueryCustomizer,
} from '../data-api';
import { AdminVoteEntryServiceForVoteDefinition } from '../data-service';

/**
 * Relation Service Implementation for AdminVoteEntry.voteDefinition
 */
export class AdminVoteEntryServiceForVoteDefinitionImpl
  extends JudoAxiosService
  implements AdminVoteEntryServiceForVoteDefinition
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getVoteDefinition(owner: JudoIdentifiable<AdminVoteEntry>, mask?: string): Promise<AdminVoteDefinitionStored> {
    const path = '/admin/VoteEntry/voteDefinition/~get';
    const queryCustomizer: AdminVoteDefinitionQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
