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
import type { UserServiceForResidentCity } from '../data-service';

/**
 * Relation Service Implementation for User.residentCity
 */
export class UserServiceForResidentCityImpl extends JudoAxiosService implements UserServiceForResidentCity {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getResidentCity(owner: JudoIdentifiable<User>, mask?: string): Promise<CityStored> {
    const path = '/User/residentCity/~get';
    const queryCustomizer: CityQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
