//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type {
  JudoRestResponse,
  RatingVoteInput,
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  VoteDefinition,
  VoteDefinitionQueryCustomizer,
  VoteDefinitionStored,
  YesNoAbstainVoteInput,
  YesNoVoteInput,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import { X_JUDO_SIGNED_IDENTIFIER } from '../data-api/rest/headers';
import type { VoteDefinitionService } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

/**
 * Class Service Implementation for VoteDefinition
 */
export class VoteDefinitionServiceImpl extends JudoAxiosService implements VoteDefinitionService {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<VoteDefinition>,
    queryCustomizer?: VoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<VoteDefinitionStored>> {
    const path = '/VoteDefinition/~get';
    return this.axios.post(this.getPathForActor(path), queryCustomizer, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async activate(owner: JudoIdentifiable<VoteDefinition>): Promise<JudoRestResponse<void>> {
    const path = '/VoteDefinition/activate';
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
  async addToFavorites(owner: JudoIdentifiable<VoteDefinition>): Promise<JudoRestResponse<void>> {
    const path = '/VoteDefinition/addToFavorites';
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
  async closeVote(owner: JudoIdentifiable<VoteDefinition>): Promise<JudoRestResponse<void>> {
    const path = '/VoteDefinition/closeVote';
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
  async deleteOrArchive(owner: JudoIdentifiable<VoteDefinition>): Promise<JudoRestResponse<void>> {
    const path = '/VoteDefinition/deleteOrArchive';
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
  async removeFromFavorites(owner: JudoIdentifiable<VoteDefinition>): Promise<JudoRestResponse<void>> {
    const path = '/VoteDefinition/removeFromFavorites';
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
  async takeBackVote(owner: JudoIdentifiable<VoteDefinition>): Promise<JudoRestResponse<void>> {
    const path = '/VoteDefinition/takeBackVote';
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
  async voteRating(owner: JudoIdentifiable<VoteDefinition>, target: RatingVoteInput): Promise<JudoRestResponse<void>> {
    const path = '/VoteDefinition/voteRating';
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
    owner: JudoIdentifiable<VoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<JudoRestResponse<void>> {
    const path = '/VoteDefinition/voteSelectAnswer';
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
    owner?: VoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<SelectAnswerVoteSelectionStored>>> {
    const path = '/VoteDefinition/voteSelectAnswer/~range';
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
  async voteYesNo(owner: JudoIdentifiable<VoteDefinition>, target: YesNoVoteInput): Promise<JudoRestResponse<void>> {
    const path = '/VoteDefinition/voteYesNo';
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
    owner: JudoIdentifiable<VoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<JudoRestResponse<void>> {
    const path = '/VoteDefinition/voteYesNoAbstain';
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
