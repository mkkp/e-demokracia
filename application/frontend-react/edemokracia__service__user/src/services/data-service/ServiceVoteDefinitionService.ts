//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceVoteDefinitionStored,
  RatingVoteInput,
  ServiceVoteDefinitionQueryCustomizer,
  CloseDebateOutputVoteDefinitionReferenceStored,
  ServiceIssueQueryCustomizer,
  YesNoAbstainVoteInput,
  ServiceVoteDefinition,
  ServiceIssueStored,
  SelectAnswerVoteSelection,
  ServiceIssue,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  CreateCommentInput,
  CreateArgumentInput,
  YesNoVoteInput,
  CloseDebateInput,
} from '../data-api';

/**
 * Class Service for ServiceVoteDefinition
 */
export interface ServiceVoteDefinitionService {
  refresh(
    target: JudoIdentifiable<ServiceVoteDefinition>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<ServiceVoteDefinitionStored>;

  delete(target: JudoIdentifiable<ServiceVoteDefinition>): Promise<void>;

  update(target: Partial<ServiceVoteDefinitionStored>): Promise<ServiceVoteDefinitionStored>;

  getIssue(
    target: JudoIdentifiable<ServiceVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored>;

  getRangeForIssue(
    owner?: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  createProArgumentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateProArgumentForIssue(): Promise<CreateArgumentInput>;

  createConArgumentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateConArgumentForIssue(): Promise<CreateArgumentInput>;

  addToFavoritesForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  deleteOrArchiveForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  createCommentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void>;

  getTemplateForCreateCommentForIssue(): Promise<CreateCommentInput>;

  removeFromFavoritesForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  activateForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  closeDebateForIssue(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;

  getTemplateForCloseDebateForIssue(): Promise<CloseDebateInput>;

  closeVoteForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  voteYesNo(owner: JudoIdentifiable<ServiceVoteDefinition>, target: YesNoVoteInput): Promise<void>;

  getTemplateForVoteYesNo(): Promise<YesNoVoteInput>;

  voteYesNoAbstain(owner: JudoIdentifiable<ServiceVoteDefinition>, target: YesNoAbstainVoteInput): Promise<void>;

  getTemplateForVoteYesNoAbstain(): Promise<YesNoAbstainVoteInput>;

  voteRating(owner: JudoIdentifiable<ServiceVoteDefinition>, target: RatingVoteInput): Promise<void>;

  getTemplateForVoteRating(): Promise<RatingVoteInput>;

  voteSelectAnswer(owner: JudoIdentifiable<ServiceVoteDefinition>, target: SelectAnswerVoteSelection): Promise<void>;

  getTemplateForVoteSelectAnswer(): Promise<SelectAnswerVoteSelection>;

  getRangeForVoteSelectAnswer(
    owner?: ServiceVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
}
