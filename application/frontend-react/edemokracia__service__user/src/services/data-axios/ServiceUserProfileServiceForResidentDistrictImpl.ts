//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type {
  JudoRestResponse,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceUserProfile,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import { CommandQueryCustomizer } from '../data-api/common';
import { X_JUDO_MASK, X_JUDO_SIGNED_IDENTIFIER } from '../data-api/rest/headers';
import type { ServiceUserProfileServiceForResidentDistrict } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

const DEFAULT_COMMAND_MASK = '{}';

/**
 * Relation Service Implementation for ServiceUserProfile.residentDistrict
 */
export class ServiceUserProfileServiceForResidentDistrictImpl
  extends JudoAxiosService
  implements ServiceUserProfileServiceForResidentDistrict
{
  /**
   * From: relation.isRefreshable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceDistrictStored>> {
    const path = '/service/District/~get';
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
  async getRangeForResidentDistrict(
    owner: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>> {
    const path = '/service/UserProfile/residentDistrict/~range';
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
  async getTemplate(): Promise<JudoRestResponse<ServiceDistrict>> {
    const path = '/service/District/~template';
    return this.axios.get(this.getPathForActor(path));
  }

  /**
   * From: relation.isSetable
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
   * From: relation.isUnsetable
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
