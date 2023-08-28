//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type { AdminVoteDefinitionQueryCustomizer, AdminVoteDefinitionStored, AdminVoteDefinition } from '../data-api';
import type { AdminAdminServiceForVoteDefinitions } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.voteDefinitions
 */
export class AdminAdminServiceForVoteDefinitionsImpl
  extends JudoAxiosService
  implements AdminAdminServiceForVoteDefinitions
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listVoteDefinitions(
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>> {
    const path = 'admin/Admin/voteDefinitions/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
