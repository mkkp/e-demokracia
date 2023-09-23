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
  AdminYesNoVoteDefinition,
  AdminIssueStored,
  AdminConStored,
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
 * Relation Service for AdminYesNoVoteDefinition.debate
 */
export interface AdminYesNoVoteDefinitionServiceForDebate {
  getDebate(owner: JudoIdentifiable<AdminYesNoVoteDefinition>, mask?: string): Promise<AdminDebateStored>;
}
