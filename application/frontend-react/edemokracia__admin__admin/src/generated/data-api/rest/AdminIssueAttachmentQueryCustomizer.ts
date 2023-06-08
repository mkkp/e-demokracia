//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getQueryCustomizers(#application)
// Path expression: 'data-api/rest/'+#classDataName(#self,"QueryCustomizer")+'.ts'
// Template name: queryCustomizer.ts.hbs
// Template file: rest/queryCustomizer.ts.hbs

import { QueryCustomizer } from '@judo/data-api-common';
import { AdminIssueAttachment } from '../model/AdminIssueAttachment';

import { FilterByAttachmentType } from './FilterByAttachmentType';
import { FilterByURL } from './FilterByURL';

export interface AdminIssueAttachmentQueryCustomizer extends QueryCustomizer<AdminIssueAttachment> {
  link?: Array<FilterByURL>;
  type?: Array<FilterByAttachmentType>;
}
