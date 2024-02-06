//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  ServiceIssue,
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceIssue.attachments
 */
export interface ServiceIssueServiceForAttachments {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueAttachmentQueryCustomizer,
  ): Promise<Array<ServiceIssueAttachmentStored>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueAttachmentQueryCustomizer,
  ): Promise<ServiceIssueAttachmentStored>;
  getTemplate(): Promise<ServiceIssueAttachment>;
  create(owner: JudoIdentifiable<ServiceIssue>, target: ServiceIssueAttachment): Promise<ServiceIssueAttachmentStored>;
  validateCreate(
    owner: JudoIdentifiable<ServiceIssue>,
    target: ServiceIssueAttachment,
  ): Promise<ServiceIssueAttachment>;
  delete(target: JudoIdentifiable<ServiceIssueAttachment>): Promise<void>;
  update(target: Partial<ServiceIssueAttachmentStored>): Promise<ServiceIssueAttachmentStored>;
  validateUpdate(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceIssueAttachmentStored>,
  ): Promise<ServiceIssueAttachmentStored>;
}
