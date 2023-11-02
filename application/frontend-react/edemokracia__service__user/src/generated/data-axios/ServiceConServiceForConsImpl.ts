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
  ServiceProParentQueryCustomizer,
  ServiceConParent,
  ServiceConParentQueryCustomizer,
  ServiceSimpleVote,
  ServiceConParentStored,
  ServiceServiceUserStored,
  ServiceCon,
  ServiceConStored,
  ServiceSimpleVoteStored,
  ServiceServiceUser,
  ServiceProQueryCustomizer,
  ServiceProParentStored,
  ServiceConQueryCustomizer,
  ServiceProStored,
  ServiceProParent,
  ServiceServiceUserQueryCustomizer,
  ServicePro,
  ServiceSimpleVoteQueryCustomizer,
} from '../data-api';
import type { ServiceConServiceForCons } from '../data-service';

/**
 * Relation Service Implementation for ServiceCon.cons
 */
export class ServiceConServiceForConsImpl extends JudoAxiosService implements ServiceConServiceForCons {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listCons(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer?: ServiceConQueryCustomizer,
  ): Promise<Array<ServiceConStored>> {
    const path = '/service/Con/cons/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async deleteCons(owner: JudoIdentifiable<ServiceCon>, target: JudoIdentifiable<ServiceCon>): Promise<void> {
    const path = '/service/Con/~update/cons/~delete';
    await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async updateCons(owner: JudoIdentifiable<ServiceCon>, target: Partial<ServiceConStored>): Promise<ServiceConStored> {
    const path = '/service/Con/~update/cons/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
