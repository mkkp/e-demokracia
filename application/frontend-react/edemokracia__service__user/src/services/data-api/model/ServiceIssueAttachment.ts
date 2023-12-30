//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '../common';
import { AttachmentType } from './AttachmentType';

export interface ServiceIssueAttachment {
  file?: null | any;
  link?: null | string;
  type: AttachmentType;
}

export type ServiceIssueAttachmentAttributes = 'file' | 'link' | 'type';

export interface ServiceIssueAttachmentStored extends JudoStored<ServiceIssueAttachment>, ServiceIssueAttachment {}
