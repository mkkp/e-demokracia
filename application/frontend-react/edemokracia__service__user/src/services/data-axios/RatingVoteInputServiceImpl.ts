//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type { RatingVoteInput, RatingVoteInputStored } from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import type { RatingVoteInputService } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

/**
 * Class Service Implementation for RatingVoteInput
 */
export class RatingVoteInputServiceImpl extends JudoAxiosService implements RatingVoteInputService {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getTemplate(): Promise<RatingVoteInput> {
    const path = '/RatingVoteInput/~template';
    const response = await this.axios.get(this.getPathForActor(path));

    return response.data;
  }
}
