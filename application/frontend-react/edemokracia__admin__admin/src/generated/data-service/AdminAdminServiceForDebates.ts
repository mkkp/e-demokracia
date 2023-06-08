//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  AdminVoteDefinitionQueryCustomizer,
  AdminCon,
  AdminIssueStored,
  AdminConStored,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminPro,
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
 * Access Relation Service for AdminAdmin.debates
 */
export interface AdminAdminServiceForDebates {
  listDebates(queryCustomizer?: AdminDebateQueryCustomizer): Promise<Array<AdminDebateStored>>;
}
