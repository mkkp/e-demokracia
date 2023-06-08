//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import { CityQueryCustomizer, Issue, CityStored, City, CountyQueryCustomizer, County, CountyStored } from '../data-api';
import { IssueServiceForCounty } from '../data-service';

/**
 * Relation Service Implementation for Issue.county
 */
export class IssueServiceForCountyImpl extends JudoAxiosService implements IssueServiceForCounty {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getCounty(owner: JudoIdentifiable<Issue>, mask?: string): Promise<CountyStored> {
    const path = '/Issue/county/~get';
    const queryCustomizer: CountyQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
