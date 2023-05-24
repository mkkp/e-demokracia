//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-axios/'+#serviceClassName(#self)+'Impl.ts'
// Template name: classServiceImpl.ts.hbs
// Template file: data-axios/classServiceImpl.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import { JudoAxiosService } from './JudoAxiosService';
import { SelectAnswerInputStored, SelectAnswerInput } from '../data-api';
import { SelectAnswerInputService } from '../data-service';

/**
 * Class Service Implementation for SelectAnswerInput
 */
export class SelectAnswerInputServiceImpl extends JudoAxiosService implements SelectAnswerInputService {}
