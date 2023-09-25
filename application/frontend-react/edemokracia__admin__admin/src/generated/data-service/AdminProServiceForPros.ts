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
  AdminConStored,
  AdminProParentStored,
  AdminUserStored,
  AdminPro,
  AdminUserQueryCustomizer,
  AdminSimpleVote,
  AdminCommentQueryCustomizer,
  AdminConParentStored,
  AdminSimpleVoteQueryCustomizer,
  AdminProQueryCustomizer,
  AdminProStored,
  AdminConQueryCustomizer,
  AdminComment,
  AdminUser,
  AdminConParent,
  AdminCommentStored,
  AdminSimpleVoteStored,
} from '../data-api';

/**
 * Relation Service for AdminPro.pros
 */
export interface AdminProServiceForPros {
  listPros(
    owner: JudoIdentifiable<AdminPro>,
    queryCustomizer?: AdminProQueryCustomizer,
  ): Promise<Array<AdminProStored>>;

  deletePros(owner: JudoIdentifiable<AdminPro>, target: JudoIdentifiable<AdminPro>): Promise<void>;

  updatePros(owner: JudoIdentifiable<AdminPro>, target: Partial<AdminProStored>): Promise<AdminProStored>;
}
