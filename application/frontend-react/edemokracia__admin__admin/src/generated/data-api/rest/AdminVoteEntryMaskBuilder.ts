//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { MaskBuilder } from './MaskBuilder';
import { AdminVoteEntryAttributes, AdminVoteDefinitionAttributes } from '../model';

export class AdminVoteEntryMaskBuilder extends MaskBuilder {
  constructor(protected props: Array<AdminVoteEntryAttributes>) {
    super(props);
  }
}
