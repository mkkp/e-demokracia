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
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  ServiceDashboard,
  ServiceDashboardQueryCustomizer,
  ServiceDashboardStored,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
  ServiceVoteEntry,
  ServiceVoteEntryQueryCustomizer,
  ServiceVoteEntryStored,
  YesNoAbstainVoteInput,
  YesNoVoteInput,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import { CommandQueryCustomizer } from '../data-api/common';
import { X_JUDO_MASK, X_JUDO_SIGNED_IDENTIFIER } from '../data-api/rest/headers';
import type { ServiceDashboardService } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

const DEFAULT_COMMAND_MASK = '{}';

/**
 * Class Service Implementation for ServiceDashboard
 */
export class ServiceDashboardServiceImpl extends JudoAxiosService implements ServiceDashboardService {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceDashboardQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceDashboardStored>> {
    const path = '/service/Dashboard/~get';
    return this.axios.post(this.getPathForActor(path), queryCustomizer, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listFavoriteIssues(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>> {
    const path = '/service/Dashboard/favoriteIssues/~list';
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
  async getRangeForFavoriteIssues(
    owner?: JudoIdentifiable<ServiceDashboard> | ServiceDashboard,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>> {
    const path = '/service/Dashboard/favoriteIssues/~range';
    return this.axios.post(
      this.getPathForActor(path),
      { owner: owner ?? {}, queryCustomizer: queryCustomizer ?? {} },
      headers ? { headers } : undefined,
    );
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async addFavoriteIssues(
    owner: JudoIdentifiable<ServiceDashboard>,
    selected: Array<JudoIdentifiable<ServiceIssue>>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Dashboard/~update/favoriteIssues/~add';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async removeFavoriteIssues(
    owner: JudoIdentifiable<ServiceDashboard>,
    selected: Array<JudoIdentifiable<ServiceIssue>>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Dashboard/~update/favoriteIssues/~remove';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async activateForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
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
  async addToFavoritesForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
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
  async closeDebateForFavoriteIssues(
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

  async getTemplateOnCloseDebateForFavoriteIssues(): Promise<JudoRestResponse<CloseDebateInput>> {
    const path = '/CloseDebateInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async closeVoteForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
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
  async createCommentForFavoriteIssues(
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

  async getTemplateOnCreateCommentForFavoriteIssues(): Promise<JudoRestResponse<CreateCommentInput>> {
    const path = '/CreateCommentInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createConArgumentForFavoriteIssues(
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

  async getTemplateOnCreateConArgumentForFavoriteIssues(): Promise<JudoRestResponse<CreateArgumentInput>> {
    const path = '/CreateArgumentInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createProArgumentForFavoriteIssues(
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

  async getTemplateOnCreateProArgumentForFavoriteIssues(): Promise<JudoRestResponse<CreateArgumentInput>> {
    const path = '/CreateArgumentInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async deleteOrArchiveForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
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
  async removeFromFavoritesForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
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
  async listFavoriteVoteDefinitions(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>> {
    const path = '/service/Dashboard/favoriteVoteDefinitions/~list';
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
  async getRangeForFavoriteVoteDefinitions(
    owner?: JudoIdentifiable<ServiceDashboard> | ServiceDashboard,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>> {
    const path = '/service/Dashboard/favoriteVoteDefinitions/~range';
    return this.axios.post(
      this.getPathForActor(path),
      { owner: owner ?? {}, queryCustomizer: queryCustomizer ?? {} },
      headers ? { headers } : undefined,
    );
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async addFavoriteVoteDefinitions(
    owner: JudoIdentifiable<ServiceDashboard>,
    selected: Array<JudoIdentifiable<ServiceVoteDefinition>>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Dashboard/~update/favoriteVoteDefinitions/~add';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async removeFavoriteVoteDefinitions(
    owner: JudoIdentifiable<ServiceDashboard>,
    selected: Array<JudoIdentifiable<ServiceVoteDefinition>>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Dashboard/~update/favoriteVoteDefinitions/~remove';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteRatingForFavoriteVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/VoteDefinition/voteRating';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnVoteRatingForFavoriteVoteDefinitions(): Promise<JudoRestResponse<RatingVoteInput>> {
    const path = '/RatingVoteInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteSelectAnswerForFavoriteVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/VoteDefinition/voteSelectAnswer';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnVoteSelectAnswerForFavoriteVoteDefinitions(): Promise<
    JudoRestResponse<SelectAnswerVoteSelection>
  > {
    const path = '/SelectAnswerVoteSelection/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeOnVoteSelectAnswerForFavoriteVoteDefinitions(
    owner?: ServiceVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<SelectAnswerVoteSelectionStored>>> {
    const path = '/service/VoteDefinition/voteSelectAnswer/~range';
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
  async voteYesNoForFavoriteVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/VoteDefinition/voteYesNo';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnVoteYesNoForFavoriteVoteDefinitions(): Promise<JudoRestResponse<YesNoVoteInput>> {
    const path = '/YesNoVoteInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteYesNoAbstainForFavoriteVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/VoteDefinition/voteYesNoAbstain';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnVoteYesNoAbstainForFavoriteVoteDefinitions(): Promise<JudoRestResponse<YesNoAbstainVoteInput>> {
    const path = '/YesNoAbstainVoteInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listOwnedIssues(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>> {
    const path = '/service/Dashboard/ownedIssues/~list';
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
  async getRangeForOwnedIssues(
    owner?: JudoIdentifiable<ServiceDashboard> | ServiceDashboard,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>> {
    const path = '/service/Dashboard/ownedIssues/~range';
    return this.axios.post(
      this.getPathForActor(path),
      { owner: owner ?? {}, queryCustomizer: queryCustomizer ?? {} },
      headers ? { headers } : undefined,
    );
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async addOwnedIssues(
    owner: JudoIdentifiable<ServiceDashboard>,
    selected: Array<JudoIdentifiable<ServiceIssue>>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Dashboard/~update/ownedIssues/~add';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async removeOwnedIssues(
    owner: JudoIdentifiable<ServiceDashboard>,
    selected: Array<JudoIdentifiable<ServiceIssue>>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Dashboard/~update/ownedIssues/~remove';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async activateForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
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
  async addToFavoritesForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
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
  async closeDebateForOwnedIssues(
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

  async getTemplateOnCloseDebateForOwnedIssues(): Promise<JudoRestResponse<CloseDebateInput>> {
    const path = '/CloseDebateInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async closeVoteForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
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
  async createCommentForOwnedIssues(
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

  async getTemplateOnCreateCommentForOwnedIssues(): Promise<JudoRestResponse<CreateCommentInput>> {
    const path = '/CreateCommentInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createConArgumentForOwnedIssues(
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

  async getTemplateOnCreateConArgumentForOwnedIssues(): Promise<JudoRestResponse<CreateArgumentInput>> {
    const path = '/CreateArgumentInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createProArgumentForOwnedIssues(
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

  async getTemplateOnCreateProArgumentForOwnedIssues(): Promise<JudoRestResponse<CreateArgumentInput>> {
    const path = '/CreateArgumentInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async deleteOrArchiveForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
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
  async removeFromFavoritesForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>> {
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
  async listOwnedVoteDefinitions(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>> {
    const path = '/service/Dashboard/ownedVoteDefinitions/~list';
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
  async getRangeForOwnedVoteDefinitions(
    owner?: JudoIdentifiable<ServiceDashboard> | ServiceDashboard,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>> {
    const path = '/service/Dashboard/ownedVoteDefinitions/~range';
    return this.axios.post(
      this.getPathForActor(path),
      { owner: owner ?? {}, queryCustomizer: queryCustomizer ?? {} },
      headers ? { headers } : undefined,
    );
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async addOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceDashboard>,
    selected: Array<JudoIdentifiable<ServiceVoteDefinition>>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Dashboard/~update/ownedVoteDefinitions/~add';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async removeOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceDashboard>,
    selected: Array<JudoIdentifiable<ServiceVoteDefinition>>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/Dashboard/~update/ownedVoteDefinitions/~remove';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteRatingForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/VoteDefinition/voteRating';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnVoteRatingForOwnedVoteDefinitions(): Promise<JudoRestResponse<RatingVoteInput>> {
    const path = '/RatingVoteInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteSelectAnswerForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/VoteDefinition/voteSelectAnswer';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnVoteSelectAnswerForOwnedVoteDefinitions(): Promise<JudoRestResponse<SelectAnswerVoteSelection>> {
    const path = '/SelectAnswerVoteSelection/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeOnVoteSelectAnswerForOwnedVoteDefinitions(
    owner?: ServiceVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<SelectAnswerVoteSelectionStored>>> {
    const path = '/service/VoteDefinition/voteSelectAnswer/~range';
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
  async voteYesNoForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/VoteDefinition/voteYesNo';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnVoteYesNoForOwnedVoteDefinitions(): Promise<JudoRestResponse<YesNoVoteInput>> {
    const path = '/YesNoVoteInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteYesNoAbstainForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/VoteDefinition/voteYesNoAbstain';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnVoteYesNoAbstainForOwnedVoteDefinitions(): Promise<JudoRestResponse<YesNoAbstainVoteInput>> {
    const path = '/YesNoAbstainVoteInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listUserVoteEntries(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteEntryStored>>> {
    const path = '/service/Dashboard/userVoteEntries/~list';
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
  async getRangeForUserVoteEntries(
    owner?: JudoIdentifiable<ServiceDashboard> | ServiceDashboard,
    queryCustomizer?: ServiceVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteEntryStored>>> {
    const path = '/service/Dashboard/userVoteEntries/~range';
    return this.axios.post(
      this.getPathForActor(path),
      { owner: owner ?? {}, queryCustomizer: queryCustomizer ?? {} },
      headers ? { headers } : undefined,
    );
  }
}
