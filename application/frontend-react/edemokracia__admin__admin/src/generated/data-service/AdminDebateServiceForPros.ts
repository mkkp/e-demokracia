//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminProParentQueryCustomizer,
  AdminProParent,
  AdminCon,
  AdminConParentQueryCustomizer,
  AdminSimpleVote,
  AdminDebateParentQueryCustomizer,
  AdminCommentQueryCustomizer,
  AdminConParentStored,
  AdminProQueryCustomizer,
  AdminComment,
  AdminUser,
  AdminConParent,
  AdminSimpleVoteStored,
  AdminDebateParentStored,
  AdminConStored,
  AdminProParentStored,
  AdminUserStored,
  AdminPro,
  AdminUserQueryCustomizer,
  AdminSimpleVoteQueryCustomizer,
  AdminProStored,
  AdminDebate,
  AdminConQueryCustomizer,
  AdminDebateParent,
  AdminCommentStored,
} from '../data-api';

/**
 * Relation Service for AdminDebate.pros
 */
export interface AdminDebateServiceForPros {
  listPros(
    owner: JudoIdentifiable<AdminDebate>,
    queryCustomizer?: AdminProQueryCustomizer,
  ): Promise<Array<AdminProStored>>;

  deletePros(owner: JudoIdentifiable<AdminDebate>, target: JudoIdentifiable<AdminPro>): Promise<void>;

  updatePros(owner: JudoIdentifiable<AdminDebate>, target: Partial<AdminProStored>): Promise<AdminProStored>;
}
