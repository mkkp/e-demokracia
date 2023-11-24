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
  ServiceIssue,
  CreateCommentInput,
  CreateArgumentInput,
  ServiceRatingVoteEntry,
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
  createConArgumentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgumentForIssue(): Promise<CreateArgumentInput>;
  createProArgumentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgumentForIssue(): Promise<CreateArgumentInput>;
  closeVoteForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  deleteOrArchiveForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  activateForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavoritesForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  closeDebateForIssue(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebateForIssue(): Promise<CloseDebateInput>;
  createCommentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void>;
  getTemplateOnCreateCommentForIssue(): Promise<CreateCommentInput>;
  addToFavoritesForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
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
  vote(owner: JudoIdentifiable<ServiceRatingVoteDefinition>, target: RatingVoteInput): Promise<void>;
  getTemplateOnVote(): Promise<RatingVoteInput>;
  takeBackVote(owner: JudoIdentifiable<ServiceRatingVoteDefinition>): Promise<void>;
}
