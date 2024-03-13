//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import {
  JudoRestResponse,
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceIssueAttachment
 */
export interface ServiceIssueAttachmentService {
  getTemplate(): Promise<JudoRestResponse<ServiceIssueAttachment>>;
  refresh(
    target: JudoIdentifiable<ServiceIssueAttachment>,
    queryCustomizer?: ServiceIssueAttachmentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueAttachmentStored>>;
  delete(target: JudoIdentifiable<ServiceIssueAttachment>): Promise<JudoRestResponse<void>>;
  update(
    target: Partial<ServiceIssueAttachmentStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueAttachmentStored>>;
  validateUpdate(
    target: Partial<ServiceIssueAttachmentStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueAttachmentStored>>;
}
