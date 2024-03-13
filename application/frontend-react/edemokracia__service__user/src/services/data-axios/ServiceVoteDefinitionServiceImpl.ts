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
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
  YesNoAbstainVoteInput,
  YesNoVoteInput,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import { CommandQueryCustomizer } from '../data-api/common';
import { X_JUDO_MASK, X_JUDO_SIGNED_IDENTIFIER } from '../data-api/rest/headers';
import type { ServiceVoteDefinitionService } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

const DEFAULT_COMMAND_MASK = '{}';

/**
 * Class Service Implementation for ServiceVoteDefinition
 */
export class ServiceVoteDefinitionServiceImpl extends JudoAxiosService implements ServiceVoteDefinitionService {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<ServiceVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored>> {
    const path = '/service/VoteDefinition/~get';
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
    target: Partial<ServiceVoteDefinitionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored>> {
    const path = '/service/VoteDefinition/~update';
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
    target: Partial<ServiceVoteDefinitionStored>,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored>> {
    const path = '/service/VoteDefinition/~validate';
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
    target: JudoIdentifiable<ServiceVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueStored>> {
    const path = '/service/VoteDefinition/issue/~get';
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
    owner?: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>> {
    const path = '/service/VoteDefinition/issue/~range';
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
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteRating(
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

  async getTemplateOnVoteRating(): Promise<JudoRestResponse<RatingVoteInput>> {
    const path = '/RatingVoteInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteSelectAnswer(
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

  async getTemplateOnVoteSelectAnswer(): Promise<JudoRestResponse<SelectAnswerVoteSelection>> {
    const path = '/SelectAnswerVoteSelection/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeOnVoteSelectAnswer(
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
  async voteYesNo(
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

  async getTemplateOnVoteYesNo(): Promise<JudoRestResponse<YesNoVoteInput>> {
    const path = '/YesNoVoteInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteYesNoAbstain(
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

  async getTemplateOnVoteYesNoAbstain(): Promise<JudoRestResponse<YesNoAbstainVoteInput>> {
    const path = '/YesNoAbstainVoteInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }
}
