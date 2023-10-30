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
  ServiceDebate,
  ServiceDebateQueryCustomizer,
  ServiceDebateStored,
  ServiceUserDebates,
  ServiceUserDebatesStored,
  ServiceUserDebatesQueryCustomizer,
} from '../data-api';
import type { ServiceUserDebatesServiceForClass } from '../data-service';

/**
 * Class Service Implementation for ServiceUserDebates
 */
export class ServiceUserDebatesServiceForClassImpl extends JudoAxiosService implements ServiceUserDebatesServiceForClass {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<ServiceUserDebates>,
    queryCustomizer?: ServiceUserDebatesQueryCustomizer,
  ): Promise<ServiceUserDebatesStored> {
    const path = '/service/UserDebates/~get';
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
  async getActiveDebatesGlobal(
    target: JudoIdentifiable<ServiceUserDebates>,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>> {
    const path = '/service/UserDebates/activeDebatesGlobal/~list';
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
  async getRangeForActiveDebatesGlobal(
    owner?: JudoIdentifiable<ServiceUserDebates> | ServiceUserDebates,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>> {
    const path = '/service/UserDebates/activeDebatesGlobal/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getActiveDebatesInActivityCities(
    target: JudoIdentifiable<ServiceUserDebates>,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>> {
    const path = '/service/UserDebates/activeDebatesInActivityCities/~list';
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
  async getRangeForActiveDebatesInActivityCities(
    owner?: JudoIdentifiable<ServiceUserDebates> | ServiceUserDebates,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>> {
    const path = '/service/UserDebates/activeDebatesInActivityCities/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getActiveDebatesInActivityDistricts(
    target: JudoIdentifiable<ServiceUserDebates>,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>> {
    const path = '/service/UserDebates/activeDebatesInActivityDistricts/~list';
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
  async getRangeForActiveDebatesInActivityDistricts(
    owner?: JudoIdentifiable<ServiceUserDebates> | ServiceUserDebates,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>> {
    const path = '/service/UserDebates/activeDebatesInActivityDistricts/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getActiveDebatesInActivityCounties(
    target: JudoIdentifiable<ServiceUserDebates>,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>> {
    const path = '/service/UserDebates/activeDebatesInActivityCounties/~list';
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
  async getRangeForActiveDebatesInActivityCounties(
    owner?: JudoIdentifiable<ServiceUserDebates> | ServiceUserDebates,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>> {
    const path = '/service/UserDebates/activeDebatesInActivityCounties/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getActiveDebatesInResidentCounty(
    target: JudoIdentifiable<ServiceUserDebates>,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>> {
    const path = '/service/UserDebates/activeDebatesInResidentCounty/~list';
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
  async getRangeForActiveDebatesInResidentCounty(
    owner?: JudoIdentifiable<ServiceUserDebates> | ServiceUserDebates,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>> {
    const path = '/service/UserDebates/activeDebatesInResidentCounty/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getActiveDebatesInResidentCity(
    target: JudoIdentifiable<ServiceUserDebates>,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>> {
    const path = '/service/UserDebates/activeDebatesInResidentCity/~list';
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
  async getRangeForActiveDebatesInResidentCity(
    owner?: JudoIdentifiable<ServiceUserDebates> | ServiceUserDebates,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>> {
    const path = '/service/UserDebates/activeDebatesInResidentCity/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getActiveDebatesInResidentDistrict(
    target: JudoIdentifiable<ServiceUserDebates>,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>> {
    const path = '/service/UserDebates/activeDebatesInResidentDistrict/~list';
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
  async getRangeForActiveDebatesInResidentDistrict(
    owner?: JudoIdentifiable<ServiceUserDebates> | ServiceUserDebates,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>> {
    const path = '/service/UserDebates/activeDebatesInResidentDistrict/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getOwnedDebates(
    target: JudoIdentifiable<ServiceUserDebates>,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>> {
    const path = '/service/UserDebates/ownedDebates/~list';
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
  async getRangeForOwnedDebates(
    owner?: JudoIdentifiable<ServiceUserDebates> | ServiceUserDebates,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>> {
    const path = '/service/UserDebates/ownedDebates/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }
}
