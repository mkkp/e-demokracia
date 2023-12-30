//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type { CreateCommentInput, CreateCommentInputStored } from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import type { CreateCommentInputService } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

/**
 * Class Service Implementation for CreateCommentInput
 */
export class CreateCommentInputServiceImpl extends JudoAxiosService implements CreateCommentInputService {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getTemplate(): Promise<CreateCommentInput> {
    const path = '/CreateCommentInput/~template';
    const response = await this.axios.get(this.getPathForActor(path));

    return response.data;
  }
}
