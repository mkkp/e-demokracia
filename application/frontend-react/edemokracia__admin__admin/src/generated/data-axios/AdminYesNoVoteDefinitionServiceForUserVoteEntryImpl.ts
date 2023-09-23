//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type {
  AdminYesNoVoteEntryStored,
  AdminYesNoVoteEntry,
  AdminYesNoVoteDefinition,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminYesNoVoteEntryQueryCustomizer,
  AdminUser,
} from '../data-api';
import type { AdminYesNoVoteDefinitionServiceForUserVoteEntry } from '../data-service';

/**
 * Relation Service Implementation for AdminYesNoVoteDefinition.userVoteEntry
 */
export class AdminYesNoVoteDefinitionServiceForUserVoteEntryImpl
  extends JudoAxiosService
  implements AdminYesNoVoteDefinitionServiceForUserVoteEntry
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getUserVoteEntry(
    owner: JudoIdentifiable<AdminYesNoVoteDefinition>,
    mask?: string,
  ): Promise<AdminYesNoVoteEntryStored> {
    const path = '/admin/YesNoVoteDefinition/userVoteEntry/~get';
    const queryCustomizer: AdminYesNoVoteEntryQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
