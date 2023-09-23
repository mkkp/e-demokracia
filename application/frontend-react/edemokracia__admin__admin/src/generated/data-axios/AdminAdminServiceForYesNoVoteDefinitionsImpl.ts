//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type {
  AdminYesNoVoteDefinitionStored,
  AdminYesNoVoteDefinition,
  AdminYesNoVoteDefinitionQueryCustomizer,
} from '../data-api';
import type { AdminAdminServiceForYesNoVoteDefinitions } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.yesNoVoteDefinitions
 */
export class AdminAdminServiceForYesNoVoteDefinitionsImpl
  extends JudoAxiosService
  implements AdminAdminServiceForYesNoVoteDefinitions
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listYesNoVoteDefinitions(
    queryCustomizer?: AdminYesNoVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminYesNoVoteDefinitionStored>> {
    const path = 'admin/Admin/yesNoVoteDefinitions/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
