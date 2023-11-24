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
  ServiceYesNoVoteDefinitionStored,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceServiceUserStored,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceIssue,
  ServiceYesNoVoteDefinition,
  ServiceServiceUser,
  ServiceYesNoVoteEntryStored,
  ServiceYesNoVoteEntry,
  ServiceServiceUserQueryCustomizer,
  YesNoVoteInput,
  ServiceYesNoVoteEntryQueryCustomizer,
} from '../data-api';
import type { ServiceYesNoVoteDefinitionServiceForClass } from '../data-service';

/**
 * Class Service Implementation for ServiceYesNoVoteDefinition
 */
export class ServiceYesNoVoteDefinitionServiceForClassImpl
  extends JudoAxiosService
  implements ServiceYesNoVoteDefinitionServiceForClass
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceYesNoVoteDefinitionQueryCustomizer,
  ): Promise<ServiceYesNoVoteDefinitionStored> {
    const path = '/service/YesNoVoteDefinition/~get';
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
  async update(target: Partial<ServiceYesNoVoteDefinitionStored>): Promise<ServiceYesNoVoteDefinitionStored> {
    const path = '/service/YesNoVoteDefinition/~update';
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
    target: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored> {
    const path = '/service/YesNoVoteDefinition/issue/~get';
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
    owner?: JudoIdentifiable<ServiceYesNoVoteDefinition> | ServiceYesNoVoteDefinition,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>> {
    const path = '/service/YesNoVoteDefinition/issue/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getVoteEntries(
    target: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceYesNoVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceYesNoVoteEntryStored>> {
    const path = '/service/YesNoVoteDefinition/voteEntries/~list';
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
    owner?: JudoIdentifiable<ServiceYesNoVoteDefinition> | ServiceYesNoVoteDefinition,
    queryCustomizer?: ServiceYesNoVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceYesNoVoteEntryStored>> {
    const path = '/service/YesNoVoteDefinition/voteEntries/~range';
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
    target: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceYesNoVoteEntryQueryCustomizer,
  ): Promise<ServiceYesNoVoteEntryStored> {
    const path = '/service/YesNoVoteDefinition/userVoteEntry/~get';
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
    owner?: JudoIdentifiable<ServiceYesNoVoteDefinition> | ServiceYesNoVoteDefinition,
    queryCustomizer?: ServiceYesNoVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceYesNoVoteEntryStored>> {
    const path = '/service/YesNoVoteDefinition/userVoteEntry/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getOwner(
    target: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored> {
    const path = '/service/YesNoVoteDefinition/owner/~get';
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
    owner?: JudoIdentifiable<ServiceYesNoVoteDefinition> | ServiceYesNoVoteDefinition,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>> {
    const path = '/service/YesNoVoteDefinition/owner/~range';
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
    target: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void> {
    const path = '/service/YesNoVoteDefinition/~update/owner/~set';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async unsetOwner(target: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<void> {
    const path = '/service/YesNoVoteDefinition/~update/owner/~unset';
    await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier!,
      },
    });
  }

  /**
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

  /**
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
}