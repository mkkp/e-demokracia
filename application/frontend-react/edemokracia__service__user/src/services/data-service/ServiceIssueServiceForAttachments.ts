//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  JudoRestResponse,
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
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueAttachmentStored>>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueAttachmentQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueAttachmentStored>>;
  getTemplate(): Promise<JudoRestResponse<ServiceIssueAttachment>>;
  create(
    owner: JudoIdentifiable<ServiceIssue>,
    target: ServiceIssueAttachment,
  ): Promise<JudoRestResponse<ServiceIssueAttachmentStored>>;
  validateCreate(
    owner: JudoIdentifiable<ServiceIssue>,
    target: ServiceIssueAttachment,
  ): Promise<JudoRestResponse<ServiceIssueAttachment>>;
  delete(target: JudoIdentifiable<ServiceIssueAttachment>): Promise<JudoRestResponse<void>>;
  update(target: Partial<ServiceIssueAttachmentStored>): Promise<JudoRestResponse<ServiceIssueAttachmentStored>>;
  validateUpdate(
    owner: JudoIdentifiable<ServiceIssue>,
    target: Partial<ServiceIssueAttachmentStored>,
  ): Promise<JudoRestResponse<ServiceIssueAttachmentStored>>;
}
