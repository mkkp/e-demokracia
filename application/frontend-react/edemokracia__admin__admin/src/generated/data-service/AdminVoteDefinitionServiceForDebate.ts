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
  AdminYesNoVoteDefinitionStored,
  AdminCon,
  AdminIssueStored,
  AdminConStored,
  AdminYesNoVoteDefinition,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminPro,
  AdminYesNoVoteDefinitionQueryCustomizer,
  AdminCommentQueryCustomizer,
  AdminIssueQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminProQueryCustomizer,
  AdminProStored,
  AdminDebate,
  AdminIssue,
  AdminComment,
  AdminConQueryCustomizer,
  AdminVoteDefinition,
  AdminDebateStored,
  AdminUser,
  AdminCommentStored,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for AdminVoteDefinition.debate
 */
export interface AdminVoteDefinitionServiceForDebate {
  getDebate(owner: JudoIdentifiable<AdminVoteDefinition>, mask?: string): Promise<AdminDebateStored>;
}
