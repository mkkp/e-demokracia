//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import {
  JudoRestResponse,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceIssueType
 */
export interface ServiceIssueTypeService {
  getTemplate(): Promise<JudoRestResponse<ServiceIssueType>>;
  refresh(
    target: JudoIdentifiable<ServiceIssueType>,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueTypeStored>>;
  delete(target: JudoIdentifiable<ServiceIssueType>): Promise<JudoRestResponse<void>>;
  update(
    target: Partial<ServiceIssueTypeStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueTypeStored>>;
  validateUpdate(
    target: Partial<ServiceIssueTypeStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueTypeStored>>;
}
