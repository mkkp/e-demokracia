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
  AdminYesNoVoteEntry,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminYesNoVoteEntryQueryCustomizer,
  AdminUser,
} from '../data-api';
import type { AdminYesNoVoteEntryServiceForClass } from '../data-service';

/**
 * Class Service Implementation for AdminYesNoVoteEntry
 */
export class AdminYesNoVoteEntryServiceForClassImpl
  extends JudoAxiosService
  implements AdminYesNoVoteEntryServiceForClass
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<AdminYesNoVoteEntry>,
    queryCustomizer?: AdminYesNoVoteEntryQueryCustomizer,
  ): Promise<AdminYesNoVoteEntryStored> {
    const path = '/admin/YesNoVoteEntry/~get';
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
  async getUser(
    target: JudoIdentifiable<AdminYesNoVoteEntry>,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<AdminUserStored> {
    const path = '/admin/YesNoVoteEntry/user/~get';
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
  async getRangeForUser(
    owner?: JudoIdentifiable<AdminYesNoVoteEntry> | AdminYesNoVoteEntry,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>> {
    const path = '/admin/YesNoVoteEntry/user/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }
}
