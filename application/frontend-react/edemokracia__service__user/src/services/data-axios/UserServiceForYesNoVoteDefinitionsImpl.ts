//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type {
  CloseDebateInput,
  CloseDebateInputStored,
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceStored,
  CreateArgumentInput,
  CreateArgumentInputStored,
  CreateCommentInput,
  CreateCommentInputStored,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceYesNoVoteDefinitionStored,
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteEntryQueryCustomizer,
  ServiceYesNoVoteEntryStored,
  YesNoVoteInput,
  YesNoVoteInputStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import type { UserServiceForYesNoVoteDefinitions } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

/**
 * Relation Service Implementation for User.yesNoVoteDefinitions
 */
export class UserServiceForYesNoVoteDefinitionsImpl
  extends JudoAxiosService
  implements UserServiceForYesNoVoteDefinitions
{
  /**
   * From: relation.isListable, relation.isCollection
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceYesNoVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceYesNoVoteDefinitionStored>> {
    const path = '/service/User/yesNoVoteDefinitions/~list';
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
    queryCustomizer?: ServiceYesNoVoteDefinitionQueryCustomizer,
  ): Promise<ServiceYesNoVoteDefinitionStored> {
    const path = '/service/YesNoVoteDefinition/~get';
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
  async update(target: Partial<ServiceYesNoVoteDefinitionStored>): Promise<ServiceYesNoVoteDefinitionStored> {
    const path = '/service/YesNoVoteDefinition/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });

    return response.data;
  }

  async getIssue(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored> {
    const path = '/service/YesNoVoteDefinition/issue/~get';
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
  async activateForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void> {
    const path = '/service/YesNoVoteDefinition/activate';
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
    const path = '/service/YesNoVoteDefinition/addToFavorites';
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
    const path = '/service/YesNoVoteDefinition/closeDebate';
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
  async closeVoteForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void> {
    const path = '/service/YesNoVoteDefinition/closeVote';
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
  async createCommentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void> {
    const path = '/service/YesNoVoteDefinition/createComment';
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
  async createConArgumentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void> {
    const path = '/service/YesNoVoteDefinition/createConArgument';
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
    const path = '/service/YesNoVoteDefinition/createProArgument';
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
  async deleteOrArchiveForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void> {
    const path = '/service/YesNoVoteDefinition/deleteOrArchive';
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
    const path = '/service/YesNoVoteDefinition/removeFromFavorites';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  async getOwner(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored> {
    const path = '/service/YesNoVoteDefinition/owner/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * Form: targetRelation.isRangeable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForOwner(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition> | ServiceYesNoVoteDefinition,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>> {
    const path = '/service/YesNoVoteDefinition/owner/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner,
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * From: targetRelation.isSetable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setOwner(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void> {
    const path = '/service/YesNoVoteDefinition/~update/owner/~set';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });
  }

  /**
   * From: targetRelation.isUnsetable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async unsetOwner(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<void> {
    const path = '/service/YesNoVoteDefinition/~update/owner/~unset';
    await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });
  }

  async getUserVoteEntry(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceYesNoVoteEntryQueryCustomizer,
  ): Promise<ServiceYesNoVoteEntryStored> {
    const path = '/service/YesNoVoteDefinition/userVoteEntry/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  async listVoteEntries(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceYesNoVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceYesNoVoteEntryStored>> {
    const path = '/service/YesNoVoteDefinition/voteEntries/~list';
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
  async activate(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<void> {
    const path = '/service/YesNoVoteDefinition/activate';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  /**
   * From: relation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async addToFavorites(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<void> {
    const path = '/service/YesNoVoteDefinition/addToFavorites';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  /**
   * From: relation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async closeVote(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<void> {
    const path = '/service/YesNoVoteDefinition/closeVote';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  /**
   * From: relation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async deleteOrArchive(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<void> {
    const path = '/service/YesNoVoteDefinition/deleteOrArchive';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  /**
   * From: relation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async removeFromFavorites(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<void> {
    const path = '/service/YesNoVoteDefinition/removeFromFavorites';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  /**
   * From: relation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async takeBackVote(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<void> {
    const path = '/service/YesNoVoteDefinition/takeBackVote';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  /**
   * From: relation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async vote(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>, target: YesNoVoteInput): Promise<void> {
    const path = '/service/YesNoVoteDefinition/vote';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateOnVote(): Promise<YesNoVoteInput> {
    const path = '/YesNoVoteInput/~template';
    const response = await this.axios.get(this.getPathForActor(path));

    return response.data;
  }
}
