//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
} from '../data-api';

/**
 * Class Service for ServiceIssueAttachment
 */
export interface ServiceIssueAttachmentService {
  getTemplate(): Promise<ServiceIssueAttachment>;
  refresh(
    target: JudoIdentifiable<ServiceIssueAttachment>,
    queryCustomizer?: ServiceIssueAttachmentQueryCustomizer,
  ): Promise<ServiceIssueAttachmentStored>;
  delete(target: JudoIdentifiable<ServiceIssueAttachment>): Promise<void>;
  update(target: Partial<ServiceIssueAttachmentStored>): Promise<ServiceIssueAttachmentStored>;
}