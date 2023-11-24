//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceIssueTypeQueryCustomizer,
  ServiceCreateIssueInput,
  ServiceIssueTypeStored,
  ServiceIssueType,
} from '../data-api';

/**
 * Relation Service for ServiceCreateIssueInput.issueType
 */
export interface ServiceCreateIssueInputServiceForIssueType {
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
  ): Promise<ServiceIssueTypeStored>;
  getRangeForIssueType(
    owner: JudoIdentifiable<ServiceCreateIssueInput> | ServiceCreateIssueInput,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
  ): Promise<Array<ServiceIssueTypeStored>>;
  getTemplate(): Promise<ServiceIssueType>;
}
