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
  AdminIssueStored,
  AdminYesNoAbstainVoteEntryQueryCustomizer,
  YesNoAbstainVoteInput,
  AdminYesNoAbstainVoteEntryStored,
  AdminYesNoAbstainVoteDefinitionQueryCustomizer,
  AdminYesNoAbstainVoteDefinition,
  AdminIssueQueryCustomizer,
  AdminYesNoAbstainVoteEntry,
  AdminDebate,
  AdminIssue,
  AdminDebateStored,
  AdminYesNoAbstainVoteDefinitionStored,
  AdminDebateQueryCustomizer,
} from '../data-api';
import type { AdminYesNoAbstainVoteDefinitionServiceForClass } from '../data-service';

/**
 * Class Service Implementation for AdminYesNoAbstainVoteDefinition
 */
export class AdminYesNoAbstainVoteDefinitionServiceForClassImpl
  extends JudoAxiosService
  implements AdminYesNoAbstainVoteDefinitionServiceForClass
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    queryCustomizer?: AdminYesNoAbstainVoteDefinitionQueryCustomizer,
  ): Promise<AdminYesNoAbstainVoteDefinitionStored> {
    const path = '/admin/YesNoAbstainVoteDefinition/~get';
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
  async update(target: Partial<AdminYesNoAbstainVoteDefinitionStored>): Promise<AdminYesNoAbstainVoteDefinitionStored> {
    const path = '/admin/YesNoAbstainVoteDefinition/~update';
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
    target: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<AdminDebateStored> {
    const path = '/admin/YesNoAbstainVoteDefinition/debate/~get';
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
    owner?: JudoIdentifiable<AdminYesNoAbstainVoteDefinition> | AdminYesNoAbstainVoteDefinition,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>> {
    const path = '/admin/YesNoAbstainVoteDefinition/debate/~range';
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
    target: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<AdminIssueStored> {
    const path = '/admin/YesNoAbstainVoteDefinition/issue/~get';
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
    owner?: JudoIdentifiable<AdminYesNoAbstainVoteDefinition> | AdminYesNoAbstainVoteDefinition,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>> {
    const path = '/admin/YesNoAbstainVoteDefinition/issue/~range';
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
    target: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    queryCustomizer?: AdminYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<Array<AdminYesNoAbstainVoteEntryStored>> {
    const path = '/admin/YesNoAbstainVoteDefinition/voteEntries/~list';
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
    owner?: JudoIdentifiable<AdminYesNoAbstainVoteDefinition> | AdminYesNoAbstainVoteDefinition,
    queryCustomizer?: AdminYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<Array<AdminYesNoAbstainVoteEntryStored>> {
    const path = '/admin/YesNoAbstainVoteDefinition/voteEntries/~range';
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
    target: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>,
    queryCustomizer?: AdminYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<AdminYesNoAbstainVoteEntryStored> {
    const path = '/admin/YesNoAbstainVoteDefinition/userVoteEntry/~get';
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
    owner?: JudoIdentifiable<AdminYesNoAbstainVoteDefinition> | AdminYesNoAbstainVoteDefinition,
    queryCustomizer?: AdminYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<Array<AdminYesNoAbstainVoteEntryStored>> {
    const path = '/admin/YesNoAbstainVoteDefinition/userVoteEntry/~range';
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
  async vote(owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>, target: YesNoAbstainVoteInput): Promise<void> {
    const path = '/admin/YesNoAbstainVoteDefinition/vote';
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
  async takeBackVote(owner: JudoIdentifiable<AdminYesNoAbstainVoteDefinition>): Promise<void> {
    const path = '/admin/YesNoAbstainVoteDefinition/takeBackVote';
    const response = await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }
}
