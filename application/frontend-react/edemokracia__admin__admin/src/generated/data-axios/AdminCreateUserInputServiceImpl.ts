//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import { AdminCreateUserInputStored, AdminCreateUserInput } from '../data-api';
import { AdminCreateUserInputService } from '../data-service';

/**
 * Class Service Implementation for AdminCreateUserInput
 */
export class AdminCreateUserInputServiceImpl extends JudoAxiosService implements AdminCreateUserInputService {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getTemplate(): Promise<AdminCreateUserInput> {
    const path = '/admin/CreateUserInput/~template';
    const response = await this.axios.get(this.getPathForActor(path));

    return response.data;
  }
}
