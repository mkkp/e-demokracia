//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import { Issue, IssueType, IssueTypeQueryCustomizer, IssueTypeStored } from '../data-api';

/**
 * Relation Service for Issue.issueType
 */
export interface IssueServiceForIssueType {
  getIssueType(owner: JudoIdentifiable<Issue>, mask?: string): Promise<IssueTypeStored>;
}
