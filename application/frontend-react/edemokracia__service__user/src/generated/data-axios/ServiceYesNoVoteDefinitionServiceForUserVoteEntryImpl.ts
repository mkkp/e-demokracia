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
  ServiceYesNoVoteDefinition,
  ServiceServiceUser,
  ServiceYesNoVoteEntryStored,
  ServiceYesNoVoteEntry,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoVoteEntryQueryCustomizer,
} from '../data-api';
import type { ServiceYesNoVoteDefinitionServiceForUserVoteEntry } from '../data-service';

/**
 * Relation Service Implementation for ServiceYesNoVoteDefinition.userVoteEntry
 */
export class ServiceYesNoVoteDefinitionServiceForUserVoteEntryImpl
  extends JudoAxiosService
  implements ServiceYesNoVoteDefinitionServiceForUserVoteEntry
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getUserVoteEntry(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    mask?: string,
  ): Promise<ServiceYesNoVoteEntryStored> {
    const path = '/service/YesNoVoteDefinition/userVoteEntry/~get';
    const queryCustomizer: ServiceYesNoVoteEntryQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
