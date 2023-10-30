//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { ServiceVoteEntryQueryCustomizer, ServiceVoteEntryStored, ServiceVoteEntry } from '../data-api';
import type { ServiceUserServiceForAdminVoteEntries } from '../data-service';

/**
 * Access Relation Service Implementation for ServiceUser.adminVoteEntries
 */
export class ServiceUserServiceForAdminVoteEntriesImpl
  extends JudoAxiosService
  implements ServiceUserServiceForAdminVoteEntries
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listAdminVoteEntries(
    queryCustomizer?: ServiceVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceVoteEntryStored>> {
    const path = 'service/User/adminVoteEntries/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
