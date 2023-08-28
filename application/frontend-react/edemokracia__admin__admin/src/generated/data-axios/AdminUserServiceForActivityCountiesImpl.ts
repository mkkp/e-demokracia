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
  AdminCityQueryCustomizer,
  AdminUser,
  AdminCountyQueryCustomizer,
  AdminCountyStored,
  AdminCounty,
  AdminCityStored,
  AdminCity,
} from '../data-api';
import type { AdminUserServiceForActivityCounties } from '../data-service';

/**
 * Relation Service Implementation for AdminUser.activityCounties
 */
export class AdminUserServiceForActivityCountiesImpl
  extends JudoAxiosService
  implements AdminUserServiceForActivityCounties
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listActivityCounties(
    owner: JudoIdentifiable<AdminUser>,
    queryCustomizer?: AdminCountyQueryCustomizer,
  ): Promise<Array<AdminCountyStored>> {
    const path = '/admin/User/activityCounties/~list';
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
  async updateActivityCounties(
    owner: JudoIdentifiable<AdminUser>,
    target: Partial<AdminCountyStored>,
  ): Promise<AdminCountyStored> {
    const path = '/admin/User/~update/activityCounties/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
