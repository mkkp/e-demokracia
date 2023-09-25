//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type {
  AdminYesNoAbstainVoteDefinition,
  AdminYesNoAbstainVoteDefinitionQueryCustomizer,
  AdminYesNoAbstainVoteDefinitionStored,
} from '../data-api';
import type { AdminAdminServiceForUserOwnedYesNoAbstainVoteDefinitions } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.userOwnedYesNoAbstainVoteDefinitions
 */
export class AdminAdminServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl
  extends JudoAxiosService
  implements AdminAdminServiceForUserOwnedYesNoAbstainVoteDefinitions
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listUserOwnedYesNoAbstainVoteDefinitions(
    queryCustomizer?: AdminYesNoAbstainVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminYesNoAbstainVoteDefinitionStored>> {
    const path = 'admin/Admin/userOwnedYesNoAbstainVoteDefinitions/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
