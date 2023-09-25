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
import type { AdminAdminServiceForUserOwnedYesNoVoteDefinitions } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.userOwnedYesNoVoteDefinitions
 */
export class AdminAdminServiceForUserOwnedYesNoVoteDefinitionsImpl
  extends JudoAxiosService
  implements AdminAdminServiceForUserOwnedYesNoVoteDefinitions
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listUserOwnedYesNoVoteDefinitions(
    queryCustomizer?: AdminYesNoVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminYesNoVoteDefinitionStored>> {
    const path = 'admin/Admin/userOwnedYesNoVoteDefinitions/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
