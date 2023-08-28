//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { AdminIssueType, AdminIssueTypeQueryCustomizer, AdminIssueTypeStored } from '../data-api';

/**
 * Class Service for AdminIssueType
 */
export interface AdminIssueTypeServiceForClass {
  getTemplate(): Promise<AdminIssueType>;

  refresh(
    target: JudoIdentifiable<AdminIssueType>,
    queryCustomizer?: AdminIssueTypeQueryCustomizer,
  ): Promise<AdminIssueTypeStored>;

  delete(target: JudoIdentifiable<AdminIssueType>): Promise<void>;

  update(target: Partial<AdminIssueTypeStored>): Promise<AdminIssueTypeStored>;
}
