//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  AdminRatingVoteDefinition,
  AdminIssueQueryCustomizer,
  AdminRatingVoteDefinitionStored,
  AdminDebate,
  AdminIssue,
  AdminIssueStored,
  AdminRatingVoteEntryQueryCustomizer,
  AdminRatingVoteEntryStored,
  AdminRatingVoteDefinitionQueryCustomizer,
  AdminDebateStored,
  AdminRatingVoteEntry,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Access Relation Service for AdminAdmin.userOwnedRatingVoteDefinitions
 */
export interface AdminAdminServiceForUserOwnedRatingVoteDefinitions {
  listUserOwnedRatingVoteDefinitions(
    queryCustomizer?: AdminRatingVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminRatingVoteDefinitionStored>>;
}
