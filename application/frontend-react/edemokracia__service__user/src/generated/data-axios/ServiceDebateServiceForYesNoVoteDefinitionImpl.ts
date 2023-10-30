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
  ServiceYesNoVoteEntryStored,
  ServiceDebate,
  ServiceYesNoVoteEntry,
  ServiceDebateQueryCustomizer,
  ServiceYesNoVoteDefinitionStored,
  ServiceDebateStored,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceIssue,
  ServiceYesNoVoteEntryQueryCustomizer,
} from '../data-api';
import type { ServiceDebateServiceForYesNoVoteDefinition } from '../data-service';

/**
 * Relation Service Implementation for ServiceDebate.yesNoVoteDefinition
 */
export class ServiceDebateServiceForYesNoVoteDefinitionImpl
  extends JudoAxiosService
  implements ServiceDebateServiceForYesNoVoteDefinition
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getYesNoVoteDefinition(
    owner: JudoIdentifiable<ServiceDebate>,
    mask?: string,
  ): Promise<ServiceYesNoVoteDefinitionStored> {
    const path = '/service/Debate/yesNoVoteDefinition/~get';
    const queryCustomizer: ServiceYesNoVoteDefinitionQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
