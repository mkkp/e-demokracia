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
  AdminUserProfileQueryCustomizer,
  AdminUserProfile,
  AdminCityQueryCustomizer,
  AdminDistrict,
  AdminCountyQueryCustomizer,
  AdminDistrictStored,
  AdminUserProfileStored,
  AdminCounty,
  AdminCountyStored,
  AdminCityStored,
  AdminCity,
  AdminDistrictQueryCustomizer,
} from '../data-api';
import type { AdminUserProfileServiceForClass } from '../data-service';

/**
 * Class Service Implementation for AdminUserProfile
 */
export class AdminUserProfileServiceForClassImpl extends JudoAxiosService implements AdminUserProfileServiceForClass {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<AdminUserProfile>,
    queryCustomizer?: AdminUserProfileQueryCustomizer,
  ): Promise<AdminUserProfileStored> {
    const path = '/admin/UserProfile/~get';
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
  async getActivityCounties(
    target: JudoIdentifiable<AdminUserProfile>,
    queryCustomizer?: AdminCountyQueryCustomizer,
  ): Promise<Array<AdminCountyStored>> {
    const path = '/admin/UserProfile/activityCounties/~list';
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
  async getRangeForActivityCounties(
    owner?: JudoIdentifiable<AdminUserProfile> | AdminUserProfile,
    queryCustomizer?: AdminCountyQueryCustomizer,
  ): Promise<Array<AdminCountyStored>> {
    const path = '/admin/UserProfile/activityCounties/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getResidentCounty(
    target: JudoIdentifiable<AdminUserProfile>,
    queryCustomizer?: AdminCountyQueryCustomizer,
  ): Promise<AdminCountyStored> {
    const path = '/admin/UserProfile/residentCounty/~get';
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
  async getRangeForResidentCounty(
    owner?: JudoIdentifiable<AdminUserProfile> | AdminUserProfile,
    queryCustomizer?: AdminCountyQueryCustomizer,
  ): Promise<Array<AdminCountyStored>> {
    const path = '/admin/UserProfile/residentCounty/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getActivityCities(
    target: JudoIdentifiable<AdminUserProfile>,
    queryCustomizer?: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>> {
    const path = '/admin/UserProfile/activityCities/~list';
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
  async getRangeForActivityCities(
    owner?: JudoIdentifiable<AdminUserProfile> | AdminUserProfile,
    queryCustomizer?: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>> {
    const path = '/admin/UserProfile/activityCities/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getResidentCity(
    target: JudoIdentifiable<AdminUserProfile>,
    queryCustomizer?: AdminCityQueryCustomizer,
  ): Promise<AdminCityStored> {
    const path = '/admin/UserProfile/residentCity/~get';
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
  async getRangeForResidentCity(
    owner?: JudoIdentifiable<AdminUserProfile> | AdminUserProfile,
    queryCustomizer?: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>> {
    const path = '/admin/UserProfile/residentCity/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getActivityDistricts(
    target: JudoIdentifiable<AdminUserProfile>,
    queryCustomizer?: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>> {
    const path = '/admin/UserProfile/activityDistricts/~list';
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
  async getRangeForActivityDistricts(
    owner?: JudoIdentifiable<AdminUserProfile> | AdminUserProfile,
    queryCustomizer?: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>> {
    const path = '/admin/UserProfile/activityDistricts/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getResidentDistrict(
    target: JudoIdentifiable<AdminUserProfile>,
    queryCustomizer?: AdminDistrictQueryCustomizer,
  ): Promise<AdminDistrictStored> {
    const path = '/admin/UserProfile/residentDistrict/~get';
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
  async getRangeForResidentDistrict(
    owner?: JudoIdentifiable<AdminUserProfile> | AdminUserProfile,
    queryCustomizer?: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>> {
    const path = '/admin/UserProfile/residentDistrict/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }
}
