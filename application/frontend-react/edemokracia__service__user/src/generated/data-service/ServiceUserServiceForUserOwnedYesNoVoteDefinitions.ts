//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteEntryStored,
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteDefinitionStored,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceIssue,
  ServiceYesNoVoteEntryQueryCustomizer,
} from '../data-api';

/**
 * Access Relation Service for ServiceUser.userOwnedYesNoVoteDefinitions
 */
export interface ServiceUserServiceForUserOwnedYesNoVoteDefinitions {
  listUserOwnedYesNoVoteDefinitions(
    queryCustomizer?: ServiceYesNoVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceYesNoVoteDefinitionStored>>;
}
