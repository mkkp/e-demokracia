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
import type { AdminSelectAnswerVoteDefinitionServiceForVoteEntries } from '../data-service';

/**
 * Relation Service Implementation for AdminSelectAnswerVoteDefinition.voteEntries
 */
export class AdminSelectAnswerVoteDefinitionServiceForVoteEntriesImpl
  extends JudoAxiosService
  implements AdminSelectAnswerVoteDefinitionServiceForVoteEntries
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listVoteEntries(
    owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
    queryCustomizer?: AdminSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<Array<AdminSelectAnswerVoteEntryStored>> {
    const path = '/admin/SelectAnswerVoteDefinition/voteEntries/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
