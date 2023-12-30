//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type { Initializer, InitializerQueryCustomizer, InitializerStored } from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import type { InitializerService } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

/**
 * Class Service Implementation for Initializer
 */
export class InitializerServiceImpl extends JudoAxiosService implements InitializerService {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<Initializer>,
    queryCustomizer?: InitializerQueryCustomizer,
  ): Promise<InitializerStored> {
    const path = '/Initializer/~get';
    const response = await this.axios.post(this.getPathForActor(path), queryCustomizer, {
      headers: {
        'X-Judo-SignedIdentifier': target.__signedIdentifier,
      },
    });

    return response.data;
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async initAreas(): Promise<void> {
    const path = '/Initializer/initAreas';
    const response = await this.axios.post(this.getPathForActor(path), undefined);
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async initCategories(): Promise<void> {
    const path = '/Initializer/initCategories';
    const response = await this.axios.post(this.getPathForActor(path), undefined);
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async initIssueTypes(): Promise<void> {
    const path = '/Initializer/initIssueTypes';
    const response = await this.axios.post(this.getPathForActor(path), undefined);
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async initUsers(): Promise<void> {
    const path = '/Initializer/initUsers';
    const response = await this.axios.post(this.getPathForActor(path), undefined);
  }
}
