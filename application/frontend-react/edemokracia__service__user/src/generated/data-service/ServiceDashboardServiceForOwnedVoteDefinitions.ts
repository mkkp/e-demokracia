//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceVoteDefinitionStored,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceDashboard,
  ServiceIssueQueryCustomizer,
  ServiceVoteDefinition,
  ServiceIssueStored,
  SelectAnswerVoteSelection,
  ServiceIssue,
} from '../data-api';

/**
 * Relation Service for ServiceDashboard.ownedVoteDefinitions
 */
export interface ServiceDashboardServiceForOwnedVoteDefinitions {
  listOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;

  deleteOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceDashboard>,
    target: JudoIdentifiable<ServiceVoteDefinition>,
  ): Promise<void>;

  updateOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceDashboard>,
    target: Partial<ServiceVoteDefinitionStored>,
  ): Promise<ServiceVoteDefinitionStored>;
}
