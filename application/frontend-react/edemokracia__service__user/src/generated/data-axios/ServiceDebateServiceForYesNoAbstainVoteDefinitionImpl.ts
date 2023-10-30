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
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ServiceDebate,
  ServiceDebateQueryCustomizer,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceDebateStored,
  ServiceIssueQueryCustomizer,
  ServiceYesNoAbstainVoteDefinition,
  ServiceIssueStored,
  ServiceYesNoAbstainVoteEntryStored,
  ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ServiceYesNoAbstainVoteEntry,
  ServiceIssue,
} from '../data-api';
import type { ServiceDebateServiceForYesNoAbstainVoteDefinition } from '../data-service';

/**
 * Relation Service Implementation for ServiceDebate.yesNoAbstainVoteDefinition
 */
export class ServiceDebateServiceForYesNoAbstainVoteDefinitionImpl
  extends JudoAxiosService
  implements ServiceDebateServiceForYesNoAbstainVoteDefinition
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getYesNoAbstainVoteDefinition(
    owner: JudoIdentifiable<ServiceDebate>,
    mask?: string,
  ): Promise<ServiceYesNoAbstainVoteDefinitionStored> {
    const path = '/service/Debate/yesNoAbstainVoteDefinition/~get';
    const queryCustomizer: ServiceYesNoAbstainVoteDefinitionQueryCustomizer | undefined = mask
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
