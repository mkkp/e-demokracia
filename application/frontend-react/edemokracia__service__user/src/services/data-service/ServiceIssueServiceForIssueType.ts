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
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceIssue.issueType
 */
export interface ServiceIssueServiceForIssueType {
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueTypeStored>>;
  getRangeForIssueType(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueTypeStored>>>;
  getTemplate(): Promise<JudoRestResponse<ServiceIssueType>>;
  setIssueType(
    owner: JudoIdentifiable<ServiceIssue>,
    selected: JudoIdentifiable<ServiceIssueType>,
  ): Promise<JudoRestResponse<void>>;
  unsetIssueType(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
}
