//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import { AdminDistrict, AdminUser, AdminDistrictStored, AdminDistrictQueryCustomizer } from '../data-api';
import { AdminUserServiceForActivityDistricts } from '../data-service';

/**
 * Relation Service Implementation for AdminUser.activityDistricts
 */
export class AdminUserServiceForActivityDistrictsImpl
  extends JudoAxiosService
  implements AdminUserServiceForActivityDistricts
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listActivityDistricts(
    owner: JudoIdentifiable<AdminUser>,
    queryCustomizer?: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>> {
    const path = '/admin/User/activityDistricts/~list';
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
  async updateActivityDistricts(
    owner: JudoIdentifiable<AdminUser>,
    target: Partial<AdminDistrictStored>,
  ): Promise<AdminDistrictStored> {
    const path = '/admin/User/~update/activityDistricts/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
