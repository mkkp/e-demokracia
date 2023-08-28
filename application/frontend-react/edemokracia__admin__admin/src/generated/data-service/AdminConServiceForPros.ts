//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminCon,
  AdminConStored,
  AdminUserStored,
  AdminPro,
  AdminUserQueryCustomizer,
  AdminSimpleVote,
  AdminCommentQueryCustomizer,
  AdminSimpleVoteQueryCustomizer,
  AdminProQueryCustomizer,
  AdminProStored,
  AdminConQueryCustomizer,
  AdminComment,
  AdminUser,
  AdminCommentStored,
  AdminSimpleVoteStored,
} from '../data-api';

/**
 * Relation Service for AdminCon.pros
 */
export interface AdminConServiceForPros {
  listPros(
    owner: JudoIdentifiable<AdminCon>,
    queryCustomizer?: AdminProQueryCustomizer,
  ): Promise<Array<AdminProStored>>;

  deletePros(owner: JudoIdentifiable<AdminCon>, target: JudoIdentifiable<AdminPro>): Promise<void>;

  updatePros(owner: JudoIdentifiable<AdminCon>, target: Partial<AdminProStored>): Promise<AdminProStored>;
}
