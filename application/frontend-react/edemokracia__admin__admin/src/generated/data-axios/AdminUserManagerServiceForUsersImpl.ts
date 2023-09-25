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
  AdminCityQueryCustomizer,
  AdminUserManager,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminSimpleVote,
  AdminCountyQueryCustomizer,
  AdminDistrictStored,
  AdminCounty,
  AdminCity,
  AdminSimpleVoteQueryCustomizer,
  AdminDistrictQueryCustomizer,
  AdminDistrict,
  AdminUser,
  AdminCountyStored,
  AdminCityStored,
  AdminSimpleVoteStored,
} from '../data-api';
import type { AdminUserManagerServiceForUsers } from '../data-service';

/**
 * Relation Service Implementation for AdminUserManager.users
 */
export class AdminUserManagerServiceForUsersImpl extends JudoAxiosService implements AdminUserManagerServiceForUsers {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async listUsers(
    owner: JudoIdentifiable<AdminUserManager>,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>> {
    const path = '/admin/UserManager/users/~list';
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
  async updateUsers(
    owner: JudoIdentifiable<AdminUserManager>,
    target: Partial<AdminUserStored>,
  ): Promise<AdminUserStored> {
    const path = '/admin/UserManager/~update/users/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForVotes(
    owner: JudoIdentifiable<AdminUserManager> | AdminUserManager,
    queryCustomizer?: AdminSimpleVoteQueryCustomizer,
  ): Promise<Array<AdminSimpleVoteStored>> {
    const path = '/admin/SimpleVote/votes/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner,
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setVotes(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminUser>,
    selected: Array<JudoIdentifiable<AdminSimpleVote>>,
  ): Promise<void> {
    const path = '/admin/SimpleVote/~update/votes/~set';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async addUsersVotes(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminUser>,
    selected: Array<JudoIdentifiable<AdminSimpleVote>>,
  ): Promise<void> {
    const path = '/admin/SimpleVote/~update/votes/~add';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async removeUsersVotes(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminUser>,
    selected: Array<JudoIdentifiable<AdminSimpleVote>>,
  ): Promise<void> {
    const path = '/admin/SimpleVote/~update/votes/~remove';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForActivityCounties(
    owner: JudoIdentifiable<AdminUserManager> | AdminUserManager,
    queryCustomizer?: AdminCountyQueryCustomizer,
  ): Promise<Array<AdminCountyStored>> {
    const path = '/admin/County/activityCounties/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner,
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setActivityCounties(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminUser>,
    selected: Array<JudoIdentifiable<AdminCounty>>,
  ): Promise<void> {
    const path = '/admin/County/~update/activityCounties/~set';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async addUsersActivityCounties(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminUser>,
    selected: Array<JudoIdentifiable<AdminCounty>>,
  ): Promise<void> {
    const path = '/admin/County/~update/activityCounties/~add';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async removeUsersActivityCounties(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminUser>,
    selected: Array<JudoIdentifiable<AdminCounty>>,
  ): Promise<void> {
    const path = '/admin/County/~update/activityCounties/~remove';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForResidentCounty(
    owner: JudoIdentifiable<AdminUserManager> | AdminUserManager,
    queryCustomizer?: AdminCountyQueryCustomizer,
  ): Promise<Array<AdminCountyStored>> {
    const path = '/admin/County/residentCounty/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner,
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setResidentCounty(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminUser>,
    selected: JudoIdentifiable<AdminCounty>,
  ): Promise<void> {
    const path = '/admin/County/~update/residentCounty/~set';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async unsetResidentCounty(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminUser>,
  ): Promise<void> {
    const path = '/admin/County/~update/residentCounty/~unset';
    await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForActivityCities(
    owner: JudoIdentifiable<AdminUserManager> | AdminUserManager,
    queryCustomizer?: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>> {
    const path = '/admin/City/activityCities/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner,
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setActivityCities(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminUser>,
    selected: Array<JudoIdentifiable<AdminCity>>,
  ): Promise<void> {
    const path = '/admin/City/~update/activityCities/~set';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async addUsersActivityCities(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminUser>,
    selected: Array<JudoIdentifiable<AdminCity>>,
  ): Promise<void> {
    const path = '/admin/City/~update/activityCities/~add';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async removeUsersActivityCities(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminUser>,
    selected: Array<JudoIdentifiable<AdminCity>>,
  ): Promise<void> {
    const path = '/admin/City/~update/activityCities/~remove';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForResidentCity(
    owner: JudoIdentifiable<AdminUserManager> | AdminUserManager,
    queryCustomizer?: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>> {
    const path = '/admin/City/residentCity/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner,
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setResidentCity(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminUser>,
    selected: JudoIdentifiable<AdminCity>,
  ): Promise<void> {
    const path = '/admin/City/~update/residentCity/~set';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async unsetResidentCity(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminUser>,
  ): Promise<void> {
    const path = '/admin/City/~update/residentCity/~unset';
    await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForActivityDistricts(
    owner: JudoIdentifiable<AdminUserManager> | AdminUserManager,
    queryCustomizer?: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>> {
    const path = '/admin/District/activityDistricts/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner,
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setActivityDistricts(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminUser>,
    selected: Array<JudoIdentifiable<AdminDistrict>>,
  ): Promise<void> {
    const path = '/admin/District/~update/activityDistricts/~set';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async addUsersActivityDistricts(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminUser>,
    selected: Array<JudoIdentifiable<AdminDistrict>>,
  ): Promise<void> {
    const path = '/admin/District/~update/activityDistricts/~add';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async removeUsersActivityDistricts(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminUser>,
    selected: Array<JudoIdentifiable<AdminDistrict>>,
  ): Promise<void> {
    const path = '/admin/District/~update/activityDistricts/~remove';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForResidentDistrict(
    owner: JudoIdentifiable<AdminUserManager> | AdminUserManager,
    queryCustomizer?: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>> {
    const path = '/admin/District/residentDistrict/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner,
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setResidentDistrict(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminUser>,
    selected: JudoIdentifiable<AdminDistrict>,
  ): Promise<void> {
    const path = '/admin/District/~update/residentDistrict/~set';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async unsetResidentDistrict(
    owner: JudoIdentifiable<AdminUserManager>,
    target: JudoIdentifiable<AdminUser>,
  ): Promise<void> {
    const path = '/admin/District/~update/residentDistrict/~unset';
    await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }
}
