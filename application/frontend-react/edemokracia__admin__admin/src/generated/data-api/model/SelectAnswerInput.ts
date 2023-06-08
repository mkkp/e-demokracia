//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import { JudoStored } from '@judo/data-api-common';

export interface SelectAnswerInput {
  title: string;
  description: string;
}
export type SelectAnswerInputAttributes = 'title' | 'description';

export interface SelectAnswerInputStored extends JudoStored<SelectAnswerInput>, SelectAnswerInput {}
