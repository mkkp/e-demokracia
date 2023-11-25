//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type {
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  YesNoAbstainVoteInputStored,
  CloseDebateOutputVoteDefinitionReferenceStored,
  CloseDebateOutputVoteDefinitionReference,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceIssueQueryCustomizer,
  YesNoAbstainVoteInput,
  CreateArgumentInputStored,
  ServiceYesNoAbstainVoteDefinition,
  ServiceIssueStored,
  ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ServiceIssue,
  CreateCommentInputStored,
  CreateCommentInput,
  CreateArgumentInput,
  CloseDebateInputStored,
  ServiceYesNoAbstainVoteEntryStored,
  ServiceYesNoAbstainVoteEntry,
  CloseDebateInput,
} from '../data-api';
import type { UserServiceForUserOwnedYesNoAbstainVoteDefinitions } from '../data-service';

/**
 * Relation Service Implementation for User.userOwnedYesNoAbstainVoteDefinitions
 */
export class UserServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl
  extends JudoAxiosService
  implements UserServiceForUserOwnedYesNoAbstainVoteDefinitions
{
  /**
   * From: relation.isListable, relation.isCollection
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceYesNoAbstainVoteDefinitionStored>> {
    const path = '/service/User/userOwnedYesNoAbstainVoteDefinitions/~list';
    const response = await this.axios.post(
      this.getPathForActor(path),
      queryCustomizer ?? {},
      owner
        ? {
            headers: {
              'X-Judo-SignedIdentifier': owner.__signedIdentifier,
            },
          }
        : undefined,
    );

    return response.data;
  }

  /**
   * From: relation.isRefreshable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ): Promise<ServiceYesNoAbstainVoteDefinitionStored> {
    const path = '/service/YesNoAbstainVoteDefinition/~get';
    const response = await this.axios.post(
      this.getPathForActor(path),
      queryCustomizer ?? {},
      owner
        ? {
            headers: {
              'X-Judo-SignedIdentifier': owner.__signedIdentifier,
            },
          }
        : undefined,
    );

    return response.data;
  }

  /**
   * From: relation.isUpdatable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async update(
    target: Partial<ServiceYesNoAbstainVoteDefinitionStored>,
  ): Promise<ServiceYesNoAbstainVoteDefinitionStored> {
    const path = '/service/YesNoAbstainVoteDefinition/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });

    return response.data;
  }

  async getIssue(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored> {
    const path = '/service/YesNoAbstainVoteDefinition/issue/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * From: targetRelation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createConArgumentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void> {
    const path = '/service/YesNoAbstainVoteDefinition/createConArgument';
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
   * From: targetRelation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createProArgumentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void> {
    const path = '/service/YesNoAbstainVoteDefinition/createProArgument';
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
   * From: targetRelation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async closeVoteForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void> {
    const path = '/service/YesNoAbstainVoteDefinition/closeVote';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  /**
   * From: targetRelation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async closeDebateForIssue(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored> {
    const path = '/service/YesNoAbstainVoteDefinition/closeDebate';
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
   * From: targetRelation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createCommentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void> {
    const path = '/service/YesNoAbstainVoteDefinition/createComment';
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
   * From: targetRelation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async deleteOrArchiveForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void> {
    const path = '/service/YesNoAbstainVoteDefinition/deleteOrArchive';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  /**
   * From: targetRelation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async addToFavoritesForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void> {
    const path = '/service/YesNoAbstainVoteDefinition/addToFavorites';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  /**
   * From: targetRelation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async removeFromFavoritesForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void> {
    const path = '/service/YesNoAbstainVoteDefinition/removeFromFavorites';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  /**
   * From: targetRelation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async activateForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void> {
    const path = '/service/YesNoAbstainVoteDefinition/activate';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  async listVoteEntries(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    queryCustomizer?: ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceYesNoAbstainVoteEntryStored>> {
    const path = '/service/YesNoAbstainVoteDefinition/voteEntries/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  async getUserVoteEntry(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    queryCustomizer?: ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<ServiceYesNoAbstainVoteEntryStored> {
    const path = '/service/YesNoAbstainVoteDefinition/userVoteEntry/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * From: relation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async vote(owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>, target: YesNoAbstainVoteInput): Promise<void> {
    const path = '/service/YesNoAbstainVoteDefinition/vote';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnVote(): Promise<YesNoAbstainVoteInput> {
    const path = '/YesNoAbstainVoteInput/~template';
    const response = await this.axios.get(this.getPathForActor(path));

    return response.data;
  }

  /**
   * From: relation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async takeBackVote(owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>): Promise<void> {
    const path = '/service/YesNoAbstainVoteDefinition/takeBackVote';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }
}
