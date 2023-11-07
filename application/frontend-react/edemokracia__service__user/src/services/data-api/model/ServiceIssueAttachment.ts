//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { AttachmentType } from './AttachmentType';

export interface ServiceIssueAttachment {
  link?: null | string;
  file?: null | any;
  type: AttachmentType;
}
export type ServiceIssueAttachmentAttributes = 'link' | 'file' | 'type';

export interface ServiceIssueAttachmentStored extends JudoStored<ServiceIssueAttachment>, ServiceIssueAttachment {}
