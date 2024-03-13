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
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceRatingVoteDefinition,
  ServiceRatingVoteDefinitionQueryCustomizer,
  ServiceRatingVoteDefinitionStored,
  ServiceRatingVoteEntry,
  ServiceRatingVoteEntryQueryCustomizer,
  ServiceRatingVoteEntryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceRatingVoteDefinition
 */
export interface ServiceRatingVoteDefinitionService {
  refresh(
    target: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer?: ServiceRatingVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceRatingVoteDefinitionStored>>;
  update(
    target: Partial<ServiceRatingVoteDefinitionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceRatingVoteDefinitionStored>>;
  validateUpdate(
    target: Partial<ServiceRatingVoteDefinitionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceRatingVoteDefinitionStored>>;
  getIssue(
    target: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueStored>>;
  getRangeForIssue(
    owner?: JudoIdentifiable<ServiceRatingVoteDefinition> | ServiceRatingVoteDefinition,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>>;
  activateForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  addToFavoritesForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  closeDebateForIssue(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<JudoRestResponse<CloseDebateOutputVoteDefinitionReferenceStored>>;
  getTemplateOnCloseDebateForIssue(): Promise<JudoRestResponse<CloseDebateInput>>;
  closeVoteForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  createCommentForIssue(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateCommentForIssue(): Promise<JudoRestResponse<CreateCommentInput>>;
  createConArgumentForIssue(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateConArgumentForIssue(): Promise<JudoRestResponse<CreateArgumentInput>>;
  createProArgumentForIssue(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateProArgumentForIssue(): Promise<JudoRestResponse<CreateArgumentInput>>;
  deleteOrArchiveForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  removeFromFavoritesForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  getOwner(
    target: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  getRangeForOwner(
    owner?: JudoIdentifiable<ServiceRatingVoteDefinition> | ServiceRatingVoteDefinition,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>>;
  setOwner(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>>;
  unsetOwner(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<JudoRestResponse<void>>;
  getUserVoteEntry(
    target: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer?: ServiceRatingVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceRatingVoteEntryStored>>;
  getRangeForUserVoteEntry(
    owner?: JudoIdentifiable<ServiceRatingVoteDefinition> | ServiceRatingVoteDefinition,
    queryCustomizer?: ServiceRatingVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceRatingVoteEntryStored>>>;
  listVoteEntries(
    target: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer?: ServiceRatingVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceRatingVoteEntryStored>>>;
  getRangeForVoteEntries(
    owner?: JudoIdentifiable<ServiceRatingVoteDefinition> | ServiceRatingVoteDefinition,
    queryCustomizer?: ServiceRatingVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceRatingVoteEntryStored>>>;
  activate(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<JudoRestResponse<void>>;
  addToFavorites(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<JudoRestResponse<void>>;
  closeVote(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<JudoRestResponse<void>>;
  deleteOrArchive(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<JudoRestResponse<void>>;
  removeFromFavorites(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<JudoRestResponse<void>>;
  takeBackVote(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<JudoRestResponse<void>>;
  vote(owner: JudoIdentifiable<ServiceRatingVoteDefinition>, target: RatingVoteInput): Promise<JudoRestResponse<void>>;
  getTemplateOnVote(): Promise<JudoRestResponse<RatingVoteInput>>;
}
