//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: AccessRelationServiceImpl.ts.hbs
// Template file: data-axios/AccessRelationServiceImpl.ts.hbs

import { JudoAxiosService } from './JudoAxiosService';
import type {
  AdminUserVoteDefinition,
  AdminUserVoteDefinitionQueryCustomizer,
  AdminUserVoteDefinitionStored,
} from '../data-api';
import type { AdminAdminServiceForUserVoteDefinitions } from '../data-service';

/**
 * Access Relation Service Implementation for AdminAdmin.userVoteDefinitions
 */
export class AdminAdminServiceForUserVoteDefinitionsImpl
  extends JudoAxiosService
  implements AdminAdminServiceForUserVoteDefinitions
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getUserVoteDefinitions(mask?: string): Promise<AdminUserVoteDefinitionStored> {
    const path = 'admin/Admin/userVoteDefinitions/~get';
    const queryCustomizer: AdminUserVoteDefinitionQueryCustomizer | undefined = mask
      ? {
          _mask: mask,
        }
      : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }
}
