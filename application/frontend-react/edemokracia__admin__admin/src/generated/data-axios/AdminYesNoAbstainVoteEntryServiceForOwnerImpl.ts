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
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminSimpleVote,
  AdminCountyQueryCustomizer,
  AdminDistrictStored,
  AdminCounty,
  AdminCity,
  AdminSimpleVoteQueryCustomizer,
  AdminDistrictQueryCustomizer,
  AdminYesNoAbstainVoteEntry,
  AdminDistrict,
  AdminUser,
  AdminCountyStored,
  AdminCityStored,
  AdminSimpleVoteStored,
} from '../data-api';
import type { AdminYesNoAbstainVoteEntryServiceForOwner } from '../data-service';

/**
 * Relation Service Implementation for AdminYesNoAbstainVoteEntry.owner
 */
export class AdminYesNoAbstainVoteEntryServiceForOwnerImpl
  extends JudoAxiosService
  implements AdminYesNoAbstainVoteEntryServiceForOwner
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getOwner(owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry>, mask?: string): Promise<AdminUserStored> {
    const path = '/admin/YesNoAbstainVoteEntry/owner/~get';
    const queryCustomizer: AdminUserQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
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
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry> | AdminYesNoAbstainVoteEntry,
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
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
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
  async addOwnerVotes(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
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
  async removeOwnerVotes(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
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
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry> | AdminYesNoAbstainVoteEntry,
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
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
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
  async addOwnerActivityCounties(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
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
  async removeOwnerActivityCounties(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
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
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry> | AdminYesNoAbstainVoteEntry,
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
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
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
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
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
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry> | AdminYesNoAbstainVoteEntry,
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
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
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
  async addOwnerActivityCities(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
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
  async removeOwnerActivityCities(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
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
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry> | AdminYesNoAbstainVoteEntry,
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
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
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
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
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
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry> | AdminYesNoAbstainVoteEntry,
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
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
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
  async addOwnerActivityDistricts(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
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
  async removeOwnerActivityDistricts(
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
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
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry> | AdminYesNoAbstainVoteEntry,
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
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
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
    owner: JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
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