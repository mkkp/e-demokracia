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
import type { UserServiceForActivityCounties } from '../data-service';

/**
 * Relation Service Implementation for User.activityCounties
 */
export class UserServiceForActivityCountiesImpl extends JudoAxiosService implements UserServiceForActivityCounties {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listActivityCounties(
    owner: JudoIdentifiable<User>,
    queryCustomizer?: CountyQueryCustomizer,
  ): Promise<Array<CountyStored>> {
    const path = '/User/activityCounties/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
