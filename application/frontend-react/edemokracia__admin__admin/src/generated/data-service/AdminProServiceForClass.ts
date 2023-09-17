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
  AdminPro,
  AdminUserQueryCustomizer,
  AdminSimpleVoteQueryCustomizer,
  AdminProStored,
  AdminConQueryCustomizer,
  AdminDebateParent,
  AdminCommentStored,
} from '../data-api';

/**
 * Class Service for AdminPro
 */
export interface AdminProServiceForClass {
  refresh(target: JudoIdentifiable<AdminPro>, queryCustomizer?: AdminProQueryCustomizer): Promise<AdminProStored>;

  delete(target: JudoIdentifiable<AdminPro>): Promise<void>;

  update(target: Partial<AdminProStored>): Promise<AdminProStored>;

  getVotes(
    target: JudoIdentifiable<AdminPro>,
    queryCustomizer?: AdminSimpleVoteQueryCustomizer,
  ): Promise<Array<AdminSimpleVoteStored>>;

  getRangeForVotes(
    owner?: JudoIdentifiable<AdminPro> | AdminPro,
    queryCustomizer?: AdminSimpleVoteQueryCustomizer,
  ): Promise<Array<AdminSimpleVoteStored>>;

  getCreatedBy(
    target: JudoIdentifiable<AdminPro>,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<AdminUserStored>;

  getRangeForCreatedBy(
    owner?: JudoIdentifiable<AdminPro> | AdminPro,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>>;

  getPros(
    target: JudoIdentifiable<AdminPro>,
    queryCustomizer?: AdminProQueryCustomizer,
  ): Promise<Array<AdminProStored>>;

  getRangeForPros(
    owner?: JudoIdentifiable<AdminPro> | AdminPro,
    queryCustomizer?: AdminProQueryCustomizer,
  ): Promise<Array<AdminProStored>>;

  getCons(
    target: JudoIdentifiable<AdminPro>,
    queryCustomizer?: AdminConQueryCustomizer,
  ): Promise<Array<AdminConStored>>;

  getRangeForCons(
    owner?: JudoIdentifiable<AdminPro> | AdminPro,
    queryCustomizer?: AdminConQueryCustomizer,
  ): Promise<Array<AdminConStored>>;

  getComments(
    target: JudoIdentifiable<AdminPro>,
    queryCustomizer?: AdminCommentQueryCustomizer,
  ): Promise<Array<AdminCommentStored>>;

  getRangeForComments(
    owner?: JudoIdentifiable<AdminPro> | AdminPro,
    queryCustomizer?: AdminCommentQueryCustomizer,
  ): Promise<Array<AdminCommentStored>>;

  getParentDebate(
    target: JudoIdentifiable<AdminPro>,
    queryCustomizer?: AdminDebateParentQueryCustomizer,
  ): Promise<AdminDebateParentStored>;

  getRangeForParentDebate(
    owner?: JudoIdentifiable<AdminPro> | AdminPro,
    queryCustomizer?: AdminDebateParentQueryCustomizer,
  ): Promise<Array<AdminDebateParentStored>>;

  getParentPro(
    target: JudoIdentifiable<AdminPro>,
    queryCustomizer?: AdminProParentQueryCustomizer,
  ): Promise<AdminProParentStored>;

  getRangeForParentPro(
    owner?: JudoIdentifiable<AdminPro> | AdminPro,
    queryCustomizer?: AdminProParentQueryCustomizer,
  ): Promise<Array<AdminProParentStored>>;

  getParentCon(
    target: JudoIdentifiable<AdminPro>,
    queryCustomizer?: AdminConParentQueryCustomizer,
  ): Promise<AdminConParentStored>;

  getRangeForParentCon(
    owner?: JudoIdentifiable<AdminPro> | AdminPro,
    queryCustomizer?: AdminConParentQueryCustomizer,
  ): Promise<Array<AdminConParentStored>>;

  createSubArgument(owner: JudoIdentifiable<AdminPro>, target: CreateArgumentInput): Promise<void>;

  voteUp(owner: JudoIdentifiable<AdminPro>): Promise<void>;

  voteDown(owner: JudoIdentifiable<AdminPro>): Promise<void>;

  createComment(owner: JudoIdentifiable<AdminPro>, target: CreateCommentInput): Promise<void>;
}
