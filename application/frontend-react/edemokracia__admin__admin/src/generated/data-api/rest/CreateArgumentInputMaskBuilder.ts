//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder } from './MaskBuilder';
import { CreateArgumentInputAttributes } from '../model';

export class CreateArgumentInputMaskBuilder extends MaskBuilder {
  constructor(protected props: Array<CreateArgumentInputAttributes>) {
    super(props);
  }
}
