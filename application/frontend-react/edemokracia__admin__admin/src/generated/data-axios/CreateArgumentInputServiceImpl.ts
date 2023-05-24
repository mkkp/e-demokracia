//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import { CreateArgumentInputStored, CreateArgumentInput } from '../data-api';
import { CreateArgumentInputService } from '../data-service';

/**
 * Class Service Implementation for CreateArgumentInput
 */
export class CreateArgumentInputServiceImpl extends JudoAxiosService implements CreateArgumentInputService {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getTemplate(): Promise<CreateArgumentInput> {
    const path = '/CreateArgumentInput/~template';
    const response = await this.axios.get(this.getPathForActor(path));

    return response.data;
  }
}
