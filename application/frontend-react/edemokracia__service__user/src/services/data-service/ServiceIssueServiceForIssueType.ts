//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { ServiceIssueTypeQueryCustomizer, ServiceIssueTypeStored, ServiceIssue, ServiceIssueType } from '../data-api';

/**
 * Relation Service for ServiceIssue.issueType
 */
export interface ServiceIssueServiceForIssueType {
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
  ): Promise<ServiceIssueTypeStored>;
  getRangeForIssueType(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
  ): Promise<Array<ServiceIssueTypeStored>>;
  getTemplate(): Promise<ServiceIssueType>;
  setIssueType(owner: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceIssueType>): Promise<void>;
  unsetIssueType(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
}
