//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminProParent,
  AdminProParentQueryCustomizer,
  AdminCon,
  AdminConParentQueryCustomizer,
  AdminSimpleVote,
  AdminDebateParentQueryCustomizer,
  AdminCommentQueryCustomizer,
  AdminConParentStored,
  AdminProQueryCustomizer,
  CreateCommentInput,
  AdminComment,
  AdminUser,
  CreateArgumentInput,
  AdminConParent,
  AdminSimpleVoteStored,
  AdminDebateParentStored,
  AdminConStored,
  AdminProParentStored,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminPro,
  AdminSimpleVoteQueryCustomizer,
  AdminProStored,
  AdminConQueryCustomizer,
  AdminDebateParent,
  AdminCommentStored,
} from '../data-api';

/**
 * Class Service for AdminCon
 */
export interface AdminConServiceForClass {
  refresh(target: JudoIdentifiable<AdminCon>, queryCustomizer?: AdminConQueryCustomizer): Promise<AdminConStored>;

  delete(target: JudoIdentifiable<AdminCon>): Promise<void>;

  update(target: Partial<AdminConStored>): Promise<AdminConStored>;

  getVotes(
    target: JudoIdentifiable<AdminCon>,
    queryCustomizer?: AdminSimpleVoteQueryCustomizer,
  ): Promise<Array<AdminSimpleVoteStored>>;

  getRangeForVotes(
    owner?: JudoIdentifiable<AdminCon> | AdminCon,
    queryCustomizer?: AdminSimpleVoteQueryCustomizer,
  ): Promise<Array<AdminSimpleVoteStored>>;

  getCreatedBy(
    target: JudoIdentifiable<AdminCon>,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<AdminUserStored>;

  getRangeForCreatedBy(
    owner?: JudoIdentifiable<AdminCon> | AdminCon,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>>;

  getCons(
    target: JudoIdentifiable<AdminCon>,
    queryCustomizer?: AdminConQueryCustomizer,
  ): Promise<Array<AdminConStored>>;

  getRangeForCons(
    owner?: JudoIdentifiable<AdminCon> | AdminCon,
    queryCustomizer?: AdminConQueryCustomizer,
  ): Promise<Array<AdminConStored>>;

  getPros(
    target: JudoIdentifiable<AdminCon>,
    queryCustomizer?: AdminProQueryCustomizer,
  ): Promise<Array<AdminProStored>>;

  getRangeForPros(
    owner?: JudoIdentifiable<AdminCon> | AdminCon,
    queryCustomizer?: AdminProQueryCustomizer,
  ): Promise<Array<AdminProStored>>;

  getComments(
    target: JudoIdentifiable<AdminCon>,
    queryCustomizer?: AdminCommentQueryCustomizer,
  ): Promise<Array<AdminCommentStored>>;

  getRangeForComments(
    owner?: JudoIdentifiable<AdminCon> | AdminCon,
    queryCustomizer?: AdminCommentQueryCustomizer,
  ): Promise<Array<AdminCommentStored>>;

  getParentDebate(
    target: JudoIdentifiable<AdminCon>,
    queryCustomizer?: AdminDebateParentQueryCustomizer,
  ): Promise<AdminDebateParentStored>;

  getRangeForParentDebate(
    owner?: JudoIdentifiable<AdminCon> | AdminCon,
    queryCustomizer?: AdminDebateParentQueryCustomizer,
  ): Promise<Array<AdminDebateParentStored>>;

  getParentCon(
    target: JudoIdentifiable<AdminCon>,
    queryCustomizer?: AdminConParentQueryCustomizer,
  ): Promise<AdminConParentStored>;

  getRangeForParentCon(
    owner?: JudoIdentifiable<AdminCon> | AdminCon,
    queryCustomizer?: AdminConParentQueryCustomizer,
  ): Promise<Array<AdminConParentStored>>;

  getParentPro(
    target: JudoIdentifiable<AdminCon>,
    queryCustomizer?: AdminProParentQueryCustomizer,
  ): Promise<AdminProParentStored>;

  getRangeForParentPro(
    owner?: JudoIdentifiable<AdminCon> | AdminCon,
    queryCustomizer?: AdminProParentQueryCustomizer,
  ): Promise<Array<AdminProParentStored>>;

  createSubArgument(owner: JudoIdentifiable<AdminCon>, target: CreateArgumentInput): Promise<void>;

  voteUp(owner: JudoIdentifiable<AdminCon>): Promise<void>;

  voteDown(owner: JudoIdentifiable<AdminCon>): Promise<void>;

  createComment(owner: JudoIdentifiable<AdminCon>, target: CreateCommentInput): Promise<void>;
}
