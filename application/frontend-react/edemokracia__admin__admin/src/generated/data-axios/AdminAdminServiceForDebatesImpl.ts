//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { AdminDebate, AdminDebateStored, AdminDebateQueryCustomizer } from '../data-api';
import type { AdminAdminServiceForDebates } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.debates
 */
export class AdminAdminServiceForDebatesImpl extends JudoAxiosService implements AdminAdminServiceForDebates {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listDebates(queryCustomizer?: AdminDebateQueryCustomizer): Promise<Array<AdminDebateStored>> {
    const path = 'admin/Admin/debates/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
