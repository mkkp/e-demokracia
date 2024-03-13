//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import {
  CloseDebateInput,
  CloseDebateOutputVoteDefinitionReferenceStored,
  CreateArgumentInput,
  CreateCommentInput,
  JudoRestResponse,
  RatingVoteInput,
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  ServiceDashboard,
  ServiceDashboardQueryCustomizer,
  ServiceDashboardStored,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
  ServiceVoteEntry,
  ServiceVoteEntryQueryCustomizer,
  ServiceVoteEntryStored,
  YesNoAbstainVoteInput,
  YesNoVoteInput,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceDashboard
 */
export interface ServiceDashboardService {
  refresh(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceDashboardQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceDashboardStored>>;
  listFavoriteIssues(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>>;
  getRangeForFavoriteIssues(
    owner?: JudoIdentifiable<ServiceDashboard> | ServiceDashboard,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>>;
  addFavoriteIssues(
    owner: JudoIdentifiable<ServiceDashboard>,
    selected: Array<JudoIdentifiable<ServiceIssue>>,
  ): Promise<JudoRestResponse<void>>;
  removeFavoriteIssues(
    owner: JudoIdentifiable<ServiceDashboard>,
    selected: Array<JudoIdentifiable<ServiceIssue>>,
  ): Promise<JudoRestResponse<void>>;
  activateForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  addToFavoritesForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  closeDebateForFavoriteIssues(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<JudoRestResponse<CloseDebateOutputVoteDefinitionReferenceStored>>;
  getTemplateOnCloseDebateForFavoriteIssues(): Promise<JudoRestResponse<CloseDebateInput>>;
  closeVoteForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  createCommentForFavoriteIssues(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateCommentForFavoriteIssues(): Promise<JudoRestResponse<CreateCommentInput>>;
  createConArgumentForFavoriteIssues(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateConArgumentForFavoriteIssues(): Promise<JudoRestResponse<CreateArgumentInput>>;
  createProArgumentForFavoriteIssues(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateProArgumentForFavoriteIssues(): Promise<JudoRestResponse<CreateArgumentInput>>;
  deleteOrArchiveForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  removeFromFavoritesForFavoriteIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  listFavoriteVoteDefinitions(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
  getRangeForFavoriteVoteDefinitions(
    owner?: JudoIdentifiable<ServiceDashboard> | ServiceDashboard,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
  addFavoriteVoteDefinitions(
    owner: JudoIdentifiable<ServiceDashboard>,
    selected: Array<JudoIdentifiable<ServiceVoteDefinition>>,
  ): Promise<JudoRestResponse<void>>;
  removeFavoriteVoteDefinitions(
    owner: JudoIdentifiable<ServiceDashboard>,
    selected: Array<JudoIdentifiable<ServiceVoteDefinition>>,
  ): Promise<JudoRestResponse<void>>;
  voteRatingForFavoriteVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteRatingForFavoriteVoteDefinitions(): Promise<JudoRestResponse<RatingVoteInput>>;
  voteSelectAnswerForFavoriteVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteSelectAnswerForFavoriteVoteDefinitions(): Promise<JudoRestResponse<SelectAnswerVoteSelection>>;
  getRangeOnVoteSelectAnswerForFavoriteVoteDefinitions(
    owner?: ServiceVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<SelectAnswerVoteSelectionStored>>>;
  voteYesNoForFavoriteVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoForFavoriteVoteDefinitions(): Promise<JudoRestResponse<YesNoVoteInput>>;
  voteYesNoAbstainForFavoriteVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoAbstainForFavoriteVoteDefinitions(): Promise<JudoRestResponse<YesNoAbstainVoteInput>>;
  listOwnedIssues(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>>;
  getRangeForOwnedIssues(
    owner?: JudoIdentifiable<ServiceDashboard> | ServiceDashboard,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>>;
  addOwnedIssues(
    owner: JudoIdentifiable<ServiceDashboard>,
    selected: Array<JudoIdentifiable<ServiceIssue>>,
  ): Promise<JudoRestResponse<void>>;
  removeOwnedIssues(
    owner: JudoIdentifiable<ServiceDashboard>,
    selected: Array<JudoIdentifiable<ServiceIssue>>,
  ): Promise<JudoRestResponse<void>>;
  activateForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  addToFavoritesForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  closeDebateForOwnedIssues(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<JudoRestResponse<CloseDebateOutputVoteDefinitionReferenceStored>>;
  getTemplateOnCloseDebateForOwnedIssues(): Promise<JudoRestResponse<CloseDebateInput>>;
  closeVoteForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  createCommentForOwnedIssues(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateCommentForOwnedIssues(): Promise<JudoRestResponse<CreateCommentInput>>;
  createConArgumentForOwnedIssues(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateConArgumentForOwnedIssues(): Promise<JudoRestResponse<CreateArgumentInput>>;
  createProArgumentForOwnedIssues(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateProArgumentForOwnedIssues(): Promise<JudoRestResponse<CreateArgumentInput>>;
  deleteOrArchiveForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  removeFromFavoritesForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  listOwnedVoteDefinitions(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
  getRangeForOwnedVoteDefinitions(
    owner?: JudoIdentifiable<ServiceDashboard> | ServiceDashboard,
    queryCustomizer?: ServiceVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteDefinitionStored>>>;
  addOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceDashboard>,
    selected: Array<JudoIdentifiable<ServiceVoteDefinition>>,
  ): Promise<JudoRestResponse<void>>;
  removeOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceDashboard>,
    selected: Array<JudoIdentifiable<ServiceVoteDefinition>>,
  ): Promise<JudoRestResponse<void>>;
  voteRatingForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: RatingVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteRatingForOwnedVoteDefinitions(): Promise<JudoRestResponse<RatingVoteInput>>;
  voteSelectAnswerForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteSelectAnswerForOwnedVoteDefinitions(): Promise<JudoRestResponse<SelectAnswerVoteSelection>>;
  getRangeOnVoteSelectAnswerForOwnedVoteDefinitions(
    owner?: ServiceVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<SelectAnswerVoteSelectionStored>>>;
  voteYesNoForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoForOwnedVoteDefinitions(): Promise<JudoRestResponse<YesNoVoteInput>>;
  voteYesNoAbstainForOwnedVoteDefinitions(
    owner: JudoIdentifiable<ServiceVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVoteYesNoAbstainForOwnedVoteDefinitions(): Promise<JudoRestResponse<YesNoAbstainVoteInput>>;
  listUserVoteEntries(
    target: JudoIdentifiable<ServiceDashboard>,
    queryCustomizer?: ServiceVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteEntryStored>>>;
  getRangeForUserVoteEntries(
    owner?: JudoIdentifiable<ServiceDashboard> | ServiceDashboard,
    queryCustomizer?: ServiceVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceVoteEntryStored>>>;
}
