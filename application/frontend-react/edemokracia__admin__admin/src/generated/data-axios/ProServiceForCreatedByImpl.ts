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
  SimpleVote,
  User,
  DistrictStored,
  City,
  Pro,
  County,
  SimpleVoteQueryCustomizer,
  CityQueryCustomizer,
  CityStored,
  UserQueryCustomizer,
  UserStored,
  SimpleVoteStored,
  DistrictQueryCustomizer,
  District,
  CountyQueryCustomizer,
  CountyStored,
} from '../data-api';
import type { ProServiceForCreatedBy } from '../data-service';

/**
 * Relation Service Implementation for Pro.createdBy
 */
export class ProServiceForCreatedByImpl extends JudoAxiosService implements ProServiceForCreatedBy {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getCreatedBy(owner: JudoIdentifiable<Pro>, mask?: string): Promise<UserStored> {
    const path = '/Pro/createdBy/~get';
    const queryCustomizer: UserQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
