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
  CityQueryCustomizer,
  User,
  CityStored,
  Issue,
  IssueQueryCustomizer,
  IssueStored,
  City,
  CountyQueryCustomizer,
  County,
  CountyStored,
} from '../data-api';
import type { UserServiceForResidentCounty } from '../data-service';

/**
 * Relation Service Implementation for User.residentCounty
 */
export class UserServiceForResidentCountyImpl extends JudoAxiosService implements UserServiceForResidentCounty {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getResidentCounty(owner: JudoIdentifiable<User>, mask?: string): Promise<CountyStored> {
    const path = '/User/residentCounty/~get';
    const queryCustomizer: CountyQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
