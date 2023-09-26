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
  AdminUserDebatesQueryCustomizer,
  AdminDebate,
  AdminUserDebatesStored,
  AdminDebateStored,
  AdminUserDebates,
  AdminDebateQueryCustomizer,
} from '../data-api';
import type { AdminUserDebatesServiceForClass } from '../data-service';

/**
 * Class Service Implementation for AdminUserDebates
 */
export class AdminUserDebatesServiceForClassImpl extends JudoAxiosService implements AdminUserDebatesServiceForClass {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<AdminUserDebates>,
    queryCustomizer?: AdminUserDebatesQueryCustomizer,
  ): Promise<AdminUserDebatesStored> {
    const path = '/admin/UserDebates/~get';
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
    target: JudoIdentifiable<AdminUserDebates>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>> {
    const path = '/admin/UserDebates/activeDebatesGlobal/~list';
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
    owner?: JudoIdentifiable<AdminUserDebates> | AdminUserDebates,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>> {
    const path = '/admin/UserDebates/activeDebatesGlobal/~range';
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
    target: JudoIdentifiable<AdminUserDebates>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>> {
    const path = '/admin/UserDebates/activeDebatesInActivityCities/~list';
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
    owner?: JudoIdentifiable<AdminUserDebates> | AdminUserDebates,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>> {
    const path = '/admin/UserDebates/activeDebatesInActivityCities/~range';
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
    target: JudoIdentifiable<AdminUserDebates>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>> {
    const path = '/admin/UserDebates/activeDebatesInActivityDistricts/~list';
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
    owner?: JudoIdentifiable<AdminUserDebates> | AdminUserDebates,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>> {
    const path = '/admin/UserDebates/activeDebatesInActivityDistricts/~range';
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
    target: JudoIdentifiable<AdminUserDebates>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>> {
    const path = '/admin/UserDebates/activeDebatesInActivityCounties/~list';
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
    owner?: JudoIdentifiable<AdminUserDebates> | AdminUserDebates,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>> {
    const path = '/admin/UserDebates/activeDebatesInActivityCounties/~range';
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
    target: JudoIdentifiable<AdminUserDebates>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>> {
    const path = '/admin/UserDebates/activeDebatesInResidentCounty/~list';
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
    owner?: JudoIdentifiable<AdminUserDebates> | AdminUserDebates,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>> {
    const path = '/admin/UserDebates/activeDebatesInResidentCounty/~range';
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
    target: JudoIdentifiable<AdminUserDebates>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>> {
    const path = '/admin/UserDebates/activeDebatesInResidentCity/~list';
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
    owner?: JudoIdentifiable<AdminUserDebates> | AdminUserDebates,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>> {
    const path = '/admin/UserDebates/activeDebatesInResidentCity/~range';
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
    target: JudoIdentifiable<AdminUserDebates>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>> {
    const path = '/admin/UserDebates/activeDebatesInResidentDistrict/~list';
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
    owner?: JudoIdentifiable<AdminUserDebates> | AdminUserDebates,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>> {
    const path = '/admin/UserDebates/activeDebatesInResidentDistrict/~range';
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
    target: JudoIdentifiable<AdminUserDebates>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>> {
    const path = '/admin/UserDebates/ownedDebates/~list';
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
    owner?: JudoIdentifiable<AdminUserDebates> | AdminUserDebates,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>> {
    const path = '/admin/UserDebates/ownedDebates/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }
}
