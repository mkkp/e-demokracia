//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { AdminDebate, AdminDebateStored, AdminDebateQueryCustomizer } from '../data-api';
import type { AdminAdminServiceForAdminDebates } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.adminDebates
 */
export class AdminAdminServiceForAdminDebatesImpl extends JudoAxiosService implements AdminAdminServiceForAdminDebates {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listAdminDebates(queryCustomizer?: AdminDebateQueryCustomizer): Promise<Array<AdminDebateStored>> {
    const path = 'admin/Admin/adminDebates/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
