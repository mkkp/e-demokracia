//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  AdminSelectAnswerVoteEntryStored,
  AdminSelectAnswerVoteEntry,
  AdminSelectAnswerVoteSelectionQueryCustomizer,
  AdminIssueStored,
  AdminSelectAnswerVoteSelection,
  AdminSelectAnswerVoteEntryQueryCustomizer,
  AdminSelectAnswerVoteSelectionStored,
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  AdminIssueQueryCustomizer,
  AdminSelectAnswerVoteDefinitionStored,
  SelectAnswerVoteSelectionStored,
  AdminDebate,
  AdminIssue,
  AdminSelectAnswerVoteDefinition,
  AdminDebateStored,
  AdminSelectAnswerVoteDefinitionQueryCustomizer,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Access Relation Service for AdminAdmin.userOwnedSelectAnswerVoteDefinitions
 */
export interface AdminAdminServiceForUserOwnedSelectAnswerVoteDefinitions {
  listUserOwnedSelectAnswerVoteDefinitions(
    queryCustomizer?: AdminSelectAnswerVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminSelectAnswerVoteDefinitionStored>>;
}
