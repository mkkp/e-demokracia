//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminVoteDefinitionQueryCustomizer,
  RatingVoteInput,
  AdminIssueStored,
  YesNoAbstainVoteInput,
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  AdminVoteDefinitionStored,
  AdminIssueQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  AdminDebate,
  AdminIssue,
  AdminVoteDefinition,
  AdminDebateStored,
  YesNoVoteInput,
  AdminDebateQueryCustomizer,
} from '../data-api';

/**
 * Class Service for AdminVoteDefinition
 */
export interface AdminVoteDefinitionServiceForClass {
  refresh(
    target: JudoIdentifiable<AdminVoteDefinition>,
    queryCustomizer?: AdminVoteDefinitionQueryCustomizer,
  ): Promise<AdminVoteDefinitionStored>;

  delete(target: JudoIdentifiable<AdminVoteDefinition>): Promise<void>;

  update(target: Partial<AdminVoteDefinitionStored>): Promise<AdminVoteDefinitionStored>;

  getDebate(
    target: JudoIdentifiable<AdminVoteDefinition>,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<AdminDebateStored>;

  getRangeForDebate(
    owner?: JudoIdentifiable<AdminVoteDefinition> | AdminVoteDefinition,
    queryCustomizer?: AdminDebateQueryCustomizer,
  ): Promise<Array<AdminDebateStored>>;

  getIssue(
    target: JudoIdentifiable<AdminVoteDefinition>,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<AdminIssueStored>;

  getRangeForIssue(
    owner?: JudoIdentifiable<AdminVoteDefinition> | AdminVoteDefinition,
    queryCustomizer?: AdminIssueQueryCustomizer,
  ): Promise<Array<AdminIssueStored>>;

  voteRating(owner: JudoIdentifiable<AdminVoteDefinition>, target: RatingVoteInput): Promise<void>;

  voteSelectAnswer(owner: JudoIdentifiable<AdminVoteDefinition>, target: SelectAnswerVoteSelection): Promise<void>;

  getRangeForVoteSelectAnswer(
    owner?: AdminVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteYesNo(owner: JudoIdentifiable<AdminVoteDefinition>, target: YesNoVoteInput): Promise<void>;

  voteYesNoAbstain(owner: JudoIdentifiable<AdminVoteDefinition>, target: YesNoAbstainVoteInput): Promise<void>;
}
