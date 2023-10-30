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
  ServiceServiceUser,
  ServiceUserManagerStored,
  ServiceCreateUserInput,
  ServiceUserManager,
  ServiceServiceUserStored,
  ServiceServiceUserQueryCustomizer,
  ServiceUserManagerQueryCustomizer,
} from '../data-api';
import type { ServiceUserManagerServiceForClass } from '../data-service';

/**
 * Class Service Implementation for ServiceUserManager
 */
export class ServiceUserManagerServiceForClassImpl extends JudoAxiosService implements ServiceUserManagerServiceForClass {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<ServiceUserManager>,
    queryCustomizer?: ServiceUserManagerQueryCustomizer,
  ): Promise<ServiceUserManagerStored> {
    const path = '/service/UserManager/~get';
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
  async getUsers(
    target: JudoIdentifiable<ServiceUserManager>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>> {
    const path = '/service/UserManager/users/~list';
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
  async getRangeForUsers(
    owner?: JudoIdentifiable<ServiceUserManager> | ServiceUserManager,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>> {
    const path = '/service/UserManager/users/~range';
    const response = await this.axios.post(this.getPathForActor(path), {
      owner: owner ?? {},
      queryCustomizer: queryCustomizer ?? {},
    });

    return response.data;
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createUser(target: ServiceCreateUserInput): Promise<ServiceServiceUserStored> {
    const path = '/service/UserManager/createUser';
    const response = await this.axios.post(this.getPathForActor(path), target);

    return response.data;
  }
}
