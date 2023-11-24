//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'data-axios/'+'AccessServiceImpl.ts'
// Template name: accessServiceImpl.ts.hbs
// Template file: data-axios/accessServiceImpl.ts.hbs

import type { AxiosResponse } from 'axios';
import type { JudoDownloadFile, JudoMetaData, JudoToken } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type { ServiceServicePrincipalUserStored } from '../data-api';
import { AccessService } from '../data-service';

export class AccessServiceImpl extends JudoAxiosService implements AccessService {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   * @return {Promise<ServiceServicePrincipalUser>}
   */
  async getPrincipal(): Promise<ServiceServicePrincipalUserStored> {
    const response = await this.axios.get(this.getPathForActor('service/User/~principal'));

    return response.data;
  }

  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   * @return {Promise<JudoMetaData>}
   */
  async getMetaData(): Promise<JudoMetaData> {
    const response = await this.axios.get(this.getPathForActor('service/User/~meta'));
    return response.data;
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
}