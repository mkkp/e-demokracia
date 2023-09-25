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
  AdminYesNoAbstainVoteEntry,
  AdminYesNoAbstainVoteEntryQueryCustomizer,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminYesNoAbstainVoteEntryStored,
  AdminUser,
} from '../data-api';
import type { AdminYesNoAbstainVoteEntryServiceForClass } from '../data-service';

/**
 * Class Service Implementation for AdminYesNoAbstainVoteEntry
 */
export class AdminYesNoAbstainVoteEntryServiceForClassImpl
  extends JudoAxiosService
  implements AdminYesNoAbstainVoteEntryServiceForClass
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
    queryCustomizer?: AdminYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<AdminYesNoAbstainVoteEntryStored> {
    const path = '/admin/YesNoAbstainVoteEntry/~get';
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
    target: JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<AdminUserStored> {
    const path = '/admin/YesNoAbstainVoteEntry/owner/~get';
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
    owner?: JudoIdentifiable<AdminYesNoAbstainVoteEntry> | AdminYesNoAbstainVoteEntry,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>> {
    const path = '/admin/YesNoAbstainVoteEntry/owner/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }
}
