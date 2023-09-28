//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder } from './MaskBuilder';
import { AdminVoteDefinitionAttributes } from '../model';

export class AdminUserVoteDefinitionMaskBuilder extends MaskBuilder {
  constructor(protected props: Array<any>) {
    super(props);
  }
}
