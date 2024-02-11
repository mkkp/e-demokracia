//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'data-axios/'+'AccessServiceImpl.ts'
// Template name: accessServiceImpl.ts.hbs
// Template file: data-axios/accessServiceImpl.ts.hbs

import type { AxiosResponse } from 'axios';
import {
  JudoRestResponse,
  ServiceCountyStored,
  ServiceDashboardStored,
  ServiceIssueCategoryStored,
  ServiceIssueStored,
  ServiceIssueTypeStored,
  ServiceRatingVoteDefinitionStored,
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceServicePrincipalUserStored,
  ServiceUserIssuesStored,
  ServiceUserManagerStored,
  ServiceUserProfileStored,
  ServiceUserVoteDefinitionStored,
  ServiceVoteDefinitionStored,
  ServiceVoteEntryStored,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceYesNoVoteDefinitionStored,
} from '../data-api';
import type { JudoDownloadFile, JudoMetaData, JudoToken } from '../data-api/common';
import type { AccessService } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

export class AccessServiceImpl extends JudoAxiosService implements AccessService {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   * @return {Promise<ServiceServicePrincipalUser>}
   */
  async getPrincipal(): Promise<JudoRestResponse<ServiceServicePrincipalUserStored>> {
    return this.axios.get(this.getPathForActor('service/User/~principal'));
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   * @return {Promise<JudoMetaData>}
   */
  async getMetaData(): Promise<JudoRestResponse<JudoMetaData>> {
    return this.axios.get(this.getPathForActor('service/User/~meta'));
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   * @return {Promise<string>}
   */
  async uploadFile(attributePath: string, file: File): Promise<any> {
    const responseToken: any = await this.axios.post(this.getPathForActor(attributePath + '/~upload-token'));

    if (!responseToken) {
      throw new Error(`Could not upload file, could not obtain Upload Token!`);
    }

    const formData = new FormData();
    formData.append(file.name, file);

    const response = await this.axios.post(this.axiosProvider.getFilePath('upload'), formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-Token': responseToken.data.token,
      },
    });

    if (response.status === 200) {
      return response;
    } else {
      throw new Error(`Unexpected upload response: ${response.status}\n${response}`);
    }
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   * @return {Promise<JudoDownloadFile>}
   */
  async downloadFile(downloadToken: string, disposition: 'inline' | 'attachment'): Promise<any> {
    const response = await this.axios.get(`${this.axiosProvider.getFilePath('download')}?disposition=${disposition}`, {
      responseType: 'blob',
      headers: {
        'X-Token': downloadToken,
      },
    });
    return response;
  }
  /**
   * @return {Promise<ServiceIssueCategoryStored | undefined>}
   */
  async findInstanceOfAdminCategories(
    identifier: string,
    mask?: string,
  ): Promise<ServiceIssueCategoryStored | undefined> {
    try {
      const path = '/service/User/adminCategories/~list';
      const response = await this.axios.post(this.getPathForActor(path), {
        _identifier: identifier,
        _mask: mask,
        _seek: {
          limit: 1,
        },
      });
      if (Array.isArray(response.data) && response.data.length === 1) {
        return response.data[0];
      }
      return undefined;
    } catch (error) {
      return undefined;
    }
  }
  /**
   * @return {Promise<ServiceCountyStored | undefined>}
   */
  async findInstanceOfAdminCounties(identifier: string, mask?: string): Promise<ServiceCountyStored | undefined> {
    try {
      const path = '/service/User/adminCounties/~list';
      const response = await this.axios.post(this.getPathForActor(path), {
        _identifier: identifier,
        _mask: mask,
        _seek: {
          limit: 1,
        },
      });
      if (Array.isArray(response.data) && response.data.length === 1) {
        return response.data[0];
      }
      return undefined;
    } catch (error) {
      return undefined;
    }
  }
  /**
   * @return {Promise<ServiceIssueTypeStored | undefined>}
   */
  async findInstanceOfAdminIssueTypes(identifier: string, mask?: string): Promise<ServiceIssueTypeStored | undefined> {
    try {
      const path = '/service/User/adminIssueTypes/~list';
      const response = await this.axios.post(this.getPathForActor(path), {
        _identifier: identifier,
        _mask: mask,
        _seek: {
          limit: 1,
        },
      });
      if (Array.isArray(response.data) && response.data.length === 1) {
        return response.data[0];
      }
      return undefined;
    } catch (error) {
      return undefined;
    }
  }
  /**
   * @return {Promise<ServiceIssueStored | undefined>}
   */
  async findInstanceOfAdminIssues(identifier: string, mask?: string): Promise<ServiceIssueStored | undefined> {
    try {
      const path = '/service/User/adminIssues/~list';
      const response = await this.axios.post(this.getPathForActor(path), {
        _identifier: identifier,
        _mask: mask,
        _seek: {
          limit: 1,
        },
      });
      if (Array.isArray(response.data) && response.data.length === 1) {
        return response.data[0];
      }
      return undefined;
    } catch (error) {
      return undefined;
    }
  }
  /**
   * @return {Promise<ServiceVoteDefinitionStored | undefined>}
   */
  async findInstanceOfAdminVoteDefinitions(
    identifier: string,
    mask?: string,
  ): Promise<ServiceVoteDefinitionStored | undefined> {
    try {
      const path = '/service/User/adminVoteDefinitions/~list';
      const response = await this.axios.post(this.getPathForActor(path), {
        _identifier: identifier,
        _mask: mask,
        _seek: {
          limit: 1,
        },
      });
      if (Array.isArray(response.data) && response.data.length === 1) {
        return response.data[0];
      }
      return undefined;
    } catch (error) {
      return undefined;
    }
  }
  /**
   * @return {Promise<ServiceVoteEntryStored | undefined>}
   */
  async findInstanceOfAdminVoteEntries(identifier: string, mask?: string): Promise<ServiceVoteEntryStored | undefined> {
    try {
      const path = '/service/User/adminVoteEntries/~list';
      const response = await this.axios.post(this.getPathForActor(path), {
        _identifier: identifier,
        _mask: mask,
        _seek: {
          limit: 1,
        },
      });
      if (Array.isArray(response.data) && response.data.length === 1) {
        return response.data[0];
      }
      return undefined;
    } catch (error) {
      return undefined;
    }
  }
  /**
   * @return {Promise<ServiceIssueStored | undefined>}
   */
  async findInstanceOfIssues(identifier: string, mask?: string): Promise<ServiceIssueStored | undefined> {
    try {
      const path = '/service/User/issues/~list';
      const response = await this.axios.post(this.getPathForActor(path), {
        _identifier: identifier,
        _mask: mask,
        _seek: {
          limit: 1,
        },
      });
      if (Array.isArray(response.data) && response.data.length === 1) {
        return response.data[0];
      }
      return undefined;
    } catch (error) {
      return undefined;
    }
  }
  /**
   * @return {Promise<ServiceRatingVoteDefinitionStored | undefined>}
   */
  async findInstanceOfRatingVoteDefinitions(
    identifier: string,
    mask?: string,
  ): Promise<ServiceRatingVoteDefinitionStored | undefined> {
    try {
      const path = '/service/User/ratingVoteDefinitions/~list';
      const response = await this.axios.post(this.getPathForActor(path), {
        _identifier: identifier,
        _mask: mask,
        _seek: {
          limit: 1,
        },
      });
      if (Array.isArray(response.data) && response.data.length === 1) {
        return response.data[0];
      }
      return undefined;
    } catch (error) {
      return undefined;
    }
  }
  /**
   * @return {Promise<ServiceSelectAnswerVoteDefinitionStored | undefined>}
   */
  async findInstanceOfSelectAnswerVoteDefinitions(
    identifier: string,
    mask?: string,
  ): Promise<ServiceSelectAnswerVoteDefinitionStored | undefined> {
    try {
      const path = '/service/User/selectAnswerVoteDefinitions/~list';
      const response = await this.axios.post(this.getPathForActor(path), {
        _identifier: identifier,
        _mask: mask,
        _seek: {
          limit: 1,
        },
      });
      if (Array.isArray(response.data) && response.data.length === 1) {
        return response.data[0];
      }
      return undefined;
    } catch (error) {
      return undefined;
    }
  }
  /**
   * @return {Promise<ServiceVoteEntryStored | undefined>}
   */
  async findInstanceOfVoteEntries(identifier: string, mask?: string): Promise<ServiceVoteEntryStored | undefined> {
    try {
      const path = '/service/User/voteEntries/~list';
      const response = await this.axios.post(this.getPathForActor(path), {
        _identifier: identifier,
        _mask: mask,
        _seek: {
          limit: 1,
        },
      });
      if (Array.isArray(response.data) && response.data.length === 1) {
        return response.data[0];
      }
      return undefined;
    } catch (error) {
      return undefined;
    }
  }
  /**
   * @return {Promise<ServiceYesNoAbstainVoteDefinitionStored | undefined>}
   */
  async findInstanceOfYesNoAbstainVoteDefinitions(
    identifier: string,
    mask?: string,
  ): Promise<ServiceYesNoAbstainVoteDefinitionStored | undefined> {
    try {
      const path = '/service/User/yesNoAbstainVoteDefinitions/~list';
      const response = await this.axios.post(this.getPathForActor(path), {
        _identifier: identifier,
        _mask: mask,
        _seek: {
          limit: 1,
        },
      });
      if (Array.isArray(response.data) && response.data.length === 1) {
        return response.data[0];
      }
      return undefined;
    } catch (error) {
      return undefined;
    }
  }
  /**
   * @return {Promise<ServiceYesNoVoteDefinitionStored | undefined>}
   */
  async findInstanceOfYesNoVoteDefinitions(
    identifier: string,
    mask?: string,
  ): Promise<ServiceYesNoVoteDefinitionStored | undefined> {
    try {
      const path = '/service/User/yesNoVoteDefinitions/~list';
      const response = await this.axios.post(this.getPathForActor(path), {
        _identifier: identifier,
        _mask: mask,
        _seek: {
          limit: 1,
        },
      });
      if (Array.isArray(response.data) && response.data.length === 1) {
        return response.data[0];
      }
      return undefined;
    } catch (error) {
      return undefined;
    }
  }
}
