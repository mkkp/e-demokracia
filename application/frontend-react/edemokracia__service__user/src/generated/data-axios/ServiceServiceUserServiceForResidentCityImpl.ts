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
  ServiceServiceUser,
  ServiceCity,
  ServiceDistrictQueryCustomizer,
  ServiceDistrict,
  ServiceDistrictStored,
  ServiceCityStored,
  ServiceCityQueryCustomizer,
} from '../data-api';
import type { ServiceServiceUserServiceForResidentCity } from '../data-service';

/**
 * Relation Service Implementation for ServiceServiceUser.residentCity
 */
export class ServiceServiceUserServiceForResidentCityImpl
  extends JudoAxiosService
  implements ServiceServiceUserServiceForResidentCity
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getResidentCity(owner: JudoIdentifiable<ServiceServiceUser>, mask?: string): Promise<ServiceCityStored> {
    const path = '/service/ServiceUser/residentCity/~get';
    const queryCustomizer: ServiceCityQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
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
  async updateResidentCity(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: Partial<ServiceCityStored>,
  ): Promise<ServiceCityStored> {
    const path = '/service/ServiceUser/~update/residentCity/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
