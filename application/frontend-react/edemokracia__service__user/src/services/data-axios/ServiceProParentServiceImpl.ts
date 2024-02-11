//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type {
  JudoRestResponse,
  ServiceProParent,
  ServiceProParentQueryCustomizer,
  ServiceProParentStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import { X_JUDO_SIGNED_IDENTIFIER } from '../data-api/rest/headers';
import type { ServiceProParentService } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

/**
 * Class Service Implementation for ServiceProParent
 */
export class ServiceProParentServiceImpl extends JudoAxiosService implements ServiceProParentService {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async refresh(
    target: JudoIdentifiable<ServiceProParent>,
    queryCustomizer?: ServiceProParentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceProParentStored>> {
    const path = '/service/ProParent/~get';
    return this.axios.post(this.getPathForActor(path), queryCustomizer, {
      headers: {
        [X_JUDO_SIGNED_IDENTIFIER]: target.__signedIdentifier,
        ...(headers ?? {}),
      },
    });
  }
}
