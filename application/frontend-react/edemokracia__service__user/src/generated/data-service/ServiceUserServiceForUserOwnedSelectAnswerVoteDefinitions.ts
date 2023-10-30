//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  ServiceSelectAnswerVoteEntryStored,
  ServiceDebate,
  ServiceSelectAnswerVoteDefinition,
  ServiceDebateStored,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  SelectAnswerVoteSelection,
  ServiceSelectAnswerVoteEntry,
  ServiceIssue,
  ServiceSelectAnswerVoteSelectionStored,
  SelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionStored,
  SelectAnswerVoteSelectionStored,
  ServiceDebateQueryCustomizer,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
  ServiceSelectAnswerVoteSelection,
} from '../data-api';

/**
 * Access Relation Service for ServiceUser.userOwnedSelectAnswerVoteDefinitions
 */
export interface ServiceUserServiceForUserOwnedSelectAnswerVoteDefinitions {
  listUserOwnedSelectAnswerVoteDefinitions(
    queryCustomizer?: ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceSelectAnswerVoteDefinitionStored>>;
}
