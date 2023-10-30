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
  ServiceDistrictQueryCustomizer,
  ServiceUserProfile,
  ServiceDistrict,
  ServiceDistrictStored,
} from '../data-api';
import type { ServiceUserProfileServiceForResidentDistrict } from '../data-service';

/**
 * Relation Service Implementation for ServiceUserProfile.residentDistrict
 */
export class ServiceUserProfileServiceForResidentDistrictImpl
  extends JudoAxiosService
  implements ServiceUserProfileServiceForResidentDistrict
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getResidentDistrict(
    owner: JudoIdentifiable<ServiceUserProfile>,
    mask?: string,
  ): Promise<ServiceDistrictStored> {
    const path = '/service/UserProfile/residentDistrict/~get';
    const queryCustomizer: ServiceDistrictQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
