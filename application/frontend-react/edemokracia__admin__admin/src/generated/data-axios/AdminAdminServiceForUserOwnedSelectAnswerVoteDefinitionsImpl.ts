//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type {
  AdminSelectAnswerVoteDefinitionStored,
  AdminSelectAnswerVoteDefinition,
  AdminSelectAnswerVoteDefinitionQueryCustomizer,
} from '../data-api';
import type { AdminAdminServiceForUserOwnedSelectAnswerVoteDefinitions } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.userOwnedSelectAnswerVoteDefinitions
 */
export class AdminAdminServiceForUserOwnedSelectAnswerVoteDefinitionsImpl
  extends JudoAxiosService
  implements AdminAdminServiceForUserOwnedSelectAnswerVoteDefinitions
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listUserOwnedSelectAnswerVoteDefinitions(
    queryCustomizer?: AdminSelectAnswerVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminSelectAnswerVoteDefinitionStored>> {
    const path = 'admin/Admin/userOwnedSelectAnswerVoteDefinitions/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
