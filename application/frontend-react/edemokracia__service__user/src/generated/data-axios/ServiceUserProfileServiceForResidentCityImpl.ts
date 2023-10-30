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
  ServiceCity,
  ServiceDistrictQueryCustomizer,
  ServiceUserProfile,
  ServiceDistrict,
  ServiceDistrictStored,
  ServiceCityStored,
  ServiceCityQueryCustomizer,
} from '../data-api';
import type { ServiceUserProfileServiceForResidentCity } from '../data-service';

/**
 * Relation Service Implementation for ServiceUserProfile.residentCity
 */
export class ServiceUserProfileServiceForResidentCityImpl
  extends JudoAxiosService
  implements ServiceUserProfileServiceForResidentCity
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getResidentCity(owner: JudoIdentifiable<ServiceUserProfile>, mask?: string): Promise<ServiceCityStored> {
    const path = '/service/UserProfile/residentCity/~get';
    const queryCustomizer: ServiceCityQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
