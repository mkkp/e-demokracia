//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type {
  CloseDebateInput,
  CloseDebateOutputVoteDefinitionReferenceStored,
  CreateArgumentInput,
  CreateCommentInput,
  JudoRestResponse,
  RatingVoteInput,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceRatingVoteDefinition,
  ServiceRatingVoteDefinitionQueryCustomizer,
  ServiceRatingVoteDefinitionStored,
  ServiceRatingVoteEntry,
  ServiceRatingVoteEntryQueryCustomizer,
  ServiceRatingVoteEntryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import { CommandQueryCustomizer } from '../data-api/common';
import { X_JUDO_MASK, X_JUDO_SIGNED_IDENTIFIER } from '../data-api/rest/headers';
import type { ServiceRatingVoteDefinitionService } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

const DEFAULT_COMMAND_MASK = '{}';

/**
 * Class Service Implementation for ServiceRatingVoteDefinition
 */
export class ServiceRatingVoteDefinitionServiceImpl
  extends JudoAxiosService
  implements ServiceRatingVoteDefinitionService
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer?: ServiceRatingVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceRatingVoteDefinitionStored>> {
    const path = '/service/RatingVoteDefinition/~get';
    return this.axios.post(this.getPathForActor(path), queryCustomizer, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async update(
    target: Partial<ServiceRatingVoteDefinitionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceRatingVoteDefinitionStored>> {
    const path = '/service/RatingVoteDefinition/~update';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier!,
        [X_JUDO_MASK]: queryCustomizer?._mask ?? DEFAULT_COMMAND_MASK,
      },
    });
  }
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async validateUpdate(
    target: Partial<ServiceRatingVoteDefinitionStored>,
  ): Promise<JudoRestResponse<ServiceRatingVoteDefinitionStored>> {
    const path = '/service/RatingVoteDefinition/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getIssue(
    target: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueStored>> {
    const path = '/service/RatingVoteDefinition/issue/~get';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier!,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForIssue(
    owner?: JudoIdentifiable<ServiceRatingVoteDefinition> | ServiceRatingVoteDefinition,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>> {
    const path = '/service/RatingVoteDefinition/issue/~range';
    return this.axios.post(
      this.getPathForActor(path),
      { owner: owner ?? {}, queryCustomizer: queryCustomizer ?? {} },
      headers ? { headers } : undefined,
    );
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async activateForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/activate';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async addToFavoritesForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/addToFavorites';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async closeDebateForIssue(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<JudoRestResponse<CloseDebateOutputVoteDefinitionReferenceStored>> {
    const path = '/service/Issue/closeDebate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnCloseDebateForIssue(): Promise<JudoRestResponse<CloseDebateInput>> {
    const path = '/CloseDebateInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async closeVoteForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/closeVote';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createCommentForIssue(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/createComment';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnCreateCommentForIssue(): Promise<JudoRestResponse<CreateCommentInput>> {
    const path = '/CreateCommentInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createConArgumentForIssue(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/createConArgument';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnCreateConArgumentForIssue(): Promise<JudoRestResponse<CreateArgumentInput>> {
    const path = '/CreateArgumentInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createProArgumentForIssue(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/createProArgument';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnCreateProArgumentForIssue(): Promise<JudoRestResponse<CreateArgumentInput>> {
    const path = '/CreateArgumentInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async deleteOrArchiveForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/deleteOrArchive';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async removeFromFavoritesForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
    const path = '/service/Issue/removeFromFavorites';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getOwner(
    target: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>> {
    const path = '/service/RatingVoteDefinition/owner/~get';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier!,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForOwner(
    owner?: JudoIdentifiable<ServiceRatingVoteDefinition> | ServiceRatingVoteDefinition,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>> {
    const path = '/service/RatingVoteDefinition/owner/~range';
    return this.axios.post(
      this.getPathForActor(path),
      { owner: owner ?? {}, queryCustomizer: queryCustomizer ?? {} },
      headers ? { headers } : undefined,
    );
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setOwner(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/RatingVoteDefinition/~update/owner/~set';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async unsetOwner(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<JudoRestResponse<void>> {
    const path = '/service/RatingVoteDefinition/~update/owner/~unset';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getUserVoteEntry(
    target: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer?: ServiceRatingVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceRatingVoteEntryStored>> {
    const path = '/service/RatingVoteDefinition/userVoteEntry/~get';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier!,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForUserVoteEntry(
    owner?: JudoIdentifiable<ServiceRatingVoteDefinition> | ServiceRatingVoteDefinition,
    queryCustomizer?: ServiceRatingVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceRatingVoteEntryStored>>> {
    const path = '/service/RatingVoteDefinition/userVoteEntry/~range';
    return this.axios.post(
      this.getPathForActor(path),
      { owner: owner ?? {}, queryCustomizer: queryCustomizer ?? {} },
      headers ? { headers } : undefined,
    );
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listVoteEntries(
    target: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer?: ServiceRatingVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceRatingVoteEntryStored>>> {
    const path = '/service/RatingVoteDefinition/voteEntries/~list';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier!,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForVoteEntries(
    owner?: JudoIdentifiable<ServiceRatingVoteDefinition> | ServiceRatingVoteDefinition,
    queryCustomizer?: ServiceRatingVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceRatingVoteEntryStored>>> {
    const path = '/service/RatingVoteDefinition/voteEntries/~range';
    return this.axios.post(
      this.getPathForActor(path),
      { owner: owner ?? {}, queryCustomizer: queryCustomizer ?? {} },
      headers ? { headers } : undefined,
    );
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async activate(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<JudoRestResponse<void>> {
    const path = '/service/RatingVoteDefinition/activate';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async addToFavorites(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<JudoRestResponse<void>> {
    const path = '/service/RatingVoteDefinition/addToFavorites';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async closeVote(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<JudoRestResponse<void>> {
    const path = '/service/RatingVoteDefinition/closeVote';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async deleteOrArchive(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<JudoRestResponse<void>> {
    const path = '/service/RatingVoteDefinition/deleteOrArchive';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async removeFromFavorites(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<JudoRestResponse<void>> {
    const path = '/service/RatingVoteDefinition/removeFromFavorites';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async takeBackVote(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<JudoRestResponse<void>> {
    const path = '/service/RatingVoteDefinition/takeBackVote';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async vote(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/RatingVoteDefinition/vote';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnVote(): Promise<JudoRestResponse<RatingVoteInput>> {
    const path = '/RatingVoteInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }
}
