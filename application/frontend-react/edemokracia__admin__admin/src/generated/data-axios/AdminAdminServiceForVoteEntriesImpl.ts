//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import { AdminVoteEntry, AdminVoteEntryQueryCustomizer, AdminVoteEntryStored } from '../data-api';
import { AdminAdminServiceForVoteEntries } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.voteEntries
 */
export class AdminAdminServiceForVoteEntriesImpl extends JudoAxiosService implements AdminAdminServiceForVoteEntries {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listVoteEntries(queryCustomizer?: AdminVoteEntryQueryCustomizer): Promise<Array<AdminVoteEntryStored>> {
    const path = 'admin/Admin/voteEntries/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
