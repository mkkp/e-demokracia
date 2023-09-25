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
  AdminYesNoVoteEntryStored,
  AdminYesNoVoteDefinitionStored,
  AdminYesNoVoteDefinition,
  AdminIssueStored,
  AdminYesNoVoteDefinitionQueryCustomizer,
  AdminYesNoVoteEntryQueryCustomizer,
  AdminIssueQueryCustomizer,
  AdminDebate,
  AdminIssue,
  AdminYesNoVoteEntry,
  AdminDebateStored,
  YesNoVoteInput,
  AdminDebateQueryCustomizer,
} from '../data-api';
import type { AdminYesNoVoteDefinitionServiceForClass } from '../data-service';

/**
 * Class Service Implementation for AdminYesNoVoteDefinition
 */
export class AdminYesNoVoteDefinitionServiceForClassImpl
  extends JudoAxiosService
  implements AdminYesNoVoteDefinitionServiceForClass
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<AdminYesNoVoteDefinition>,
    queryCustomizer?: AdminYesNoVoteDefinitionQueryCustomizer,
  ): Promise<AdminYesNoVoteDefinitionStored> {
    const path = '/admin/YesNoVoteDefinition/~get';
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
  async update(target: Partial<AdminYesNoVoteDefinitionStored>): Promise<AdminYesNoVoteDefinitionStored> {
    const path = '/admin/YesNoVoteDefinition/~update';
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
  async getDebate(
    target: JudoIdentifiable<AdminYesNoVoteDefinition>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<AdminDebateStored> {
    const path = '/admin/YesNoVoteDefinition/debate/~get';
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
  async getRangeForDebate(
    owner?: JudoIdentifiable<AdminYesNoVoteDefinition> | AdminYesNoVoteDefinition,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>> {
    const path = '/admin/YesNoVoteDefinition/debate/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getIssue(
    target: JudoIdentifiable<AdminYesNoVoteDefinition>,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<AdminIssueStored> {
    const path = '/admin/YesNoVoteDefinition/issue/~get';
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
    owner?: JudoIdentifiable<AdminYesNoVoteDefinition> | AdminYesNoVoteDefinition,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>> {
    const path = '/admin/YesNoVoteDefinition/issue/~range';
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
    target: JudoIdentifiable<AdminYesNoVoteDefinition>,
    queryCustomizer?: AdminYesNoVoteEntryQueryCustomizer,
  ): Promise<Array<AdminYesNoVoteEntryStored>> {
    const path = '/admin/YesNoVoteDefinition/voteEntries/~list';
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
    owner?: JudoIdentifiable<AdminYesNoVoteDefinition> | AdminYesNoVoteDefinition,
    queryCustomizer?: AdminYesNoVoteEntryQueryCustomizer,
  ): Promise<Array<AdminYesNoVoteEntryStored>> {
    const path = '/admin/YesNoVoteDefinition/voteEntries/~range';
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
    target: JudoIdentifiable<AdminYesNoVoteDefinition>,
    queryCustomizer?: AdminYesNoVoteEntryQueryCustomizer,
  ): Promise<AdminYesNoVoteEntryStored> {
    const path = '/admin/YesNoVoteDefinition/userVoteEntry/~get';
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
    owner?: JudoIdentifiable<AdminYesNoVoteDefinition> | AdminYesNoVoteDefinition,
    queryCustomizer?: AdminYesNoVoteEntryQueryCustomizer,
  ): Promise<Array<AdminYesNoVoteEntryStored>> {
    const path = '/admin/YesNoVoteDefinition/userVoteEntry/~range';
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
  async vote(owner: JudoIdentifiable<AdminYesNoVoteDefinition>, target: YesNoVoteInput): Promise<void> {
    const path = '/admin/YesNoVoteDefinition/vote';
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
  async takeBackVote(owner: JudoIdentifiable<AdminYesNoVoteDefinition>): Promise<void> {
    const path = '/admin/YesNoVoteDefinition/takeBackVote';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }
}
