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
  AdminSelectAnswerVoteDefinitionQueryCustomizer,
  AdminDebateQueryCustomizer,
  AdminVoteDefinitionQueryCustomizer,
  AdminYesNoVoteDefinitionStored,
  AdminConStored,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminPro,
  AdminRatingVoteDefinitionQueryCustomizer,
  AdminYesNoVoteDefinitionQueryCustomizer,
  AdminUserDebates,
  AdminYesNoAbstainVoteDefinitionQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminYesNoAbstainVoteDefinition,
  AdminRatingVoteDefinition,
  AdminProStored,
  AdminSelectAnswerVoteDefinitionStored,
  AdminDebate,
  AdminIssue,
  AdminConQueryCustomizer,
  AdminVoteDefinition,
  AdminSelectAnswerVoteDefinition,
  AdminCommentStored,
  AdminYesNoAbstainVoteDefinitionStored,
} from '../data-api';

/**
 * Relation Service for AdminUserDebates.ownedDebates
 */
export interface AdminUserDebatesServiceForOwnedDebates {
  listOwnedDebates(
    owner: JudoIdentifiable<AdminUserDebates>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;
}
