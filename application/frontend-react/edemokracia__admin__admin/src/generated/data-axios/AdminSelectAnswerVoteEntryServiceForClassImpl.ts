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
  AdminSelectAnswerVoteEntryStored,
  AdminSelectAnswerVoteEntry,
  AdminSelectAnswerVoteSelectionQueryCustomizer,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminUser,
  AdminSelectAnswerVoteSelection,
  AdminSelectAnswerVoteEntryQueryCustomizer,
  AdminSelectAnswerVoteSelectionStored,
} from '../data-api';
import type { AdminSelectAnswerVoteEntryServiceForClass } from '../data-service';

/**
 * Class Service Implementation for AdminSelectAnswerVoteEntry
 */
export class AdminSelectAnswerVoteEntryServiceForClassImpl
  extends JudoAxiosService
  implements AdminSelectAnswerVoteEntryServiceForClass
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<AdminSelectAnswerVoteEntry>,
    queryCustomizer?: AdminSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<AdminSelectAnswerVoteEntryStored> {
    const path = '/admin/SelectAnswerVoteEntry/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getOwner(
    target: JudoIdentifiable<AdminSelectAnswerVoteEntry>,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<AdminUserStored> {
    const path = '/admin/SelectAnswerVoteEntry/owner/~get';
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
    owner?: JudoIdentifiable<AdminSelectAnswerVoteEntry> | AdminSelectAnswerVoteEntry,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>> {
    const path = '/admin/SelectAnswerVoteEntry/owner/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getValue(
    target: JudoIdentifiable<AdminSelectAnswerVoteEntry>,
    queryCustomizer?: AdminSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<AdminSelectAnswerVoteSelectionStored> {
    const path = '/admin/SelectAnswerVoteEntry/value/~get';
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
  async getRangeForValue(
    owner?: JudoIdentifiable<AdminSelectAnswerVoteEntry> | AdminSelectAnswerVoteEntry,
    queryCustomizer?: AdminSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<AdminSelectAnswerVoteSelectionStored>> {
    const path = '/admin/SelectAnswerVoteEntry/value/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }
}
