//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type {
  AdminVoteDefinitionQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminVoteEntry,
  AdminVoteEntryQueryCustomizer,
  AdminVoteDefinition,
  AdminVoteEntryStored,
  AdminDashboard,
} from '../data-api';
import type { AdminDashboardServiceForUserVoteEntries } from '../data-service';

/**
 * Relation Service Implementation for AdminDashboard.userVoteEntries
 */
export class AdminDashboardServiceForUserVoteEntriesImpl
  extends JudoAxiosService
  implements AdminDashboardServiceForUserVoteEntries
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listUserVoteEntries(
    owner: JudoIdentifiable<AdminDashboard>,
    queryCustomizer?: AdminVoteEntryQueryCustomizer,
  ): Promise<Array<AdminVoteEntryStored>> {
    const path = '/admin/Dashboard/userVoteEntries/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
