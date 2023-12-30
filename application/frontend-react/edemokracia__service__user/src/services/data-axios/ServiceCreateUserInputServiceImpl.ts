//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type { ServiceCreateUserInput, ServiceCreateUserInputStored } from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import type { ServiceCreateUserInputService } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

/**
 * Class Service Implementation for ServiceCreateUserInput
 */
export class ServiceCreateUserInputServiceImpl extends JudoAxiosService implements ServiceCreateUserInputService {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getTemplate(): Promise<ServiceCreateUserInput> {
    const path = '/service/CreateUserInput/~template';
    const response = await this.axios.get(this.getPathForActor(path));

    return response.data;
  }
}
