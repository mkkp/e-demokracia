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
  ServiceSelectAnswerVoteEntryStored,
  ServiceServiceUser,
  ServiceSelectAnswerVoteSelectionStored,
  ServiceSelectAnswerVoteDefinition,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
  ServiceSelectAnswerVoteSelection,
} from '../data-api';
import type { ServiceSelectAnswerVoteDefinitionServiceForUserVoteEntry } from '../data-service';

/**
 * Relation Service Implementation for ServiceSelectAnswerVoteDefinition.userVoteEntry
 */
export class ServiceSelectAnswerVoteDefinitionServiceForUserVoteEntryImpl
  extends JudoAxiosService
  implements ServiceSelectAnswerVoteDefinitionServiceForUserVoteEntry
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getUserVoteEntry(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    mask?: string,
  ): Promise<ServiceSelectAnswerVoteEntryStored> {
    const path = '/service/SelectAnswerVoteDefinition/userVoteEntry/~get';
    const queryCustomizer: ServiceSelectAnswerVoteEntryQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
