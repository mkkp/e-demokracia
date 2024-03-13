//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type {
  JudoRestResponse,
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
import { CommandQueryCustomizer } from '../data-api/common';
import { X_JUDO_MASK, X_JUDO_SIGNED_IDENTIFIER } from '../data-api/rest/headers';
import type { UserServiceForAdminUserManager } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

const DEFAULT_COMMAND_MASK = '{}';

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
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceUserManagerStored>> {
    const path = '/service/User/adminUserManager/~get';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, headers ? { headers } : undefined);
  }

  /**
   * From: relation.isRefreshable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceUserManagerQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceUserManagerStored>> {
    const path = '/service/UserManager/~get';
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
   * From: relation.isUpdatable
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async update(
    target: Partial<ServiceUserManagerStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceUserManagerStored>> {
    const path = '/service/UserManager/~update';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
        [X_JUDO_MASK]: queryCustomizer?._mask ?? DEFAULT_COMMAND_MASK,
      },
    });
  }

  /**
   * From: relation.validateUpdate
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async validateUpdate(target: Partial<ServiceUserManagerStored>): Promise<JudoRestResponse<ServiceUserManagerStored>> {
    const path = '/service/UserManager/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
      },
    });
  }

  async listUsers(
    owner: JudoIdentifiable<ServiceUserManager>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>> {
    const path = '/service/UserManager/users/~list';
    return this.axios.post(this.getPathForActor(path), queryCustomizer ?? {}, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
        ...(headers ?? {}),
      },
    });
  }

  async updateUsers(
    owner: JudoIdentifiable<ServiceUserManager>,
    target: Partial<ServiceServiceUserStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>> {
    const path = '/service/UserManager/~update/users/~update';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
        [X_JUDO_MASK]: queryCustomizer?._mask ?? DEFAULT_COMMAND_MASK,
      },
    });
  }

  async validateUpdateUsers(
    owner: JudoIdentifiable<ServiceUserManager>,
    target: Partial<ServiceServiceUserStored>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>> {
    const path = '/service/UserManager/~update/users/~validate';
    return this.axios.post(this.getPathForActor(path), target, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: owner.__signedIdentifier,
      },
    });
  }

  /**
   * From: relation.target.operations
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async createUser(target: ServiceCreateUserInput): Promise<JudoRestResponse<ServiceServiceUserStored>> {
    const path = '/service/UserManager/createUser';
    return this.axios.post(this.getPathForActor(path), target);
  }

  async getTemplateOnCreateUser(): Promise<JudoRestResponse<ServiceCreateUserInput>> {
    const path = '/service/CreateUserInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }
}
