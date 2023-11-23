//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceVoteDefinitionStored,
  RatingVoteInput,
  YesNoAbstainVoteInputStored,
  ServiceVoteDefinitionQueryCustomizer,
  CloseDebateOutputVoteDefinitionReferenceStored,
  CloseDebateOutputVoteDefinitionReference,
  ServiceIssueQueryCustomizer,
  YesNoAbstainVoteInput,
  ServiceVoteDefinition,
  CreateArgumentInputStored,
  ServiceVoteEntry,
  ServiceIssueStored,
  SelectAnswerVoteSelection,
  ServiceIssue,
  RatingVoteInputStored,
  SelectAnswerVoteSelectionQueryCustomizer,
  CreateCommentInputStored,
  SelectAnswerVoteSelectionStored,
  CreateCommentInput,
  CreateArgumentInput,
  CloseDebateInputStored,
  YesNoVoteInput,
  CloseDebateInput,
  YesNoVoteInputStored,
} from '../data-api';

/**
 * Relation Service for ServiceVoteEntry.voteDefinition
 */
export interface ServiceVoteEntryServiceForVoteDefinition {
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<ServiceVoteDefinitionStored>;

  getIssue(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored>;

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
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
}
