//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  YesNoAbstainVoteInputStored,
  CloseDebateOutputVoteDefinitionReferenceStored,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteEntryQueryCustomizer,
  ServiceIssueQueryCustomizer,
  YesNoAbstainVoteInput,
  CreateArgumentInputStored,
  ServiceVoteDefinition,
  ServiceIssueStored,
  ServiceVoteEntry,
  SelectAnswerVoteSelection,
  ServiceIssue,
  RatingVoteInputStored,
  SelectAnswerVoteSelectionStored,
  CreateCommentInput,
  CreateArgumentInput,
  YesNoVoteInput,
  CloseDebateInput,
  ServiceVoteDefinitionStored,
  RatingVoteInput,
  CloseDebateOutputVoteDefinitionReference,
  ServiceVoteEntryStored,
  SelectAnswerVoteSelectionQueryCustomizer,
  ServiceDashboardQueryCustomizer,
  CreateCommentInputStored,
  ServiceDashboard,
  ServiceDashboardStored,
  CloseDebateInputStored,
  YesNoVoteInputStored,
} from '../data-api';

/**
 * Relation Service for User.dashboardHome
 */
export interface UserServiceForDashboardHome {
  refreshForDashboardHome(queryCustomizer?: ServiceDashboardQueryCustomizer): Promise<ServiceDashboardStored>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceDashboardQueryCustomizer,
  ): Promise<ServiceDashboardStored>;

  listIssuesOwned(
    owner: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  deleteIssuesOwned(target: JudoIdentifiable<ServiceIssue>): Promise<void>;

  updateIssuesOwned(
    owner: JudoIdentifiable<ServiceDashboard>,
    target: Partial<ServiceIssueStored>,
  ): Promise<ServiceIssueStored>;

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
    owner: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceVoteEntryStored>>;

  listFavoriteIssues(
    owner: JudoIdentifiable<ServiceDashboard>,
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
    owner: JudoIdentifiable<ServiceDashboard>,
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
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  listOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceVoteDefinitionStored>>;

  deleteOwnedVoteDefinitions(target: JudoIdentifiable<ServiceVoteDefinition>): Promise<void>;

  updateOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceDashboard>,
    target: Partial<ServiceVoteDefinitionStored>,
  ): Promise<ServiceVoteDefinitionStored>;

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
    owner: JudoIdentifiable<ServiceVoteDefinition> | ServiceVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
}
