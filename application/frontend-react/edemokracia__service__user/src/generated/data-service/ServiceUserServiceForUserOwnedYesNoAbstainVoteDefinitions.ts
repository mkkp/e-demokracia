//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceIssueQueryCustomizer,
  ServiceYesNoAbstainVoteDefinition,
  ServiceIssueStored,
  ServiceYesNoAbstainVoteEntryStored,
  ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ServiceYesNoAbstainVoteEntry,
  ServiceIssue,
} from '../data-api';

/**
 * Access Relation Service for ServiceUser.userOwnedYesNoAbstainVoteDefinitions
 */
export interface ServiceUserServiceForUserOwnedYesNoAbstainVoteDefinitions {
  listUserOwnedYesNoAbstainVoteDefinitions(
    queryCustomizer?: ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceYesNoAbstainVoteDefinitionStored>>;
}
