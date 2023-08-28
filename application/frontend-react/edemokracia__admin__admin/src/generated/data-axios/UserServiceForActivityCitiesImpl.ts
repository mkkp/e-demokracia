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
  CityQueryCustomizer,
  User,
  CityStored,
  DistrictStored,
  City,
  DistrictQueryCustomizer,
  District,
} from '../data-api';
import type { UserServiceForActivityCities } from '../data-service';

/**
 * Relation Service Implementation for User.activityCities
 */
export class UserServiceForActivityCitiesImpl extends JudoAxiosService implements UserServiceForActivityCities {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listActivityCities(
    owner: JudoIdentifiable<User>,
    queryCustomizer?: CityQueryCustomizer,
  ): Promise<Array<CityStored>> {
    const path = '/User/activityCities/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
