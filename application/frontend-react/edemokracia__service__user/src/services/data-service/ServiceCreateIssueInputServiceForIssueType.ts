//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  JudoRestResponse,
  ServiceCreateIssueInput,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceCreateIssueInput.issueType
 */
export interface ServiceCreateIssueInputServiceForIssueType {
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueTypeStored>>;
  getRangeForIssueType(
    owner: JudoIdentifiable<ServiceCreateIssueInput> | ServiceCreateIssueInput,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueTypeStored>>>;
  getTemplate(): Promise<JudoRestResponse<ServiceIssueType>>;
  setIssueType(
    owner: JudoIdentifiable<ServiceCreateIssueInput>,
    selected: JudoIdentifiable<ServiceIssueType>,
  ): Promise<JudoRestResponse<void>>;
  unsetIssueType(owner: JudoIdentifiable<ServiceCreateIssueInput>): Promise<JudoRestResponse<void>>;
}
