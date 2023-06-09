//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder, RelationMaskBuilder } from './MaskBuilder';
import { CloseDebateInputAttributes, SelectAnswerInputAttributes } from '../model';

import {} from './SelectAnswerInputMaskBuilder';

export class CloseDebateInputAnswersMaskBuilder extends RelationMaskBuilder {
  constructor(protected props: Array<SelectAnswerInputAttributes>) {
    super('answers', props);
  }
}

export class CloseDebateInputMaskBuilder extends MaskBuilder {
  constructor(protected props: Array<CloseDebateInputAttributes | CloseDebateInputAnswersMaskBuilder>) {
    super(props);
  }
}
