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
  ServiceDistrict,
  ServiceDistrictStored,
  ServiceCityStored,
  ServiceIssue,
  ServiceCityQueryCustomizer,
} from '../data-api';
import type { ServiceIssueServiceForCity } from '../data-service';

/**
 * Relation Service Implementation for ServiceIssue.city
 */
export class ServiceIssueServiceForCityImpl extends JudoAxiosService implements ServiceIssueServiceForCity {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getCity(owner: JudoIdentifiable<ServiceIssue>, mask?: string): Promise<ServiceCityStored> {
    const path = '/service/Issue/city/~get';
    const queryCustomizer: ServiceCityQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
