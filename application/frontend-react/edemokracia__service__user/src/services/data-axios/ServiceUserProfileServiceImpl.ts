//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type {
  JudoRestResponse,
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceUserProfile,
  ServiceUserProfileQueryCustomizer,
  ServiceUserProfileStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import { X_JUDO_SIGNED_IDENTIFIER } from '../data-api/rest/headers';
import type { ServiceUserProfileService } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

/**
 * Class Service Implementation for ServiceUserProfile
 */
export class ServiceUserProfileServiceImpl extends JudoAxiosService implements ServiceUserProfileService {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceUserProfileQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceUserProfileStored>> {
    const path = '/service/UserProfile/~get';
    return this.axios.post(this.getPathForActor(path), queryCustomizer, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async update(target: Partial<ServiceUserProfileStored>): Promise<JudoRestResponse<ServiceUserProfileStored>> {
    const path = '/service/UserProfile/~update';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier!,
      },
    });
  }
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async validateUpdate(target: Partial<ServiceUserProfileStored>): Promise<JudoRestResponse<ServiceUserProfileStored>> {
    const path = '/service/UserProfile/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier!,
      },
    });
  }

  async getTemplateForActivityCities(): Promise<JudoRestResponse<ServiceCity>> {
    const path = '/service/City/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listActivityCities(
    target: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>> {
    const path = '/service/UserProfile/activityCities/~list';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier!,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForActivityCities(
    owner?: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>> {
    const path = '/service/UserProfile/activityCities/~range';
    return this.axios.post(
      this.getPathForActor(path),
      { owner: owner ?? {}, queryCustomizer: queryCustomizer ?? {} },
      headers ? { headers } : undefined,
    );
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setActivityCities(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/UserProfile/~update/activityCities/~set';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async addActivityCities(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/UserProfile/~update/activityCities/~add';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async removeActivityCities(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/UserProfile/~update/activityCities/~remove';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateForActivityCounties(): Promise<JudoRestResponse<ServiceCounty>> {
    const path = '/service/County/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listActivityCounties(
    target: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCountyStored>>> {
    const path = '/service/UserProfile/activityCounties/~list';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier!,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForActivityCounties(
    owner?: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCountyStored>>> {
    const path = '/service/UserProfile/activityCounties/~range';
    return this.axios.post(
      this.getPathForActor(path),
      { owner: owner ?? {}, queryCustomizer: queryCustomizer ?? {} },
      headers ? { headers } : undefined,
    );
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setActivityCounties(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/UserProfile/~update/activityCounties/~set';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async addActivityCounties(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/UserProfile/~update/activityCounties/~add';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async removeActivityCounties(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/UserProfile/~update/activityCounties/~remove';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateForActivityDistricts(): Promise<JudoRestResponse<ServiceDistrict>> {
    const path = '/service/District/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listActivityDistricts(
    target: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>> {
    const path = '/service/UserProfile/activityDistricts/~list';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier!,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForActivityDistricts(
    owner?: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>> {
    const path = '/service/UserProfile/activityDistricts/~range';
    return this.axios.post(
      this.getPathForActor(path),
      { owner: owner ?? {}, queryCustomizer: queryCustomizer ?? {} },
      headers ? { headers } : undefined,
    );
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setActivityDistricts(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/UserProfile/~update/activityDistricts/~set';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async addActivityDistricts(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/UserProfile/~update/activityDistricts/~add';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async removeActivityDistricts(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/UserProfile/~update/activityDistricts/~remove';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateForResidentCity(): Promise<JudoRestResponse<ServiceCity>> {
    const path = '/service/City/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getResidentCity(
    target: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceCityStored>> {
    const path = '/service/UserProfile/residentCity/~get';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier!,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForResidentCity(
    owner?: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>> {
    const path = '/service/UserProfile/residentCity/~range';
    return this.axios.post(
      this.getPathForActor(path),
      { owner: owner ?? {}, queryCustomizer: queryCustomizer ?? {} },
      headers ? { headers } : undefined,
    );
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setResidentCity(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: JudoIdentifiable<ServiceCity>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/UserProfile/~update/residentCity/~set';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async unsetResidentCity(owner: JudoIdentifiable<ServiceUserProfile>): Promise<JudoRestResponse<void>> {
    const path = '/service/UserProfile/~update/residentCity/~unset';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateForResidentCounty(): Promise<JudoRestResponse<ServiceCounty>> {
    const path = '/service/County/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getResidentCounty(
    target: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceCountyStored>> {
    const path = '/service/UserProfile/residentCounty/~get';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier!,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForResidentCounty(
    owner?: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCountyStored>>> {
    const path = '/service/UserProfile/residentCounty/~range';
    return this.axios.post(
      this.getPathForActor(path),
      { owner: owner ?? {}, queryCustomizer: queryCustomizer ?? {} },
      headers ? { headers } : undefined,
    );
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setResidentCounty(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/UserProfile/~update/residentCounty/~set';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async unsetResidentCounty(owner: JudoIdentifiable<ServiceUserProfile>): Promise<JudoRestResponse<void>> {
    const path = '/service/UserProfile/~update/residentCounty/~unset';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async getTemplateForResidentDistrict(): Promise<JudoRestResponse<ServiceDistrict>> {
    const path = '/service/District/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getResidentDistrict(
    target: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceDistrictStored>> {
    const path = '/service/UserProfile/residentDistrict/~get';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier!,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForResidentDistrict(
    owner?: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>> {
    const path = '/service/UserProfile/residentDistrict/~range';
    return this.axios.post(
      this.getPathForActor(path),
      { owner: owner ?? {}, queryCustomizer: queryCustomizer ?? {} },
      headers ? { headers } : undefined,
    );
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setResidentDistrict(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/UserProfile/~update/residentDistrict/~set';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async unsetResidentDistrict(owner: JudoIdentifiable<ServiceUserProfile>): Promise<JudoRestResponse<void>> {
    const path = '/service/UserProfile/~update/residentDistrict/~unset';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }
}
