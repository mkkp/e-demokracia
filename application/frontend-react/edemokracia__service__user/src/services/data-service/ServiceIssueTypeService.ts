//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import { ServiceIssueType, ServiceIssueTypeQueryCustomizer, ServiceIssueTypeStored } from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceIssueType
 */
export interface ServiceIssueTypeService {
  getTemplate(): Promise<ServiceIssueType>;
  refresh(
    target: JudoIdentifiable<ServiceIssueType>,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
  ): Promise<ServiceIssueTypeStored>;
  delete(target: JudoIdentifiable<ServiceIssueType>): Promise<void>;
  update(target: Partial<ServiceIssueTypeStored>): Promise<ServiceIssueTypeStored>;
}
