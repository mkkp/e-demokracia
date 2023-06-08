//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import {
  AdminCityQueryCustomizer,
  AdminUser,
  AdminCountyQueryCustomizer,
  AdminCountyStored,
  AdminCounty,
  AdminCityStored,
  AdminCity,
} from '../data-api';
import { AdminUserServiceForResidentCounty } from '../data-service';

/**
 * Relation Service Implementation for AdminUser.residentCounty
 */
export class AdminUserServiceForResidentCountyImpl extends JudoAxiosService implements AdminUserServiceForResidentCounty {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getResidentCounty(owner: JudoIdentifiable<AdminUser>, mask?: string): Promise<AdminCountyStored> {
    const path = '/admin/User/residentCounty/~get';
    const queryCustomizer: AdminCountyQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
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
  async updateResidentCounty(
    owner: JudoIdentifiable<AdminUser>,
    target: Partial<AdminCountyStored>,
  ): Promise<AdminCountyStored> {
    const path = '/admin/User/~update/residentCounty/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
