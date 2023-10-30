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
  ServiceCountyStored,
  ServiceCountyQueryCustomizer,
  ServiceCounty,
  ServiceCityStored,
  ServiceIssue,
  ServiceCityQueryCustomizer,
} from '../data-api';
import type { ServiceIssueServiceForCounty } from '../data-service';

/**
 * Relation Service Implementation for ServiceIssue.county
 */
export class ServiceIssueServiceForCountyImpl extends JudoAxiosService implements ServiceIssueServiceForCounty {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getCounty(owner: JudoIdentifiable<ServiceIssue>, mask?: string): Promise<ServiceCountyStored> {
    const path = '/service/Issue/county/~get';
    const queryCustomizer: ServiceCountyQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
