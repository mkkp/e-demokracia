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
  createConArgumentForIssuesOwned(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgumentForIssuesOwned(): Promise<CreateArgumentInput>;
  createProArgumentForIssuesOwned(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgumentForIssuesOwned(): Promise<CreateArgumentInput>;
  closeVoteForIssuesOwned(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  closeDebateForIssuesOwned(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebateForIssuesOwned(): Promise<CloseDebateInput>;
  createCommentForIssuesOwned(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void>;
  getTemplateOnCreateCommentForIssuesOwned(): Promise<CreateCommentInput>;
  deleteOrArchiveForIssuesOwned(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavoritesForIssuesOwned(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavoritesForIssuesOwned(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  activateForIssuesOwned(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
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
  createConArgumentForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgumentForFavoriteIssues(): Promise<CreateArgumentInput>;
  createProArgumentForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgumentForFavoriteIssues(): Promise<CreateArgumentInput>;
  closeVoteForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  closeDebateForFavoriteIssues(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebateForFavoriteIssues(): Promise<CloseDebateInput>;
  createCommentForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void>;
  getTemplateOnCreateCommentForFavoriteIssues(): Promise<CreateCommentInput>;
  deleteOrArchiveForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavoritesForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavoritesForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  activateForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
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
  getTemplateOnVoteYesNoForFavoriteVoteDefinitions(): Promise<YesNoVoteInput>;
  voteSelectAnswerForFavoriteVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForFavoriteVoteDefinitions(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForFavoriteVoteDefinitions(
    owner?: ServiceVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteRatingForFavoriteVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForFavoriteVoteDefinitions(): Promise<RatingVoteInput>;
  voteYesNoAbstainForFavoriteVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForFavoriteVoteDefinitions(): Promise<YesNoAbstainVoteInput>;
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
  getTemplateOnVoteYesNoForOwnedVoteDefinitions(): Promise<YesNoVoteInput>;
  voteSelectAnswerForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<void>;
  getTemplateOnVoteSelectAnswerForOwnedVoteDefinitions(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVoteSelectAnswerForOwnedVoteDefinitions(
    owner?: ServiceVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  voteRatingForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<void>;
  getTemplateOnVoteRatingForOwnedVoteDefinitions(): Promise<RatingVoteInput>;
  voteYesNoAbstainForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<void>;
  getTemplateOnVoteYesNoAbstainForOwnedVoteDefinitions(): Promise<YesNoAbstainVoteInput>;
}
