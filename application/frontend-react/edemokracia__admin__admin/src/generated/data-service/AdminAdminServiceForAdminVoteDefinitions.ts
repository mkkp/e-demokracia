//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  AdminVoteDefinitionQueryCustomizer,
  SelectAnswerVoteSelectionQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminIssueQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  AdminDebate,
  AdminIssue,
  AdminIssueStored,
  AdminVoteDefinition,
  AdminDebateStored,
  SelectAnswerVoteSelection,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Access Relation Service for AdminAdmin.adminVoteDefinitions
 */
export interface AdminAdminServiceForAdminVoteDefinitions {
  listAdminVoteDefinitions(
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>>;
}
