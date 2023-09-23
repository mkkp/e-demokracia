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
  User,
  VoteEntry,
  UserQueryCustomizer,
  VoteDefinitionQueryCustomizer,
  UserStored,
  VoteDefinition,
  VoteEntryQueryCustomizer,
  VoteDefinitionStored,
} from '../data-api';
import type { AdminRatingVoteDefinitionServiceForVoteEntries } from '../data-service';

/**
 * Relation Service Implementation for AdminRatingVoteDefinition.voteEntries
 */
export class AdminRatingVoteDefinitionServiceForVoteEntriesImpl
  extends JudoAxiosService
  implements AdminRatingVoteDefinitionServiceForVoteEntries
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listVoteEntries(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    queryCustomizer?: VoteEntryQueryCustomizer,
  ): Promise<Array<VoteEntryStored>> {
    const path = '/admin/RatingVoteDefinition/voteEntries/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createVoteEntries(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    target: VoteEntry,
  ): Promise<VoteEntryStored> {
    const path = '/admin/RatingVoteDefinition/~update/voteEntries/~create';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async deleteVoteEntries(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    target: JudoIdentifiable<VoteEntry>,
  ): Promise<void> {
    const path = '/admin/RatingVoteDefinition/~update/voteEntries/~delete';
    await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async updateVoteEntries(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    target: Partial<VoteEntryStored>,
  ): Promise<VoteEntryStored> {
    const path = '/admin/RatingVoteDefinition/~update/voteEntries/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForUser(
    owner: JudoIdentifiable<AdminRatingVoteDefinition> | AdminRatingVoteDefinition,
    queryCustomizer?: UserQueryCustomizer,
  ): Promise<Array<UserStored>> {
    const path = '/User/user/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner,
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setUser(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    target: JudoIdentifiable<VoteEntry>,
    selected: JudoIdentifiable<User>,
  ): Promise<void> {
    const path = '/User/~update/user/~set';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForVoteDefinition(
    owner: JudoIdentifiable<AdminRatingVoteDefinition> | AdminRatingVoteDefinition,
    queryCustomizer?: VoteDefinitionQueryCustomizer,
  ): Promise<Array<VoteDefinitionStored>> {
    const path = '/VoteDefinition/voteDefinition/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner,
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setVoteDefinition(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    target: JudoIdentifiable<VoteEntry>,
    selected: JudoIdentifiable<VoteDefinition>,
  ): Promise<void> {
    const path = '/VoteDefinition/~update/voteDefinition/~set';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }
}
