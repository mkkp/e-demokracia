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
  AdminRatingVoteDefinition,
  AdminIssueQueryCustomizer,
  AdminDebate,
  AdminRatingVoteDefinitionStored,
  VoteEntry,
  AdminIssue,
  AdminIssueStored,
  AdminRatingVoteDefinitionQueryCustomizer,
  AdminDebateStored,
  VoteEntryQueryCustomizer,
  AdminDebateQueryCustomizer,
} from '../data-api';
import type { AdminDebateServiceForRatingVoteDefinition } from '../data-service';

/**
 * Relation Service Implementation for AdminDebate.ratingVoteDefinition
 */
export class AdminDebateServiceForRatingVoteDefinitionImpl
  extends JudoAxiosService
  implements AdminDebateServiceForRatingVoteDefinition
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRatingVoteDefinition(
    owner: JudoIdentifiable<AdminDebate>,
    mask?: string,
  ): Promise<AdminRatingVoteDefinitionStored> {
    const path = '/admin/Debate/ratingVoteDefinition/~get';
    const queryCustomizer: AdminRatingVoteDefinitionQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
