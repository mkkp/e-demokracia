//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { AdminVoteDefinitionQueryCustomizer, AdminVoteDefinitionStored, AdminVoteDefinition } from '../data-api';
import type { AdminAdminServiceForAdminVoteDefinitions } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.adminVoteDefinitions
 */
export class AdminAdminServiceForAdminVoteDefinitionsImpl
  extends JudoAxiosService
  implements AdminAdminServiceForAdminVoteDefinitions
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listAdminVoteDefinitions(
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>> {
    const path = 'admin/Admin/adminVoteDefinitions/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
