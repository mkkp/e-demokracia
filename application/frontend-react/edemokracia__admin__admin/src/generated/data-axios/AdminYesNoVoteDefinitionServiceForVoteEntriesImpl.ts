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
import type { AdminYesNoVoteDefinitionServiceForVoteEntries } from '../data-service';

/**
 * Relation Service Implementation for AdminYesNoVoteDefinition.voteEntries
 */
export class AdminYesNoVoteDefinitionServiceForVoteEntriesImpl
  extends JudoAxiosService
  implements AdminYesNoVoteDefinitionServiceForVoteEntries
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listVoteEntries(
    owner: JudoIdentifiable<AdminYesNoVoteDefinition>,
    queryCustomizer?: AdminYesNoVoteEntryQueryCustomizer,
  ): Promise<Array<AdminYesNoVoteEntryStored>> {
    const path = '/admin/YesNoVoteDefinition/voteEntries/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
