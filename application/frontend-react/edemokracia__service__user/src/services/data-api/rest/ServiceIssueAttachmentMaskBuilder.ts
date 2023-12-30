//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"MaskBuilder")+'.ts'
// Template name: mask.ts.hbs
// Template file: rest/mask.ts.hbs

import { ServiceIssueAttachmentAttributes } from '../model';
import { MaskBuilder } from './MaskBuilder';

export class ServiceIssueAttachmentMaskBuilder extends MaskBuilder {
  constructor(protected props: Array<ServiceIssueAttachmentAttributes>) {
    super(props);
  }
}
