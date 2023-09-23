//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminRatingVoteDefinitionStored,
  AdminCon,
  AdminIssueStored,
  AdminYesNoVoteDefinition,
  AdminCommentQueryCustomizer,
  VoteDefinitionStored,
  AdminIssueQueryCustomizer,
  AdminProQueryCustomizer,
  CreateCommentInput,
  AdminComment,
  AdminDebateStored,
  AdminUser,
  CreateArgumentInput,
  AdminSelectAnswerVoteDefinitionQueryCustomizer,
  CloseDebateInput,
  AdminDebateQueryCustomizer,
  AdminVoteDefinitionQueryCustomizer,
  AdminYesNoVoteDefinitionStored,
  AdminConStored,
  AdminUserStored,
  AdminUserQueryCustomizer,
  AdminPro,
  AdminRatingVoteDefinitionQueryCustomizer,
  AdminYesNoVoteDefinitionQueryCustomizer,
  AdminYesNoAbstainVoteDefinitionQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminYesNoAbstainVoteDefinition,
  AdminRatingVoteDefinition,
  AdminProStored,
  AdminSelectAnswerVoteDefinitionStored,
  AdminDebate,
  AdminIssue,
  AdminConQueryCustomizer,
  AdminVoteDefinition,
  AdminSelectAnswerVoteDefinition,
  AdminCommentStored,
  AdminYesNoAbstainVoteDefinitionStored,
} from '../data-api';

/**
 * Class Service for AdminDebate
 */
export interface AdminDebateServiceForClass {
  refresh(
    target: JudoIdentifiable<AdminDebate>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<AdminDebateStored>;

  delete(target: JudoIdentifiable<AdminDebate>): Promise<void>;

  update(target: Partial<AdminDebateStored>): Promise<AdminDebateStored>;

  getIssue(
    target: JudoIdentifiable<AdminDebate>,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<AdminIssueStored>;

  getRangeForIssue(
    owner?: JudoIdentifiable<AdminDebate> | AdminDebate,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  getComments(
    target: JudoIdentifiable<AdminDebate>,
    queryCustomizer?: AdminCommentQueryCustomizer,
  ): Promise<Array<AdminCommentStored>>;

  getRangeForComments(
    owner?: JudoIdentifiable<AdminDebate> | AdminDebate,
    queryCustomizer?: AdminCommentQueryCustomizer,
  ): Promise<Array<AdminCommentStored>>;

  getCreatedBy(
    target: JudoIdentifiable<AdminDebate>,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<AdminUserStored>;

  getRangeForCreatedBy(
    owner?: JudoIdentifiable<AdminDebate> | AdminDebate,
    queryCustomizer?: AdminUserQueryCustomizer,
  ): Promise<Array<AdminUserStored>>;

  getCons(
    target: JudoIdentifiable<AdminDebate>,
    queryCustomizer?: AdminConQueryCustomizer,
  ): Promise<Array<AdminConStored>>;

  getRangeForCons(
    owner?: JudoIdentifiable<AdminDebate> | AdminDebate,
    queryCustomizer?: AdminConQueryCustomizer,
  ): Promise<Array<AdminConStored>>;

  getPros(
    target: JudoIdentifiable<AdminDebate>,
    queryCustomizer?: AdminProQueryCustomizer,
  ): Promise<Array<AdminProStored>>;

  getRangeForPros(
    owner?: JudoIdentifiable<AdminDebate> | AdminDebate,
    queryCustomizer?: AdminProQueryCustomizer,
  ): Promise<Array<AdminProStored>>;

  getVoteDefinition(
    target: JudoIdentifiable<AdminDebate>,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<AdminVoteDefinitionStored>;

  getRangeForVoteDefinition(
    owner?: JudoIdentifiable<AdminDebate> | AdminDebate,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminVoteDefinitionStored>>;

  getYesNoVoteDefinition(
    target: JudoIdentifiable<AdminDebate>,
    queryCustomizer?: AdminYesNoVoteDefinitionQueryCustomizer,
  ): Promise<AdminYesNoVoteDefinitionStored>;

  getRangeForYesNoVoteDefinition(
    owner?: JudoIdentifiable<AdminDebate> | AdminDebate,
    queryCustomizer?: AdminYesNoVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminYesNoVoteDefinitionStored>>;

  getYesNoAbstainVoteDefinition(
    target: JudoIdentifiable<AdminDebate>,
    queryCustomizer?: AdminYesNoAbstainVoteDefinitionQueryCustomizer,
  ): Promise<AdminYesNoAbstainVoteDefinitionStored>;

  getRangeForYesNoAbstainVoteDefinition(
    owner?: JudoIdentifiable<AdminDebate> | AdminDebate,
    queryCustomizer?: AdminYesNoAbstainVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminYesNoAbstainVoteDefinitionStored>>;

  getRatingVoteDefinition(
    target: JudoIdentifiable<AdminDebate>,
    queryCustomizer?: AdminRatingVoteDefinitionQueryCustomizer,
  ): Promise<AdminRatingVoteDefinitionStored>;

  getRangeForRatingVoteDefinition(
    owner?: JudoIdentifiable<AdminDebate> | AdminDebate,
    queryCustomizer?: AdminRatingVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminRatingVoteDefinitionStored>>;

  getSelectAnswerVoteDefinition(
    target: JudoIdentifiable<AdminDebate>,
    queryCustomizer?: AdminSelectAnswerVoteDefinitionQueryCustomizer,
  ): Promise<AdminSelectAnswerVoteDefinitionStored>;

  getRangeForSelectAnswerVoteDefinition(
    owner?: JudoIdentifiable<AdminDebate> | AdminDebate,
    queryCustomizer?: AdminSelectAnswerVoteDefinitionQueryCustomizer,
  ): Promise<Array<AdminSelectAnswerVoteDefinitionStored>>;

  closeDebate(owner: JudoIdentifiable<AdminDebate>, target: CloseDebateInput): Promise<VoteDefinitionStored>;

  createArgument(owner: JudoIdentifiable<AdminDebate>, target: CreateArgumentInput): Promise<void>;

  createComment(owner: JudoIdentifiable<AdminDebate>, target: CreateCommentInput): Promise<void>;
}
