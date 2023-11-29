//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceRatingVoteDefinition,
  ServiceRatingVoteEntryQueryCustomizer,
  RatingVoteInput,
  CloseDebateOutputVoteDefinitionReferenceStored,
  ServiceRatingVoteDefinitionStored,
  ServiceIssueQueryCustomizer,
  ServiceRatingVoteDefinitionQueryCustomizer,
  ServiceIssueStored,
  ServiceServiceUserStored,
  ServiceIssue,
  ServiceServiceUser,
  CreateCommentInput,
  CreateArgumentInput,
  ServiceRatingVoteEntry,
  ServiceServiceUserQueryCustomizer,
  CloseDebateInput,
  ServiceRatingVoteEntryStored,
} from '../data-api';

/**
 * Class Service for ServiceRatingVoteDefinition
 */
export interface ServiceRatingVoteDefinitionService {
  refresh(
    target: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer?: ServiceRatingVoteDefinitionQueryCustomizer,
  ): Promise<ServiceRatingVoteDefinitionStored>;
  update(target: Partial<ServiceRatingVoteDefinitionStored>): Promise<ServiceRatingVoteDefinitionStored>;
  getIssue(
    target: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored>;
  getRangeForIssue(
    owner?: JudoIdentifiable<ServiceRatingVoteDefinition> | ServiceRatingVoteDefinition,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;
  createProArgumentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgumentForIssue(): Promise<CreateArgumentInput>;
  createConArgumentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgumentForIssue(): Promise<CreateArgumentInput>;
  closeDebateForIssue(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebateForIssue(): Promise<CloseDebateInput>;
  activateForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  createCommentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void>;
  getTemplateOnCreateCommentForIssue(): Promise<CreateCommentInput>;
  closeVoteForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavoritesForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  deleteOrArchiveForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavoritesForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  listVoteEntries(
    target: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer?: ServiceRatingVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceRatingVoteEntryStored>>;
  getRangeForVoteEntries(
    owner?: JudoIdentifiable<ServiceRatingVoteDefinition> | ServiceRatingVoteDefinition,
    queryCustomizer?: ServiceRatingVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceRatingVoteEntryStored>>;
  getUserVoteEntry(
    target: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer?: ServiceRatingVoteEntryQueryCustomizer,
  ): Promise<ServiceRatingVoteEntryStored>;
  getRangeForUserVoteEntry(
    owner?: JudoIdentifiable<ServiceRatingVoteDefinition> | ServiceRatingVoteDefinition,
    queryCustomizer?: ServiceRatingVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceRatingVoteEntryStored>>;
  getOwner(
    target: JudoIdentifiable<ServiceRatingVoteDefinition>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;
  getRangeForOwner(
    owner?: JudoIdentifiable<ServiceRatingVoteDefinition> | ServiceRatingVoteDefinition,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;
  setOwner(
    owner: JudoIdentifiable<ServiceRatingVoteDefinition>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void>;
  unsetOwner(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<void>;
  vote(owner: JudoIdentifiable<ServiceRatingVoteDefinition>, target: RatingVoteInput): Promise<void>;
  getTemplateOnVote(): Promise<RatingVoteInput>;
  takeBackVote(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<void>;
  removeFromFavorites(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<void>;
  addToFavorites(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<void>;
  deleteOrArchive(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<void>;
  activate(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<void>;
  closeVote(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<void>;
}
