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
  AdminCityQueryCustomizer,
  AdminDistrict,
  AdminDistrictStored,
  AdminCityStored,
  AdminCity,
  AdminDistrictQueryCustomizer,
} from '../data-api';
import type { AdminCityServiceForClass } from '../data-service';

/**
 * Class Service Implementation for AdminCity
 */
export class AdminCityServiceForClassImpl extends JudoAxiosService implements AdminCityServiceForClass {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getTemplate(): Promise<AdminCity> {
    const path = '/admin/City/~template';
    const response = await this.axios.get(this.getPathForActor(path));

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<AdminCity>,
    queryCustomizer?: AdminCityQueryCustomizer,
  ): Promise<AdminCityStored> {
    const path = '/admin/City/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async delete(target: JudoIdentifiable<AdminCity>): Promise<void> {
    const path = '/admin/City/~delete';
    await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async update(target: Partial<AdminCityStored>): Promise<AdminCityStored> {
    const path = '/admin/City/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier!,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getDistricts(
    target: JudoIdentifiable<AdminCity>,
    queryCustomizer?: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>> {
    const path = '/admin/City/districts/~list';
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
  async getRangeForDistricts(
    owner?: JudoIdentifiable<AdminCity> | AdminCity,
    queryCustomizer?: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>> {
    const path = '/admin/City/districts/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }
}
