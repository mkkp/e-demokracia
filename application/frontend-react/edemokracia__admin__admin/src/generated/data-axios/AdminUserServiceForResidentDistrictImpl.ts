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
import { AdminUserServiceForResidentDistrict } from '../data-service';

/**
 * Relation Service Implementation for AdminUser.residentDistrict
 */
export class AdminUserServiceForResidentDistrictImpl
  extends JudoAxiosService
  implements AdminUserServiceForResidentDistrict
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getResidentDistrict(owner: JudoIdentifiable<AdminUser>, mask?: string): Promise<AdminDistrictStored> {
    const path = '/admin/User/residentDistrict/~get';
    const queryCustomizer: AdminDistrictQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
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
  async updateResidentDistrict(
    owner: JudoIdentifiable<AdminUser>,
    target: Partial<AdminDistrictStored>,
  ): Promise<AdminDistrictStored> {
    const path = '/admin/User/~update/residentDistrict/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
