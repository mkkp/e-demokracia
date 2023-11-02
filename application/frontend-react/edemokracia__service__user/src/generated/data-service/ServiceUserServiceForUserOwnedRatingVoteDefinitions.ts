//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  ServiceRatingVoteDefinition,
  ServiceRatingVoteEntryQueryCustomizer,
  ServiceRatingVoteDefinitionStored,
  ServiceIssueQueryCustomizer,
  ServiceRatingVoteDefinitionQueryCustomizer,
  ServiceRatingVoteEntry,
  ServiceIssueStored,
  ServiceRatingVoteEntryStored,
  ServiceIssue,
} from '../data-api';

/**
 * Access Relation Service for ServiceUser.userOwnedRatingVoteDefinitions
 */
export interface ServiceUserServiceForUserOwnedRatingVoteDefinitions {
  listUserOwnedRatingVoteDefinitions(
    queryCustomizer?: ServiceRatingVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceRatingVoteDefinitionStored>>;
}
