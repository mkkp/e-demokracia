//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import type { CloseDebateInput, CloseDebateInputStored, JudoRestResponse } from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';
import { CommandQueryCustomizer } from '../data-api/common';
import { X_JUDO_MASK, X_JUDO_SIGNED_IDENTIFIER } from '../data-api/rest/headers';
import type { CloseDebateInputService } from '../data-service';
import { JudoAxiosService } from './JudoAxiosService';

const DEFAULT_COMMAND_MASK = '{}';

/**
 * Class Service Implementation for CloseDebateInput
 */
export class CloseDebateInputServiceImpl extends JudoAxiosService implements CloseDebateInputService {
  /**
   * @throws {AxiosError} With data containing {@link Array<FeedbackItem>} for status codes: 401, 403.
   */
  async getTemplate(): Promise<JudoRestResponse<CloseDebateInput>> {
    const path = '/CloseDebateInput/~template';
    return this.axios.get(this.getPathForActor(path));
  }
}
