//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type {
  JudoRestResponse,
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceServiceUser,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import { CommandQueryCustomizer } from '../data-api/common';
import { X_JUDO_MASK, X_JUDO_SIGNED_IDENTIFIER } from '../data-api/rest/headers';
import type { ServiceServiceUserServiceForResidentCounty } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

const DEFAULT_COMMAND_MASK = '{}';

/**
 * Relation Service Implementation for ServiceServiceUser.residentCounty
 */
export class ServiceServiceUserServiceForResidentCountyImpl
  extends JudoAxiosService
  implements ServiceServiceUserServiceForResidentCounty
{
  /**
   * From: relation.isRefreshable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceCountyStored>> {
    const path = '/service/County/~get';
    return this.axios.post(
      this.getPathForActor(path),
      queryCustomizer ?? {},
      owner
        ? {
            headers: {
              [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
              ...(headers ?? {}),
            },
          }
        : headers
          ? { headers }
          : undefined,
    );
  }

  /**
   * From: relation.isRangeable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForResidentCounty(
    owner: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCountyStored>>> {
    const path = '/service/ServiceUser/residentCounty/~range';
    return this.axios.post(
      this.getPathForActor(path),
      {
        owner: owner ?? {},
        queryCustomizer: queryCustomizer ?? {},
      },
      headers ? { headers } : undefined,
    );
  }

  /**
   * From: relation.target.isTemplateable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getTemplate(): Promise<JudoRestResponse<ServiceCounty>> {
    const path = '/service/County/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * From: relation.isUpdatable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async update(
    target: Partial<ServiceCountyStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCountyStored>> {
    const path = '/service/County/~update';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
        [X_JUDO_MASK]: queryCustomizer?._mask ?? DEFAULT_COMMAND_MASK,
      },
    });
  }

  /**
   * From: relation.validateUpdate
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async validateUpdate(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: Partial<ServiceCountyStored>,
  ): Promise<JudoRestResponse<ServiceCountyStored>> {
    const path = '/service/County/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
      },
    });
  }

  /**
   * From: relation.isSetable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setResidentCounty(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<JudoRestResponse<void>> {
    const path = '/service/ServiceUser/~update/residentCounty/~set';
    return this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  /**
   * From: relation.isUnsetable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async unsetResidentCounty(owner: JudoIdentifiable<ServiceServiceUser>): Promise<JudoRestResponse<void>> {
    const path = '/service/ServiceUser/~update/residentCounty/~unset';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier!,
      },
    });
  }

  async listCities(
    owner: JudoIdentifiable<ServiceCounty>,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>> {
    const path = '/service/County/cities/~list';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
        ...(headers ?? {}),
      },
    });
  }

  async getTemplateForCities(): Promise<JudoRestResponse<ServiceCity>> {
    const path = '/service/City/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  async createCities(
    owner: JudoIdentifiable<ServiceCounty>,
    target: ServiceCity,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCityStored>> {
    const path = '/service/County/~update/cities/~create';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
        [X_JUDO_MASK]: queryCustomizer?._mask ?? DEFAULT_COMMAND_MASK,
      },
    });
  }

  async deleteCities(target: JudoIdentifiable<ServiceCity>): Promise<JudoRestResponse<void>> {
    const path = '/service/City/~delete';
    return this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
      },
    });
  }

  async updateCities(
    owner: JudoIdentifiable<ServiceCounty>,
    target: Partial<ServiceCityStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCityStored>> {
    const path = '/service/County/~update/cities/~update';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
        [X_JUDO_MASK]: queryCustomizer?._mask ?? DEFAULT_COMMAND_MASK,
      },
    });
  }

  async validateUpdateCities(
    owner: JudoIdentifiable<ServiceCounty>,
    target: Partial<ServiceCityStored>,
  ): Promise<JudoRestResponse<ServiceCityStored>> {
    const path = '/service/County/~update/cities/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }
}
