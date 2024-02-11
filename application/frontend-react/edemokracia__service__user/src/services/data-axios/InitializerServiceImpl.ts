//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type { Initializer, InitializerQueryCustomizer, InitializerStored, JudoRestResponse } from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import { X_JUDO_SIGNED_IDENTIFIER } from '../data-api/rest/headers';
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
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<InitializerStored>> {
    const path = '/Initializer/~get';
    return this.axios.post(this.getPathForActor(path), queryCustomizer, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
        ...(headers ?? {}),
      },
    });
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async initAreas(): Promise<JudoRestResponse<void>> {
    const path = '/Initializer/initAreas';
    return this.axios.post(this.getPathForActor(path), undefined);
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async initCategories(): Promise<JudoRestResponse<void>> {
    const path = '/Initializer/initCategories';
    return this.axios.post(this.getPathForActor(path), undefined);
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async initIssueTypes(): Promise<JudoRestResponse<void>> {
    const path = '/Initializer/initIssueTypes';
    return this.axios.post(this.getPathForActor(path), undefined);
  }

  /**
   * @throws {AxiosError}
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 400, 401, 403.
   */
  async initUsers(): Promise<JudoRestResponse<void>> {
    const path = '/Initializer/initUsers';
    return this.axios.post(this.getPathForActor(path), undefined);
  }
}
