//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import type { JudoStored } from '@judo/data-api-common';
import { EdemokraciaAttachmentType } from './EdemokraciaAttachmentType';

export interface AdminIssueAttachment {
  link?: null | string;
  file?: null | any;
  type: EdemokraciaAttachmentType;
}
export type AdminIssueAttachmentAttributes = 'link' | 'file' | 'type';

export interface AdminIssueAttachmentStored extends JudoStored<AdminIssueAttachment>, AdminIssueAttachment {}
