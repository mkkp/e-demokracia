//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminSimpleVote,
  AdminUser,
  AdminSimpleVoteStored,
  AdminSimpleVoteQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for AdminUser.votes
 */
export interface AdminUserServiceForVotes {
  listVotes(
    owner: JudoIdentifiable<AdminUser>,
    queryCustomizer?: AdminSimpleVoteQueryCustomizer,
  ): Promise<Array<AdminSimpleVoteStored>>;

  getRangeForUser(
    owner: JudoIdentifiable<AdminUser>,
    queryCustomizer: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>>;

  setUser(
    owner: JudoIdentifiable<AdminUser>,
    target: JudoIdentifiable<AdminUser>,
    selected: JudoIdentifiable<AdminUser>,
  ): Promise<void>;

  unsetUser(owner: JudoIdentifiable<AdminUser>, target: JudoIdentifiable<AdminUser>): Promise<void>;
}
