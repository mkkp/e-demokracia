//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { AdminIssueAttachment, AdminIssueAttachmentStored, AdminIssueAttachmentQueryCustomizer } from '../data-api';

/**
 * Class Service for AdminIssueAttachment
 */
export interface AdminIssueAttachmentServiceForClass {
  getTemplate(): Promise<AdminIssueAttachment>;

  refresh(
    target: JudoIdentifiable<AdminIssueAttachment>,
    queryCustomizer?: AdminIssueAttachmentQueryCustomizer,
  ): Promise<AdminIssueAttachmentStored>;

  delete(target: JudoIdentifiable<AdminIssueAttachment>): Promise<void>;

  update(target: Partial<AdminIssueAttachmentStored>): Promise<AdminIssueAttachmentStored>;
}
