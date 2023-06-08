//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminSimpleVote,
  AdminUser,
  AdminSimpleVoteStored,
  AdminSimpleVoteQueryCustomizer,
} from '../data-api';

/**
 * Class Service for AdminSimpleVote
 */
export interface AdminSimpleVoteService {
  getTemplate(): Promise<AdminSimpleVote>;

  refresh(
    target: JudoIdentifiable<AdminSimpleVote>,
    queryCustomizer?: AdminSimpleVoteQueryCustomizer,
  ): Promise<AdminSimpleVoteStored>;

  delete(target: JudoIdentifiable<AdminSimpleVote>): Promise<void>;

  update(target: Partial<AdminSimpleVoteStored>): Promise<AdminSimpleVoteStored>;

  getUser(
    target: JudoIdentifiable<AdminSimpleVote>,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<AdminUserStored>;

  getRangeForUser(
    owner?: JudoIdentifiable<AdminSimpleVote> | AdminSimpleVote,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>>;

  setUser(target: JudoIdentifiable<AdminSimpleVote>, selected: JudoIdentifiable<AdminUser>): Promise<void>;

  unsetUser(target: JudoIdentifiable<AdminSimpleVote>): Promise<void>;
}
