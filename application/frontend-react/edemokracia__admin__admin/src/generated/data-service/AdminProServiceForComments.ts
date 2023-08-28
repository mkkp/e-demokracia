//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminComment,
  AdminUserStored,
  AdminPro,
  AdminUserQueryCustomizer,
  AdminSimpleVote,
  AdminUser,
  AdminCommentQueryCustomizer,
  AdminCommentStored,
  AdminSimpleVoteStored,
  AdminSimpleVoteQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for AdminPro.comments
 */
export interface AdminProServiceForComments {
  listComments(
    owner: JudoIdentifiable<AdminPro>,
    queryCustomizer?: AdminCommentQueryCustomizer,
  ): Promise<Array<AdminCommentStored>>;
}
