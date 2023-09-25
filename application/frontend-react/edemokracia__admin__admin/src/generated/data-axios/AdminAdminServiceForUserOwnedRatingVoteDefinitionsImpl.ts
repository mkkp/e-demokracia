//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type {
  AdminRatingVoteDefinition,
  AdminRatingVoteDefinitionStored,
  AdminRatingVoteDefinitionQueryCustomizer,
} from '../data-api';
import type { AdminAdminServiceForUserOwnedRatingVoteDefinitions } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.userOwnedRatingVoteDefinitions
 */
export class AdminAdminServiceForUserOwnedRatingVoteDefinitionsImpl
  extends JudoAxiosService
  implements AdminAdminServiceForUserOwnedRatingVoteDefinitions
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listUserOwnedRatingVoteDefinitions(
    queryCustomizer?: AdminRatingVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminRatingVoteDefinitionStored>> {
    const path = 'admin/Admin/userOwnedRatingVoteDefinitions/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
