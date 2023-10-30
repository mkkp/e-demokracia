//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  ServiceUserIssuesStored,
  ServiceUserIssuesQueryCustomizer,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceUserIssues,
  ServiceIssue,
} from '../data-api';

/**
 * Access Relation Service for ServiceUser.userIssues
 */
export interface ServiceUserServiceForUserIssues {
  getUserIssues(mask?: string): Promise<ServiceUserIssuesStored>;
}
