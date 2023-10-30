//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type { ServiceCreateUserInputStored, ServiceCreateUserInput } from '../data-api';
import type { ServiceCreateUserInputServiceForClass } from '../data-service';

/**
 * Class Service Implementation for ServiceCreateUserInput
 */
export class ServiceCreateUserInputServiceForClassImpl
  extends JudoAxiosService
  implements ServiceCreateUserInputServiceForClass
{
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getTemplate(): Promise<ServiceCreateUserInput> {
    const path = '/service/CreateUserInput/~template';
    const response = await this.axios.get(this.getPathForActor(path));

    return response.data;
  }
}
