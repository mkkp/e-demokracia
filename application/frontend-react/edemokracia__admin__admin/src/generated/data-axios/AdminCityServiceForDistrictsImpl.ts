//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import { AdminDistrict, AdminDistrictStored, AdminCity, AdminDistrictQueryCustomizer } from '../data-api';
import { AdminCityServiceForDistricts } from '../data-service';

/**
 * Relation Service Implementation for AdminCity.districts
 */
export class AdminCityServiceForDistrictsImpl extends JudoAxiosService implements AdminCityServiceForDistricts {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listDistricts(
    owner: JudoIdentifiable<AdminCity>,
    queryCustomizer?: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>> {
    const path = '/admin/City/districts/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createDistricts(owner: JudoIdentifiable<AdminCity>, target: AdminDistrict): Promise<AdminDistrictStored> {
    const path = '/admin/City/~update/districts/~create';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async deleteDistricts(owner: JudoIdentifiable<AdminCity>, target: JudoIdentifiable<AdminDistrict>): Promise<void> {
    const path = '/admin/City/~update/districts/~delete';
    await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async updateDistricts(
    owner: JudoIdentifiable<AdminCity>,
    target: Partial<AdminDistrictStored>,
  ): Promise<AdminDistrictStored> {
    const path = '/admin/City/~update/districts/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }
}
