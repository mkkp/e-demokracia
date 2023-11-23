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
  CloseDebateOutputVoteDefinitionReferenceStored,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteEntryQueryCustomizer,
  ServiceIssueQueryCustomizer,
  YesNoAbstainVoteInput,
  ServiceVoteDefinition,
  ServiceIssueStored,
  ServiceVoteEntry,
  ServiceVoteEntryStored,
  SelectAnswerVoteSelection,
  ServiceIssue,
  SelectAnswerVoteSelectionQueryCustomizer,
  ServiceDashboardQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  CreateCommentInput,
  ServiceDashboard,
  ServiceDashboardStored,
  CreateArgumentInput,
  YesNoVoteInput,
  CloseDebateInput,
} from '../data-api';

/**
 * Class Service for ServiceDashboard
 */
export interface ServiceDashboardService {
  refresh(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceDashboardQueryCustomizer,
  ): Promise<ServiceDashboardStored>;

  listIssuesOwned(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  getRangeForIssuesOwned(
    owner?: JudoIdentifiable<ServiceDashboard> | ServiceDashboard,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  deleteIssuesOwned(target: JudoIdentifiable<ServiceIssue>): Promise<void>;

  createProArgumentForIssuesOwned(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateProArgumentForIssuesOwned(): Promise<CreateArgumentInput>;

  createConArgumentForIssuesOwned(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateConArgumentForIssuesOwned(): Promise<CreateArgumentInput>;

  addToFavoritesForIssuesOwned(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  deleteOrArchiveForIssuesOwned(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  createCommentForIssuesOwned(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void>;

  getTemplateForCreateCommentForIssuesOwned(): Promise<CreateCommentInput>;

  removeFromFavoritesForIssuesOwned(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  activateForIssuesOwned(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  closeDebateForIssuesOwned(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;

  getTemplateForCloseDebateForIssuesOwned(): Promise<CloseDebateInput>;

  closeVoteForIssuesOwned(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  listUserVoteEntries(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceVoteEntryStored>>;

  getRangeForUserVoteEntries(
    owner?: JudoIdentifiable<ServiceDashboard> | ServiceDashboard,
    queryCustomizer?: ServiceVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceVoteEntryStored>>;

  listFavoriteIssues(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  getRangeForFavoriteIssues(
    owner?: JudoIdentifiable<ServiceDashboard> | ServiceDashboard,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  createProArgumentForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateProArgumentForFavoriteIssues(): Promise<CreateArgumentInput>;

  createConArgumentForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateConArgumentForFavoriteIssues(): Promise<CreateArgumentInput>;

  addToFavoritesForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  deleteOrArchiveForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  createCommentForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void>;

  getTemplateForCreateCommentForFavoriteIssues(): Promise<CreateCommentInput>;

  removeFromFavoritesForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  activateForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  closeDebateForFavoriteIssues(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;

  getTemplateForCloseDebateForFavoriteIssues(): Promise<CloseDebateInput>;

  closeVoteForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  listFavoriteVoteDefinitions(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;

  getRangeForFavoriteVoteDefinitions(
    owner?: JudoIdentifiable<ServiceDashboard> | ServiceDashboard,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;

  voteYesNoForFavoriteVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;

  getTemplateForVoteYesNoForFavoriteVoteDefinitions(): Promise<YesNoVoteInput>;

  voteYesNoAbstainForFavoriteVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;

  getTemplateForVoteYesNoAbstainForFavoriteVoteDefinitions(): Promise<YesNoAbstainVoteInput>;

  voteRatingForFavoriteVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;

  getTemplateForVoteRatingForFavoriteVoteDefinitions(): Promise<RatingVoteInput>;

  voteSelectAnswerForFavoriteVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;

  getTemplateForVoteSelectAnswerForFavoriteVoteDefinitions(): Promise<SelectAnswerVoteSelection>;

  getRangeForVoteSelectAnswerForFavoriteVoteDefinitions(
    owner?: ServiceVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;

  listOwnedVoteDefinitions(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;

  getRangeForOwnedVoteDefinitions(
    owner?: JudoIdentifiable<ServiceDashboard> | ServiceDashboard,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;

  deleteOwnedVoteDefinitions(target: JudoIdentifiable<ServiceVoteDefinition>): Promise<void>;

  voteYesNoForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<void>;

  getTemplateForVoteYesNoForOwnedVoteDefinitions(): Promise<YesNoVoteInput>;

  voteYesNoAbstainForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;

  getTemplateForVoteYesNoAbstainForOwnedVoteDefinitions(): Promise<YesNoAbstainVoteInput>;

  voteRatingForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;

  getTemplateForVoteRatingForOwnedVoteDefinitions(): Promise<RatingVoteInput>;

  voteSelectAnswerForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;

  getTemplateForVoteSelectAnswerForOwnedVoteDefinitions(): Promise<SelectAnswerVoteSelection>;

  getRangeForVoteSelectAnswerForOwnedVoteDefinitions(
    owner?: ServiceVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
}
