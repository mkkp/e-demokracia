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
  AdminSelectAnswerVoteEntryStored,
  AdminSelectAnswerVoteEntry,
  AdminSelectAnswerVoteSelectionQueryCustomizer,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminSelectAnswerVoteDefinition,
  AdminUser,
  AdminSelectAnswerVoteSelection,
  AdminSelectAnswerVoteEntryQueryCustomizer,
  AdminSelectAnswerVoteSelectionStored,
} from '../data-api';
import type { AdminSelectAnswerVoteDefinitionServiceForUserVoteEntry } from '../data-service';

/**
 * Relation Service Implementation for AdminSelectAnswerVoteDefinition.userVoteEntry
 */
export class AdminSelectAnswerVoteDefinitionServiceForUserVoteEntryImpl
  extends JudoAxiosService
  implements AdminSelectAnswerVoteDefinitionServiceForUserVoteEntry
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getUserVoteEntry(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    mask?: string,
  ): Promise<AdminSelectAnswerVoteEntryStored> {
    const path = '/admin/SelectAnswerVoteDefinition/userVoteEntry/~get';
    const queryCustomizer: AdminSelectAnswerVoteEntryQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
