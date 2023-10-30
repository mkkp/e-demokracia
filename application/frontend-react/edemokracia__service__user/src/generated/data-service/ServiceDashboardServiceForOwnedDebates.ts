//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ServiceCommentQueryCustomizer,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceRatingVoteDefinitionStored,
  ServiceSelectAnswerVoteDefinition,
  ServiceDebateStored,
  ServiceIssueQueryCustomizer,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceVoteDefinition,
  ServiceYesNoAbstainVoteDefinition,
  ServiceIssueStored,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceConStored,
  ServiceIssue,
  ServiceServiceUser,
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceDebateQueryCustomizer,
  ServiceConQueryCustomizer,
  ServiceProStored,
  ServicePro,
  ServiceVoteDefinitionStored,
  ServiceRatingVoteDefinition,
  ServiceComment,
  ServiceDebate,
  ServiceYesNoVoteDefinitionStored,
  ServiceRatingVoteDefinitionQueryCustomizer,
  ServiceCommentStored,
  ServiceServiceUserStored,
  ServiceCon,
  ServiceYesNoVoteDefinition,
  ServiceProQueryCustomizer,
  ServiceDashboard,
  ServiceServiceUserQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServiceDashboard.ownedDebates
 */
export interface ServiceDashboardServiceForOwnedDebates {
  listOwnedDebates(
    owner: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceDebateQueryCustomizer,
  ): Promise<Array<ServiceDebateStored>>;

  deleteOwnedDebates(owner: JudoIdentifiable<ServiceDashboard>, target: JudoIdentifiable<ServiceDebate>): Promise<void>;

  updateOwnedDebates(
    owner: JudoIdentifiable<ServiceDashboard>,
    target: Partial<ServiceDebateStored>,
  ): Promise<ServiceDebateStored>;
}
