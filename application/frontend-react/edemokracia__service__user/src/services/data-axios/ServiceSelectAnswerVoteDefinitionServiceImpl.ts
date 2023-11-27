//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type {
  ServiceSelectAnswerVoteEntryStored,
  CloseDebateOutputVoteDefinitionReferenceStored,
  ServiceSelectAnswerVoteDefinition,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceServiceUserStored,
  SelectAnswerVoteSelection,
  ServiceSelectAnswerVoteEntry,
  ServiceIssue,
  ServiceSelectAnswerVoteSelectionStored,
  ServiceServiceUser,
  SelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionStored,
  SelectAnswerVoteSelectionStored,
  CreateCommentInput,
  CreateArgumentInput,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceServiceUserQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  CloseDebateInput,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
  ServiceSelectAnswerVoteSelection,
} from '../data-api';
import type { ServiceSelectAnswerVoteDefinitionService } from '../data-service';

/**
 * Class Service Implementation for ServiceSelectAnswerVoteDefinition
 */
export class ServiceSelectAnswerVoteDefinitionServiceImpl
  extends JudoAxiosService
  implements ServiceSelectAnswerVoteDefinitionService
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ): Promise<ServiceSelectAnswerVoteDefinitionStored> {
    const path = '/service/SelectAnswerVoteDefinition/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async update(
    target: Partial<ServiceSelectAnswerVoteDefinitionStored>,
  ): Promise<ServiceSelectAnswerVoteDefinitionStored> {
    const path = '/service/SelectAnswerVoteDefinition/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier!,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getIssue(
    target: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored> {
    const path = '/service/SelectAnswerVoteDefinition/issue/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier!,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForIssue(
    owner?: JudoIdentifiable<ServiceSelectAnswerVoteDefinition> | ServiceSelectAnswerVoteDefinition,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>> {
    const path = '/service/SelectAnswerVoteDefinition/issue/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createProArgumentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void> {
    const path = '/service/Issue/createProArgument';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnCreateProArgumentForIssue(): Promise<CreateArgumentInput> {
    const path = '/CreateArgumentInput/~template';
    const response = await this.axios.get(this.getPathForActor(path));

    return response.data;
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createConArgumentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void> {
    const path = '/service/Issue/createConArgument';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnCreateConArgumentForIssue(): Promise<CreateArgumentInput> {
    const path = '/CreateArgumentInput/~template';
    const response = await this.axios.get(this.getPathForActor(path));

    return response.data;
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createCommentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void> {
    const path = '/service/Issue/createComment';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnCreateCommentForIssue(): Promise<CreateCommentInput> {
    const path = '/CreateCommentInput/~template';
    const response = await this.axios.get(this.getPathForActor(path));

    return response.data;
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async removeFromFavoritesForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void> {
    const path = '/service/Issue/removeFromFavorites';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
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
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored> {
    const path = '/service/Issue/closeDebate';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });

    return response.data;
  }

  async getTemplateOnCloseDebateForIssue(): Promise<CloseDebateInput> {
    const path = '/CloseDebateInput/~template';
    const response = await this.axios.get(this.getPathForActor(path));

    return response.data;
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async closeVoteForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void> {
    const path = '/service/Issue/closeVote';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async activateForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void> {
    const path = '/service/Issue/activate';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async deleteOrArchiveForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void> {
    const path = '/service/Issue/deleteOrArchive';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async addToFavoritesForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void> {
    const path = '/service/Issue/addToFavorites';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listVoteEntries(
    target: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceSelectAnswerVoteEntryStored>> {
    const path = '/service/SelectAnswerVoteDefinition/voteEntries/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier!,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForVoteEntries(
    owner?: JudoIdentifiable<ServiceSelectAnswerVoteDefinition> | ServiceSelectAnswerVoteDefinition,
    queryCustomizer?: ServiceSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceSelectAnswerVoteEntryStored>> {
    const path = '/service/SelectAnswerVoteDefinition/voteEntries/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getUserVoteEntry(
    target: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<ServiceSelectAnswerVoteEntryStored> {
    const path = '/service/SelectAnswerVoteDefinition/userVoteEntry/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier!,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForUserVoteEntry(
    owner?: JudoIdentifiable<ServiceSelectAnswerVoteDefinition> | ServiceSelectAnswerVoteDefinition,
    queryCustomizer?: ServiceSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceSelectAnswerVoteEntryStored>> {
    const path = '/service/SelectAnswerVoteDefinition/userVoteEntry/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  async getTemplateForVoteSelections(): Promise<ServiceSelectAnswerVoteSelection> {
    const path = '/service/SelectAnswerVoteSelection/~template';
    const response = await this.axios.get(this.getPathForActor(path));

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createVoteSelections(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<ServiceSelectAnswerVoteSelection>,
  ): Promise<ServiceSelectAnswerVoteSelectionStored> {
    const path = '/service/SelectAnswerVoteDefinition/~update/voteSelections/~create';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listVoteSelections(
    target: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<ServiceSelectAnswerVoteSelectionStored>> {
    const path = '/service/SelectAnswerVoteDefinition/voteSelections/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier!,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForVoteSelections(
    owner?: JudoIdentifiable<ServiceSelectAnswerVoteDefinition> | ServiceSelectAnswerVoteDefinition,
    queryCustomizer?: ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<ServiceSelectAnswerVoteSelectionStored>> {
    const path = '/service/SelectAnswerVoteDefinition/voteSelections/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async deleteVoteSelections(target: JudoIdentifiable<ServiceSelectAnswerVoteSelection>): Promise<void> {
    const path = '/service/SelectAnswerVoteSelection/~delete';
    await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getOwner(
    target: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored> {
    const path = '/service/SelectAnswerVoteDefinition/owner/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier!,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForOwner(
    owner?: JudoIdentifiable<ServiceSelectAnswerVoteDefinition> | ServiceSelectAnswerVoteDefinition,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>> {
    const path = '/service/SelectAnswerVoteDefinition/owner/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setOwner(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void> {
    const path = '/service/SelectAnswerVoteDefinition/~update/owner/~set';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async unsetOwner(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<void> {
    const path = '/service/SelectAnswerVoteDefinition/~update/owner/~unset';
    await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async vote(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void> {
    const path = '/service/SelectAnswerVoteDefinition/vote';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnVote(): Promise<SelectAnswerVoteSelection> {
    const path = '/SelectAnswerVoteSelection/~template';
    const response = await this.axios.get(this.getPathForActor(path));

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeOnVote(
    owner?: ServiceSelectAnswerVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>> {
    const path = '/service/SelectAnswerVoteDefinition/vote/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }
  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async takeBackVote(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<void> {
    const path = '/service/SelectAnswerVoteDefinition/takeBackVote';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async activate(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<void> {
    const path = '/service/SelectAnswerVoteDefinition/activate';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async addToFavorites(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<void> {
    const path = '/service/SelectAnswerVoteDefinition/addToFavorites';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async closeVote(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<void> {
    const path = '/service/SelectAnswerVoteDefinition/closeVote';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async deleteOrArchive(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<void> {
    const path = '/service/SelectAnswerVoteDefinition/deleteOrArchive';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async removeFromFavorites(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<void> {
    const path = '/service/SelectAnswerVoteDefinition/removeFromFavorites';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }
}
