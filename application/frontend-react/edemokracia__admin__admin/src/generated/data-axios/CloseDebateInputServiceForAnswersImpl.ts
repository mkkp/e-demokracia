//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-axios/'+#serviceRelationName(#self)+'Impl.ts'
// Template name: relationServiceImpl.ts.hbs
// Template file: data-axios/relationServiceImpl.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import type {
  SelectAnswerInputStored,
  SelectAnswerInput,
  CloseDebateInput,
  SelectAnswerInputQueryCustomizer,
} from '../data-api';
import type { CloseDebateInputServiceForAnswers } from '../data-service';

/**
 * Relation Service Implementation for CloseDebateInput.answers
 */
export class CloseDebateInputServiceForAnswersImpl
  extends JudoAxiosService
  implements CloseDebateInputServiceForAnswers {}
