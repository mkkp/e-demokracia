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
  AdminRatingVoteDefinition,
  AdminRatingVoteEntryQueryCustomizer,
  AdminRatingVoteEntryStored,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminRatingVoteEntry,
  AdminUser,
} from '../data-api';
import type { AdminRatingVoteDefinitionServiceForUserVoteEntry } from '../data-service';

/**
 * Relation Service Implementation for AdminRatingVoteDefinition.userVoteEntry
 */
export class AdminRatingVoteDefinitionServiceForUserVoteEntryImpl
  extends JudoAxiosService
  implements AdminRatingVoteDefinitionServiceForUserVoteEntry
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getUserVoteEntry(
    owner: JudoIdentifiable<AdminRatingVoteDefinition>,
    mask?: string,
  ): Promise<AdminRatingVoteEntryStored> {
    const path = '/admin/RatingVoteDefinition/userVoteEntry/~get';
    const queryCustomizer: AdminRatingVoteEntryQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
