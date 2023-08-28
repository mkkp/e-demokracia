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
  VoteEntryStored,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  VoteDefinitionQueryCustomizer,
  VoteEntry,
  Debate,
  VoteDefinition,
  VoteEntryQueryCustomizer,
  VoteDefinitionStored,
  SelectAnswerVoteSelection,
} from '../data-api';
import type { DebateServiceForDebateVote } from '../data-service';

/**
 * Relation Service Implementation for Debate.debateVote
 */
export class DebateServiceForDebateVoteImpl extends JudoAxiosService implements DebateServiceForDebateVote {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getDebateVote(owner: JudoIdentifiable<Debate>, mask?: string): Promise<VoteDefinitionStored> {
    const path = '/Debate/debateVote/~get';
    const queryCustomizer: VoteDefinitionQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForVoteEntries(
    owner: JudoIdentifiable<Debate> | Debate,
    queryCustomizer?: VoteEntryQueryCustomizer,
  ): Promise<Array<VoteEntryStored>> {
    const path = '/VoteEntry/voteEntries/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner,
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }
}
