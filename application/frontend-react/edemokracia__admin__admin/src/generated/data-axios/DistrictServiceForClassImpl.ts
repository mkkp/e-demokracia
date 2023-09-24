//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type {
  Issue,
  IssueQueryCustomizer,
  IssueStored,
  DistrictStored,
  District,
  DistrictQueryCustomizer,
} from '../data-api';
import type { DistrictServiceForClass } from '../data-service';

/**
 * Class Service Implementation for District
 */
export class DistrictServiceForClassImpl extends JudoAxiosService implements DistrictServiceForClass {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<District>,
    queryCustomizer?: DistrictQueryCustomizer,
  ): Promise<DistrictStored> {
    const path = '/District/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getIssues(
    target: JudoIdentifiable<District>,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>> {
    const path = '/District/issues/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier!,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForIssues(
    owner?: JudoIdentifiable<District> | District,
    queryCustomizer?: IssueQueryCustomizer,
  ): Promise<Array<IssueStored>> {
    const path = '/District/issues/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }
}
