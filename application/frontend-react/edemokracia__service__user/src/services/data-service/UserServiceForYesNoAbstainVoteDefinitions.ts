//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  CloseDebateInput,
  CloseDebateInputStored,
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceStored,
  CreateArgumentInput,
  CreateArgumentInputStored,
  CreateCommentInput,
  CreateCommentInputStored,
  JudoRestResponse,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceYesNoAbstainVoteEntry,
  ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ServiceYesNoAbstainVoteEntryStored,
  YesNoAbstainVoteInput,
  YesNoAbstainVoteInputStored,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for User.yesNoAbstainVoteDefinitions
 */
export interface UserServiceForYesNoAbstainVoteDefinitions {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceYesNoAbstainVoteDefinitionStored>>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceYesNoAbstainVoteDefinitionStored>>;
  update(
    target: Partial<ServiceYesNoAbstainVoteDefinitionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceYesNoAbstainVoteDefinitionStored>>;
  validateUpdate(
    target: Partial<ServiceYesNoAbstainVoteDefinitionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceYesNoAbstainVoteDefinitionStored>>;
  getIssue(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueStored>>;
  validateUpdateIssue(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    target: Partial<ServiceIssueStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueStored>>;
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
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  getRangeForOwner(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition> | ServiceYesNoAbstainVoteDefinition,
    queryCustomizer: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>>;
  validateUpdateOwner(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    target: Partial<ServiceServiceUserStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  setOwner(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>>;
  unsetOwner(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    target: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>>;
  getUserVoteEntry(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    queryCustomizer?: ServiceYesNoAbstainVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceYesNoAbstainVoteEntryStored>>;
  validateUpdateUserVoteEntry(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    target: Partial<ServiceYesNoAbstainVoteEntryStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceYesNoAbstainVoteEntryStored>>;
  listVoteEntries(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    queryCustomizer?: ServiceYesNoAbstainVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceYesNoAbstainVoteEntryStored>>>;
  validateUpdateVoteEntries(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    target: Partial<ServiceYesNoAbstainVoteEntryStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceYesNoAbstainVoteEntryStored>>;
  activate(owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>): Promise<JudoRestResponse<void>>;
  addToFavorites(owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>): Promise<JudoRestResponse<void>>;
  closeVote(owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>): Promise<JudoRestResponse<void>>;
  deleteOrArchive(owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>): Promise<JudoRestResponse<void>>;
  removeFromFavorites(owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>): Promise<JudoRestResponse<void>>;
  takeBackVote(owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>): Promise<JudoRestResponse<void>>;
  vote(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    target: YesNoAbstainVoteInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVote(): Promise<JudoRestResponse<YesNoAbstainVoteInput>>;
}
