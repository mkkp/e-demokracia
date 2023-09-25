//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  AdminIssueQueryCustomizer,
  AdminYesNoVoteEntryStored,
  AdminYesNoVoteDefinitionStored,
  AdminDebate,
  AdminIssue,
  AdminYesNoVoteEntry,
  AdminYesNoVoteDefinition,
  AdminIssueStored,
  AdminYesNoVoteDefinitionQueryCustomizer,
  AdminDebateStored,
  AdminYesNoVoteEntryQueryCustomizer,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Access Relation Service for AdminAdmin.yesNoVoteDefinitions
 */
export interface AdminAdminServiceForYesNoVoteDefinitions {
  listYesNoVoteDefinitions(
    queryCustomizer?: AdminYesNoVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminYesNoVoteDefinitionStored>>;
}