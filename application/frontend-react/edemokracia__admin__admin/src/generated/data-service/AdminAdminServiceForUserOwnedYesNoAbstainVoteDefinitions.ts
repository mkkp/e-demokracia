//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  AdminYesNoAbstainVoteDefinition,
  AdminIssueQueryCustomizer,
  AdminYesNoAbstainVoteEntry,
  AdminDebate,
  AdminIssue,
  AdminIssueStored,
  AdminYesNoAbstainVoteEntryQueryCustomizer,
  AdminYesNoAbstainVoteEntryStored,
  AdminDebateStored,
  AdminYesNoAbstainVoteDefinitionQueryCustomizer,
  AdminYesNoAbstainVoteDefinitionStored,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Access Relation Service for AdminAdmin.userOwnedYesNoAbstainVoteDefinitions
 */
export interface AdminAdminServiceForUserOwnedYesNoAbstainVoteDefinitions {
  listUserOwnedYesNoAbstainVoteDefinitions(
    queryCustomizer?: AdminYesNoAbstainVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminYesNoAbstainVoteDefinitionStored>>;
}
