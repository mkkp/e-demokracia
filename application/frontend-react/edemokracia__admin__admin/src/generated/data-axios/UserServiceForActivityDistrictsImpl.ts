//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type { User, DistrictStored, DistrictQueryCustomizer, District } from '../data-api';
import type { UserServiceForActivityDistricts } from '../data-service';

/**
 * Relation Service Implementation for User.activityDistricts
 */
export class UserServiceForActivityDistrictsImpl extends JudoAxiosService implements UserServiceForActivityDistricts {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listActivityDistricts(
    owner: JudoIdentifiable<User>,
    queryCustomizer?: DistrictQueryCustomizer,
  ): Promise<Array<DistrictStored>> {
    const path = '/User/activityDistricts/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
