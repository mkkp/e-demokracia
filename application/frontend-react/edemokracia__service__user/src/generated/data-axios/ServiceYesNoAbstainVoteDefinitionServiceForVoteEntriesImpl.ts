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
  ServiceServiceUser,
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteEntryStored,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ServiceYesNoAbstainVoteEntry,
} from '../data-api';
import type { ServiceYesNoAbstainVoteDefinitionServiceForVoteEntries } from '../data-service';

/**
 * Relation Service Implementation for ServiceYesNoAbstainVoteDefinition.voteEntries
 */
export class ServiceYesNoAbstainVoteDefinitionServiceForVoteEntriesImpl
  extends JudoAxiosService
  implements ServiceYesNoAbstainVoteDefinitionServiceForVoteEntries
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listVoteEntries(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    queryCustomizer?: ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceYesNoAbstainVoteEntryStored>> {
    const path = '/service/YesNoAbstainVoteDefinition/voteEntries/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
