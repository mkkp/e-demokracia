//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
  ServiceIssue,
} from '../data-api';

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
  delete(target: JudoIdentifiable<ServiceIssueAttachment>): Promise<void>;
  update(target: Partial<ServiceIssueAttachmentStored>): Promise<ServiceIssueAttachmentStored>;
}
