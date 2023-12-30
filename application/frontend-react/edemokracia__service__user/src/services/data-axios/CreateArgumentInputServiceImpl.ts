//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type { CreateArgumentInput, CreateArgumentInputStored } from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import type { CreateArgumentInputService } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

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
