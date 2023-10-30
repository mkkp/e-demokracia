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
  ServiceSimpleVoteStored,
  ServiceServiceUser,
  ServiceSimpleVote,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceSimpleVoteQueryCustomizer,
  ServiceCon,
} from '../data-api';
import type { ServiceConServiceForVotes } from '../data-service';

/**
 * Relation Service Implementation for ServiceCon.votes
 */
export class ServiceConServiceForVotesImpl extends JudoAxiosService implements ServiceConServiceForVotes {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listVotes(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
  ): Promise<Array<ServiceSimpleVoteStored>> {
    const path = '/service/Con/votes/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
