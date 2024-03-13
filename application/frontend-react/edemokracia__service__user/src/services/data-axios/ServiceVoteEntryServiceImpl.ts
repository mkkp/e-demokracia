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
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionReference,
  ServiceVoteDefinitionReferenceQueryCustomizer,
  ServiceVoteDefinitionReferenceStored,
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
import type { ServiceVoteEntryService } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

const DEFAULT_COMMAND_MASK = '{}';

/**
 * Class Service Implementation for ServiceVoteEntry
 */
export class ServiceVoteEntryServiceImpl extends JudoAxiosService implements ServiceVoteEntryService {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<ServiceVoteEntry>,
    queryCustomizer?: ServiceVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceVoteEntryStored>> {
    const path = '/service/VoteEntry/~get';
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
  async delete(target: JudoIdentifiable<ServiceVoteEntry>): Promise<JudoRestResponse<void>> {
    const path = '/service/VoteEntry/~delete';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getVoteDefinition(
    target: JudoIdentifiable<ServiceVoteEntry>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored>> {
    const path = '/service/VoteEntry/voteDefinition/~get';
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
  async getRangeForVoteDefinition(
    owner?: JudoIdentifiable<ServiceVoteEntry> | ServiceVoteEntry,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>> {
    const path = '/service/VoteEntry/voteDefinition/~range';
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
  async voteRatingForVoteDefinition(
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

  async getTemplateOnVoteRatingForVoteDefinition(): Promise<JudoRestResponse<RatingVoteInput>> {
    const path = '/RatingVoteInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteSelectAnswerForVoteDefinition(
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

  async getTemplateOnVoteSelectAnswerForVoteDefinition(): Promise<JudoRestResponse<SelectAnswerVoteSelection>> {
    const path = '/SelectAnswerVoteSelection/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeOnVoteSelectAnswerForVoteDefinition(
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
  async voteYesNoForVoteDefinition(
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

  async getTemplateOnVoteYesNoForVoteDefinition(): Promise<JudoRestResponse<YesNoVoteInput>> {
    const path = '/YesNoVoteInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async voteYesNoAbstainForVoteDefinition(
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

  async getTemplateOnVoteYesNoAbstainForVoteDefinition(): Promise<JudoRestResponse<YesNoAbstainVoteInput>> {
    const path = '/YesNoAbstainVoteInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getVoteDefinitionReference(
    target: JudoIdentifiable<ServiceVoteEntry>,
    queryCustomizer?: ServiceVoteDefinitionReferenceQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionReferenceStored>> {
    const path = '/service/VoteEntry/voteDefinitionReference/~get';
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
  async getRangeForVoteDefinitionReference(
    owner?: JudoIdentifiable<ServiceVoteEntry> | ServiceVoteEntry,
    queryCustomizer?: ServiceVoteDefinitionReferenceQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionReferenceStored>>> {
    const path = '/service/VoteEntry/voteDefinitionReference/~range';
    return this.axios.post(
      this.getPathForActor(path),
      { owner: owner ?? {}, queryCustomizer: queryCustomizer ?? {} },
      headers ? { headers } : undefined,
    );
  }
}
