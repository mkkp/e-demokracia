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
  Issue,
  IssueQueryCustomizer,
  IssueStored,
  DistrictStored,
  DistrictQueryCustomizer,
  District,
} from '../data-api';
import type { IssueServiceForDistrict } from '../data-service';

/**
 * Relation Service Implementation for Issue.district
 */
export class IssueServiceForDistrictImpl extends JudoAxiosService implements IssueServiceForDistrict {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getDistrict(owner: JudoIdentifiable<Issue>, mask?: string): Promise<DistrictStored> {
    const path = '/Issue/district/~get';
    const queryCustomizer: DistrictQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
