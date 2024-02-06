//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type {
  ServiceCreateUserInput,
  ServiceCreateUserInputStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceUserManager,
  ServiceUserManagerQueryCustomizer,
  ServiceUserManagerStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import type { UserServiceForAdminUserManager } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

/**
 * Relation Service Implementation for User.adminUserManager
 */
export class UserServiceForAdminUserManagerImpl extends JudoAxiosService implements UserServiceForAdminUserManager {
  /**
   * From: relation.isAccess, !relation.isCollection
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refreshForAdminUserManager(
    queryCustomizer?: ServiceUserManagerQueryCustomizer,
  ): Promise<ServiceUserManagerStored> {
    const path = '/service/User/adminUserManager/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {});

    return response.data;
  }

  /**
   * From: relation.isRefreshable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceUserManagerQueryCustomizer,
  ): Promise<ServiceUserManagerStored> {
    const path = '/service/UserManager/~get';
    const response = await this.axios.post(
      this.getPathForActor(path),
      queryCustomizer ?? {},
      owner
        ? {
            headers: {
              'X-Judo-SignedIdentifier': owner.__signedIdentifier,
            },
          }
        : undefined,
    );

    return response.data;
  }

  /**
   * From: relation.isUpdatable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async update(target: Partial<ServiceUserManagerStored>): Promise<ServiceUserManagerStored> {
    const path = '/service/UserManager/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * From: relation.validateUpdate
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async validateUpdate(target: Partial<ServiceUserManagerStored>): Promise<ServiceUserManagerStored> {
    const path = '/service/UserManager/~validate';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });

    return response.data;
  }

  async listUsers(
    owner: JudoIdentifiable<ServiceUserManager>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>> {
    const path = '/service/UserManager/users/~list';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  async updateUsers(
    owner: JudoIdentifiable<ServiceUserManager>,
    target: Partial<ServiceServiceUserStored>,
  ): Promise<ServiceServiceUserStored> {
    const path = '/service/UserManager/~update/users/~update';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  async validateUpdateUsers(
    owner: JudoIdentifiable<ServiceUserManager>,
    target: Partial<ServiceServiceUserStored>,
  ): Promise<ServiceServiceUserStored> {
    const path = '/service/UserManager/~update/users/~validate';
    const response = await this.axios.post(this.getPathForActor(path), target, {
      headers: {
        'X-Judo-SignedIdentifier': owner.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * From: relation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createUser(target: ServiceCreateUserInput): Promise<ServiceServiceUserStored> {
    const path = '/service/UserManager/createUser';
    const response = await this.axios.post(this.getPathForActor(path), target);

    return response.data;
  }

  async getTemplateOnCreateUser(): Promise<ServiceCreateUserInput> {
    const path = '/service/CreateUserInput/~template';
    const response = await this.axios.get(this.getPathForActor(path));

    return response.data;
  }
}
