//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminRatingVoteDefinitionStored,
  AdminCon,
  AdminIssueStored,
  AdminYesNoVoteDefinition,
  AdminCommentQueryCustomizer,
  AdminIssueQueryCustomizer,
  AdminProQueryCustomizer,
  AdminComment,
  AdminDebateStored,
  AdminUser,
  AdminDashboard,
  AdminDebateQueryCustomizer,
  AdminVoteDefinitionQueryCustomizer,
  AdminYesNoVoteDefinitionStored,
  AdminConStored,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminPro,
  AdminRatingVoteDefinitionQueryCustomizer,
  AdminYesNoVoteDefinitionQueryCustomizer,
  AdminYesNoAbstainVoteDefinitionQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminYesNoAbstainVoteDefinition,
  AdminRatingVoteDefinition,
  AdminProStored,
  AdminDebate,
  AdminIssue,
  AdminConQueryCustomizer,
  AdminVoteDefinition,
  AdminCommentStored,
  AdminYesNoAbstainVoteDefinitionStored,
} from '../data-api';

/**
 * Relation Service for AdminDashboard.debates
 */
export interface AdminDashboardServiceForDebates {
  listDebates(
    owner: JudoIdentifiable<AdminDashboard>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  deleteDebates(owner: JudoIdentifiable<AdminDashboard>, target: JudoIdentifiable<AdminDebate>): Promise<void>;

  updateDebates(
    owner: JudoIdentifiable<AdminDashboard>,
    target: Partial<AdminDebateStored>,
  ): Promise<AdminDebateStored>;
}
