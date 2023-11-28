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
  ServiceIssueStored,
  SelectAnswerVoteSelection,
  ServiceIssue,
  RatingVoteInputStored,
  SelectAnswerVoteSelectionQueryCustomizer,
  CreateCommentInputStored,
  SelectAnswerVoteSelectionStored,
  CreateCommentInput,
  ServiceDashboard,
  CreateArgumentInput,
  CloseDebateInputStored,
  YesNoVoteInput,
  CloseDebateInput,
  YesNoVoteInputStored,
} from '../data-api';

/**
 * Relation Service for ServiceDashboard.favoriteVoteDefinitions
 */
export interface ServiceDashboardServiceForFavoriteVoteDefinitions {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<ServiceVoteDefinitionStored>;
  getIssue(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored>;
  activateForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavoritesForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  closeDebateForIssue(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebateForIssue(): Promise<CloseDebateInput>;
  closeVoteForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  createCommentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void>;
  getTemplateOnCreateCommentForIssue(): Promise<CreateCommentInput>;
  createConArgumentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgumentForIssue(): Promise<CreateArgumentInput>;
  createProArgumentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgumentForIssue(): Promise<CreateArgumentInput>;
  deleteOrArchiveForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavoritesForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  voteRating(owner: JudoIdentifiable<ServiceVoteDefinition>, target: RatingVoteInput): Promise<void>;
  getTemplateOnVoteRating(): Promise<RatingVoteInput>;
  voteSelectAnswer(owner: JudoIdentifiable<ServiceVoteDefinition>, target: SelectAnswerVoteSelection): Promise<void>;
  getTemplateOnVoteSelectAnswer(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswer(
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteYesNo(owner: JudoIdentifiable<ServiceVoteDefinition>, target: YesNoVoteInput): Promise<void>;
  getTemplateOnVoteYesNo(): Promise<YesNoVoteInput>;
  voteYesNoAbstain(owner: JudoIdentifiable<ServiceVoteDefinition>, target: YesNoAbstainVoteInput): Promise<void>;
  getTemplateOnVoteYesNoAbstain(): Promise<YesNoAbstainVoteInput>;
}
