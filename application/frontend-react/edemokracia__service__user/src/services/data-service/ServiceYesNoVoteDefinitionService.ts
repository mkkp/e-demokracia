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
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceYesNoVoteDefinitionStored,
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteEntryQueryCustomizer,
  ServiceYesNoVoteEntryStored,
  YesNoVoteInput,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceYesNoVoteDefinition
 */
export interface ServiceYesNoVoteDefinitionService {
  refresh(
    target: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceYesNoVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceYesNoVoteDefinitionStored>>;
  update(
    target: Partial<ServiceYesNoVoteDefinitionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceYesNoVoteDefinitionStored>>;
  validateUpdate(
    target: Partial<ServiceYesNoVoteDefinitionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceYesNoVoteDefinitionStored>>;
  getIssue(
    target: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueStored>>;
  getRangeForIssue(
    owner?: JudoIdentifiable<ServiceYesNoVoteDefinition> | ServiceYesNoVoteDefinition,
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
    target: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  getRangeForOwner(
    owner?: JudoIdentifiable<ServiceYesNoVoteDefinition> | ServiceYesNoVoteDefinition,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>>;
  setOwner(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>>;
  unsetOwner(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<JudoRestResponse<void>>;
  getUserVoteEntry(
    target: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceYesNoVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceYesNoVoteEntryStored>>;
  getRangeForUserVoteEntry(
    owner?: JudoIdentifiable<ServiceYesNoVoteDefinition> | ServiceYesNoVoteDefinition,
    queryCustomizer?: ServiceYesNoVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceYesNoVoteEntryStored>>>;
  listVoteEntries(
    target: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceYesNoVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceYesNoVoteEntryStored>>>;
  getRangeForVoteEntries(
    owner?: JudoIdentifiable<ServiceYesNoVoteDefinition> | ServiceYesNoVoteDefinition,
    queryCustomizer?: ServiceYesNoVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceYesNoVoteEntryStored>>>;
  activate(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<JudoRestResponse<void>>;
  addToFavorites(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<JudoRestResponse<void>>;
  closeVote(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<JudoRestResponse<void>>;
  deleteOrArchive(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<JudoRestResponse<void>>;
  removeFromFavorites(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<JudoRestResponse<void>>;
  takeBackVote(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<JudoRestResponse<void>>;
  vote(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>, target: YesNoVoteInput): Promise<JudoRestResponse<void>>;
  getTemplateOnVote(): Promise<JudoRestResponse<YesNoVoteInput>>;
}
