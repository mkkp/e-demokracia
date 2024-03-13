//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type {
  JudoRestResponse,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoAbstainVoteEntry,
  ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ServiceYesNoAbstainVoteEntryStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import { CommandQueryCustomizer } from '../data-api/common';
import { X_JUDO_MASK, X_JUDO_SIGNED_IDENTIFIER } from '../data-api/rest/headers';
import type { UserServiceForYesNoAbstainVoteEntries } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

const DEFAULT_COMMAND_MASK = '{}';

/**
 * Relation Service Implementation for User.yesNoAbstainVoteEntries
 */
export class UserServiceForYesNoAbstainVoteEntriesImpl
  extends JudoAxiosService
  implements UserServiceForYesNoAbstainVoteEntries
{
  /**
   * From: relation.isListable, relation.isCollection
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceYesNoAbstainVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceYesNoAbstainVoteEntryStored>>> {
    const path = '/service/User/yesNoAbstainVoteEntries/~list';
    return this.axios.post(
      this.getPathForActor(path),
      queryCustomizer ?? {},
      owner
        ? {
            headers: {
              [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
              ...(headers ?? {}),
            },
          }
        : headers
          ? { headers }
          : undefined,
    );
  }

  /**
   * From: relation.isRefreshable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceYesNoAbstainVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceYesNoAbstainVoteEntryStored>> {
    const path = '/service/YesNoAbstainVoteEntry/~get';
    return this.axios.post(
      this.getPathForActor(path),
      queryCustomizer ?? {},
      owner
        ? {
            headers: {
              [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
              ...(headers ?? {}),
            },
          }
        : headers
          ? { headers }
          : undefined,
    );
  }

  /**
   * From: relation.isUpdatable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async update(
    target: Partial<ServiceYesNoAbstainVoteEntryStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceYesNoAbstainVoteEntryStored>> {
    const path = '/service/YesNoAbstainVoteEntry/~update';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
        [X_JUDO_MASK]: queryCustomizer?._mask ?? DEFAULT_COMMAND_MASK,
      },
    });
  }

  /**
   * From: relation.validateUpdate
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async validateUpdate(
    target: Partial<ServiceYesNoAbstainVoteEntryStored>,
  ): Promise<JudoRestResponse<ServiceYesNoAbstainVoteEntryStored>> {
    const path = '/service/YesNoAbstainVoteEntry/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
      },
    });
  }

  async getOwner(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteEntry>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>> {
    const path = '/service/YesNoAbstainVoteEntry/owner/~get';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  /**
   * Form: targetRelation.isRangeable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForOwner(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteEntry> | ServiceYesNoAbstainVoteEntry,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>> {
    const path = '/service/YesNoAbstainVoteEntry/owner/~range';
    return this.axios.post(
      this.getPathForActor(path),
      {
        owner: owner,
        queryCustomizer: queryCustomizer ?? {},
      },
      headers ? { headers } : undefined,
    );
  }

  async validateUpdateOwner(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteEntry>,
    target: Partial<ServiceServiceUserStored>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>> {
    const path = '/service/YesNoAbstainVoteEntry/~update/owner/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  /**
   * From: targetRelation.isSetable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setOwner(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteEntry>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/YesNoAbstainVoteEntry/~update/owner/~set';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  /**
   * From: targetRelation.isUnsetable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async unsetOwner(owner: JudoIdentifiable<ServiceYesNoAbstainVoteEntry>): Promise<JudoRestResponse<void>> {
    const path = '/service/YesNoAbstainVoteEntry/~update/owner/~unset';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }
}
