//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type { AdminUserProfile, AdminDistrict, AdminDistrictStored, AdminDistrictQueryCustomizer } from '../data-api';
import type { AdminUserProfileServiceForActivityDistricts } from '../data-service';

/**
 * Relation Service Implementation for AdminUserProfile.activityDistricts
 */
export class AdminUserProfileServiceForActivityDistrictsImpl
  extends JudoAxiosService
  implements AdminUserProfileServiceForActivityDistricts
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listActivityDistricts(
    owner: JudoIdentifiable<AdminUserProfile>,
    queryCustomizer?: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>> {
    const path = '/admin/UserProfile/activityDistricts/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
