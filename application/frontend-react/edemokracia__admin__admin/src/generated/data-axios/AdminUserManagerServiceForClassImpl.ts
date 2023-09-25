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
  AdminUserManager,
  AdminUserManagerStored,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminUser,
  AdminCreateUserInput,
  AdminUserManagerQueryCustomizer,
} from '../data-api';
import type { AdminUserManagerServiceForClass } from '../data-service';

/**
 * Class Service Implementation for AdminUserManager
 */
export class AdminUserManagerServiceForClassImpl extends JudoAxiosService implements AdminUserManagerServiceForClass {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<AdminUserManager>,
    queryCustomizer?: AdminUserManagerQueryCustomizer,
  ): Promise<AdminUserManagerStored> {
    const path = '/admin/UserManager/~get';
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
    target: JudoIdentifiable<AdminUserManager>,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>> {
    const path = '/admin/UserManager/users/~list';
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
    owner?: JudoIdentifiable<AdminUserManager> | AdminUserManager,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>> {
    const path = '/admin/UserManager/users/~range';
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
  async createUser(target: AdminCreateUserInput): Promise<AdminUserStored> {
    const path = '/admin/UserManager/createUser';
    const response = await this.axios.post(this.getPathForActor(path), target);

    return response.data;
  }
}
