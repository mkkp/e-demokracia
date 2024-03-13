//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import { CloseDebateInput, CloseDebateInputStored, JudoRestResponse } from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for CloseDebateInput
 */
export interface CloseDebateInputService {
  getTemplate(): Promise<JudoRestResponse<CloseDebateInput>>;
}
