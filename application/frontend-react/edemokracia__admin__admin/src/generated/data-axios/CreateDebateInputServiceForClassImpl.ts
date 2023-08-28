//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type { CreateDebateInput, CreateDebateInputStored } from '../data-api';
import type { CreateDebateInputServiceForClass } from '../data-service';

/**
 * Class Service Implementation for CreateDebateInput
 */
export class CreateDebateInputServiceForClassImpl extends JudoAxiosService implements CreateDebateInputServiceForClass {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getTemplate(): Promise<CreateDebateInput> {
    const path = '/CreateDebateInput/~template';
    const response = await this.axios.get(this.getPathForActor(path));

    return response.data;
  }
}
