//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type {
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteSelectionStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import type { ServiceSelectAnswerVoteEntryServiceForValue } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

/**
 * Relation Service Implementation for ServiceSelectAnswerVoteEntry.value
 */
export class ServiceSelectAnswerVoteEntryServiceForValueImpl
  extends JudoAxiosService
  implements ServiceSelectAnswerVoteEntryServiceForValue
{
  /**
   * From: relation.isRefreshable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<ServiceSelectAnswerVoteSelectionStored> {
    const path = '/service/SelectAnswerVoteSelection/~get';
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
   * From: relation.isRangeable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForValue(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry> | ServiceSelectAnswerVoteEntry,
    queryCustomizer?: ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<ServiceSelectAnswerVoteSelectionStored>> {
    const path = '/service/SelectAnswerVoteEntry/value/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * From: relation.target.isTemplateable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getTemplate(): Promise<ServiceSelectAnswerVoteSelection> {
    const path = '/service/SelectAnswerVoteSelection/~template';
    const response = await this.axios.get(this.getPathForActor(path));

    return response.data;
  }

  /**
   * From: relation.isSetable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setValue(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    selected: JudoIdentifiable<ServiceSelectAnswerVoteSelection>,
  ): Promise<void> {
    const path = '/service/SelectAnswerVoteEntry/~update/value/~set';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }

  /**
   * From: relation.isUnsetable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async unsetValue(owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>): Promise<void> {
    const path = '/service/SelectAnswerVoteEntry/~update/value/~unset';
    await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier!,
      },
    });
  }
}
