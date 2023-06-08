//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import {
  SelectAnswerInputStored,
  CloseDebateInputStored,
  SelectAnswerInput,
  CloseDebateInput,
  SelectAnswerInputQueryCustomizer,
} from '../data-api';

/**
 * Class Service for CloseDebateInput
 */
export interface CloseDebateInputService {
  getTemplate(): Promise<CloseDebateInput>;

  getRangeForAnswers(
    owner?: JudoIdentifiable<CloseDebateInput> | CloseDebateInput,
    queryCustomizer?: SelectAnswerInputQueryCustomizer,
  ): Promise<Array<SelectAnswerInputStored>>;
}
