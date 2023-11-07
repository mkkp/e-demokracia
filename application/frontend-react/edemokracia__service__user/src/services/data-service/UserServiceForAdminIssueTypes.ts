//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { ServiceIssueTypeQueryCustomizer, ServiceIssueTypeStored, ServiceIssueType } from '../data-api';

/**
 * Relation Service for User.adminIssueTypes
 */
export interface UserServiceForAdminIssueTypes {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
  ): Promise<Array<ServiceIssueTypeStored>>;

  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
  ): Promise<ServiceIssueTypeStored>;

  getTemplate(): Promise<ServiceIssueType>;

  create(target: ServiceIssueType): Promise<ServiceIssueTypeStored>;

  delete(target: JudoIdentifiable<ServiceIssueType>): Promise<void>;

  update(target: Partial<ServiceIssueTypeStored>): Promise<ServiceIssueTypeStored>;
}
