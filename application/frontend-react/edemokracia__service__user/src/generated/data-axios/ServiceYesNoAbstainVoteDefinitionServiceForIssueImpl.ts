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
  ServiceDistrictQueryCustomizer,
  ServiceCommentQueryCustomizer,
  ServiceIssueQueryCustomizer,
  ServiceIssueCategoryQueryCustomizer,
  ServiceYesNoAbstainVoteDefinition,
  ServiceIssueStored,
  ServiceConStored,
  ServiceIssue,
  ServiceServiceUser,
  ServiceCity,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueCategory,
  ServiceCountyStored,
  ServiceConQueryCustomizer,
  ServiceCounty,
  ServiceProStored,
  ServicePro,
  ServiceIssueType,
  ServiceComment,
  ServiceIssueAttachment,
  ServiceDistrict,
  ServiceCountyQueryCustomizer,
  ServiceServiceUserStored,
  ServiceCommentStored,
  ServiceIssueCategoryStored,
  ServiceCon,
  ServiceProQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceServiceUserQueryCustomizer,
  ServiceCityStored,
  ServiceIssueAttachmentStored,
  ServiceIssueTypeStored,
  ServiceCityQueryCustomizer,
} from '../data-api';
import type { ServiceYesNoAbstainVoteDefinitionServiceForIssue } from '../data-service';

/**
 * Relation Service Implementation for ServiceYesNoAbstainVoteDefinition.issue
 */
export class ServiceYesNoAbstainVoteDefinitionServiceForIssueImpl
  extends JudoAxiosService
  implements ServiceYesNoAbstainVoteDefinitionServiceForIssue
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getIssue(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    mask?: string,
  ): Promise<ServiceIssueStored> {
    const path = '/service/YesNoAbstainVoteDefinition/issue/~get';
    const queryCustomizer: ServiceIssueQueryCustomizer | undefined = mask ? { _mask: mask } : undefined;
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
  async getRangeForOwner(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition> | ServiceYesNoAbstainVoteDefinition,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>> {
    const path = '/service/ServiceUser/owner/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner,
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setOwner(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<ServiceIssue>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void> {
    const path = '/service/ServiceUser/~update/owner/~set';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async unsetOwner(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<ServiceIssue>,
  ): Promise<void> {
    const path = '/service/ServiceUser/~update/owner/~unset';
    await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForCategories(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition> | ServiceYesNoAbstainVoteDefinition,
    queryCustomizer?: ServiceIssueCategoryQueryCustomizer,
  ): Promise<Array<ServiceIssueCategoryStored>> {
    const path = '/service/IssueCategory/categories/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner,
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setCategories(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<ServiceIssue>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void> {
    const path = '/service/IssueCategory/~update/categories/~set';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async addIssueCategories(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<ServiceIssue>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void> {
    const path = '/service/IssueCategory/~update/categories/~add';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async removeIssueCategories(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<ServiceIssue>,
    selected: Array<JudoIdentifiable<ServiceIssueCategory>>,
  ): Promise<void> {
    const path = '/service/IssueCategory/~update/categories/~remove';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForIssueType(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition> | ServiceYesNoAbstainVoteDefinition,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
  ): Promise<Array<ServiceIssueTypeStored>> {
    const path = '/service/IssueType/issueType/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner,
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setIssueType(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<ServiceIssue>,
    selected: JudoIdentifiable<ServiceIssueType>,
  ): Promise<void> {
    const path = '/service/IssueType/~update/issueType/~set';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async unsetIssueType(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<ServiceIssue>,
  ): Promise<void> {
    const path = '/service/IssueType/~update/issueType/~unset';
    await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForCounty(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition> | ServiceYesNoAbstainVoteDefinition,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>> {
    const path = '/service/County/county/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner,
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setCounty(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<ServiceIssue>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<void> {
    const path = '/service/County/~update/county/~set';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async unsetCounty(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<ServiceIssue>,
  ): Promise<void> {
    const path = '/service/County/~update/county/~unset';
    await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForCity(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition> | ServiceYesNoAbstainVoteDefinition,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>> {
    const path = '/service/City/city/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner,
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setCity(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<ServiceIssue>,
    selected: JudoIdentifiable<ServiceCity>,
  ): Promise<void> {
    const path = '/service/City/~update/city/~set';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async unsetCity(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<ServiceIssue>,
  ): Promise<void> {
    const path = '/service/City/~update/city/~unset';
    await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getRangeForDistrict(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition> | ServiceYesNoAbstainVoteDefinition,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>> {
    const path = '/service/District/district/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner,
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async setDistrict(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<ServiceIssue>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void> {
    const path = '/service/District/~update/district/~set';
    await this.axios.post(this.getPathForActor(path), selected, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async unsetDistrict(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<ServiceIssue>,
  ): Promise<void> {
    const path = '/service/District/~update/district/~unset';
    await this.axios.post(this.getPathForActor(path), undefined, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });
  }
}
