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
  ServiceSelectAnswerVoteSelectionStored,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteSelection,
} from '../data-api';
import type { ServiceSelectAnswerVoteEntryServiceForValue } from '../data-service';

/**
 * Relation Service Implementation for ServiceSelectAnswerVoteEntry.value
 */
export class ServiceSelectAnswerVoteEntryServiceForValueImpl
  extends JudoAxiosService
  implements ServiceSelectAnswerVoteEntryServiceForValue
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getValue(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    mask?: string,
  ): Promise<ServiceSelectAnswerVoteSelectionStored> {
    const path = '/service/SelectAnswerVoteEntry/value/~get';
    const queryCustomizer: ServiceSelectAnswerVoteSelectionQueryCustomizer | undefined = mask
      ? { _mask: mask }
      : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
