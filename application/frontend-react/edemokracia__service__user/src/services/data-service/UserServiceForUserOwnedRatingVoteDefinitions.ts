//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceRatingVoteDefinition,
  ServiceRatingVoteEntryQueryCustomizer,
  RatingVoteInput,
  CloseDebateOutputVoteDefinitionReferenceStored,
  ServiceRatingVoteDefinitionStored,
  CloseDebateOutputVoteDefinitionReference,
  ServiceIssueQueryCustomizer,
  CreateArgumentInputStored,
  ServiceRatingVoteDefinitionQueryCustomizer,
  ServiceIssueStored,
  ServiceServiceUserStored,
  ServiceIssue,
  RatingVoteInputStored,
  ServiceServiceUser,
  CreateCommentInputStored,
  CreateCommentInput,
  CreateArgumentInput,
  ServiceRatingVoteEntry,
  CloseDebateInputStored,
  ServiceServiceUserQueryCustomizer,
  CloseDebateInput,
  ServiceRatingVoteEntryStored,
} from '../data-api';

/**
 * Relation Service for User.userOwnedRatingVoteDefinitions
 */
export interface UserServiceForUserOwnedRatingVoteDefinitions {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceRatingVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceRatingVoteDefinitionStored>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceRatingVoteDefinitionQueryCustomizer,
  ): Promise<ServiceRatingVoteDefinitionStored>;
  update(target: Partial<ServiceRatingVoteDefinitionStored>): Promise<ServiceRatingVoteDefinitionStored>;
  getIssue(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
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
  getOwner(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;
  getRangeForOwner(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition> | ServiceRatingVoteDefinition,
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;
  setOwner(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void>;
  unsetOwner(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    target: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void>;
  getUserVoteEntry(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer?: ServiceRatingVoteEntryQueryCustomizer,
  ): Promise<ServiceRatingVoteEntryStored>;
  listVoteEntries(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer?: ServiceRatingVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceRatingVoteEntryStored>>;
  activate(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<void>;
  addToFavorites(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<void>;
  closeVote(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<void>;
  deleteOrArchive(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<void>;
  removeFromFavorites(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<void>;
  takeBackVote(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<void>;
  vote(owner: JudoIdentifiable<ServiceRatingVoteDefinition>, target: RatingVoteInput): Promise<void>;
  getTemplateOnVote(): Promise<RatingVoteInput>;
}
