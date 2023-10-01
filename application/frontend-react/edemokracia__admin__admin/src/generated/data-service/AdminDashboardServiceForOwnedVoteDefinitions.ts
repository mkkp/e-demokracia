//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminVoteDefinitionQueryCustomizer,
  AdminIssueStored,
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminIssueQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  AdminDebate,
  AdminIssue,
  AdminVoteDefinition,
  AdminDebateStored,
  AdminDashboard,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for AdminDashboard.ownedVoteDefinitions
 */
export interface AdminDashboardServiceForOwnedVoteDefinitions {
  listOwnedVoteDefinitions(
    owner: JudoIdentifiable<AdminDashboard>,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>>;

  deleteOwnedVoteDefinitions(
    owner: JudoIdentifiable<AdminDashboard>,
    target: JudoIdentifiable<AdminVoteDefinition>,
  ): Promise<void>;

  updateOwnedVoteDefinitions(
    owner: JudoIdentifiable<AdminDashboard>,
    target: Partial<AdminVoteDefinitionStored>,
  ): Promise<AdminVoteDefinitionStored>;
}
