//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { AdminVoteEntry, AdminVoteEntryQueryCustomizer, AdminVoteEntryStored } from '../data-api';
import type { AdminAdminServiceForAdminVoteEntries } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.adminVoteEntries
 */
export class AdminAdminServiceForAdminVoteEntriesImpl
  extends JudoAxiosService
  implements AdminAdminServiceForAdminVoteEntries
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listAdminVoteEntries(queryCustomizer?: AdminVoteEntryQueryCustomizer): Promise<Array<AdminVoteEntryStored>> {
    const path = 'admin/Admin/adminVoteEntries/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}