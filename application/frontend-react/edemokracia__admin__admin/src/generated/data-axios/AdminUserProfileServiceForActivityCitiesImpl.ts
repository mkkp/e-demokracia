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
  AdminUserProfile,
  AdminCityQueryCustomizer,
  AdminDistrict,
  AdminDistrictStored,
  AdminCityStored,
  AdminCity,
  AdminDistrictQueryCustomizer,
} from '../data-api';
import type { AdminUserProfileServiceForActivityCities } from '../data-service';

/**
 * Relation Service Implementation for AdminUserProfile.activityCities
 */
export class AdminUserProfileServiceForActivityCitiesImpl
  extends JudoAxiosService
  implements AdminUserProfileServiceForActivityCities
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listActivityCities(
    owner: JudoIdentifiable<AdminUserProfile>,
    queryCustomizer?: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>> {
    const path = '/admin/UserProfile/activityCities/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}