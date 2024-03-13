//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type {
  JudoRestResponse,
  ServiceVoteDefinitionReference,
  ServiceVoteDefinitionReferenceQueryCustomizer,
  ServiceVoteDefinitionReferenceStored,
  ServiceVoteEntry,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import { CommandQueryCustomizer } from '../data-api/common';
import { X_JUDO_MASK, X_JUDO_SIGNED_IDENTIFIER } from '../data-api/rest/headers';
import type { ServiceVoteEntryServiceForVoteDefinitionReference } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

const DEFAULT_COMMAND_MASK = '{}';

/**
 * Relation Service Implementation for ServiceVoteEntry.voteDefinitionReference
 */
export class ServiceVoteEntryServiceForVoteDefinitionReferenceImpl
  extends JudoAxiosService
  implements ServiceVoteEntryServiceForVoteDefinitionReference
{
  /**
   * From: relation.isRefreshable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceVoteDefinitionReferenceQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionReferenceStored>> {
    const path = '/service/VoteDefinitionReference/~get';
    return this.axios.post(
      this.getPathForActor(path),
      queryCustomizer ?? {},
      owner
        ? {
            headers: {
              [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
              ...(headers ?? {}),
            },
          }
        : headers
          ? { headers }
          : undefined,
    );
  }
}
