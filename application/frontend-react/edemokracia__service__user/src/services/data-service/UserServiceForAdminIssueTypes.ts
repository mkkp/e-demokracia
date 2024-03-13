//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  JudoRestResponse,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for User.adminIssueTypes
 */
export interface UserServiceForAdminIssueTypes {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueTypeStored>>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueTypeStored>>;
  getTemplate(): Promise<JudoRestResponse<ServiceIssueType>>;
  create(
    target: ServiceIssueType,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueTypeStored>>;
  validateCreate(
    target: ServiceIssueType,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueType>>;
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
