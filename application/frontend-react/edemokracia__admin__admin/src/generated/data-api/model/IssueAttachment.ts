//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-api/model/'+#classDataName(#self,"")+'.ts'
// Template name: class.ts.hbs
// Template file: model/class.ts.hbs

import { JudoStored } from '@judo/data-api-common';
import { EdemokraciaAttachmentType } from './EdemokraciaAttachmentType';

export interface IssueAttachment {
  link?: null | string;
  file?: null | any;
  type: EdemokraciaAttachmentType;
}
export type IssueAttachmentAttributes = 'link' | 'file' | 'type';

export interface IssueAttachmentStored extends JudoStored<IssueAttachment>, IssueAttachment {}
