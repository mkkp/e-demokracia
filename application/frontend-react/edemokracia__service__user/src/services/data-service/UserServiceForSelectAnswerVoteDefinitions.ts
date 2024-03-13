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
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
  ServiceSelectAnswerVoteEntryStored,
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteSelectionStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for User.selectAnswerVoteDefinitions
 */
export interface UserServiceForSelectAnswerVoteDefinitions {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceSelectAnswerVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceSelectAnswerVoteDefinitionStored>>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceSelectAnswerVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteDefinitionStored>>;
  update(
    target: Partial<ServiceSelectAnswerVoteDefinitionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteDefinitionStored>>;
  validateUpdate(
    target: Partial<ServiceSelectAnswerVoteDefinitionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteDefinitionStored>>;
  getIssue(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueStored>>;
  validateUpdateIssue(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
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
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  getRangeForOwner(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition> | ServiceSelectAnswerVoteDefinition,
    queryCustomizer: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>>;
  validateUpdateOwner(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: Partial<ServiceServiceUserStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  setOwner(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>>;
  unsetOwner(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>>;
  getUserVoteEntry(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceSelectAnswerVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteEntryStored>>;
  validateUpdateUserVoteEntry(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: Partial<ServiceSelectAnswerVoteEntryStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteEntryStored>>;
  listVoteEntries(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceSelectAnswerVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceSelectAnswerVoteEntryStored>>>;
  validateUpdateVoteEntries(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: Partial<ServiceSelectAnswerVoteEntryStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteEntryStored>>;
  listVoteSelections(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceSelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceSelectAnswerVoteSelectionStored>>>;
  getTemplateForVoteSelections(): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelection>>;
  createVoteSelections(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: ServiceSelectAnswerVoteSelection,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelectionStored>>;
  deleteVoteSelections(target: JudoIdentifiable<ServiceSelectAnswerVoteSelection>): Promise<JudoRestResponse<void>>;
  updateVoteSelections(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: Partial<ServiceSelectAnswerVoteSelectionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelectionStored>>;
  validateUpdateVoteSelections(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: Partial<ServiceSelectAnswerVoteSelectionStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelectionStored>>;
  activate(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<JudoRestResponse<void>>;
  addToFavorites(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<JudoRestResponse<void>>;
  closeVote(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<JudoRestResponse<void>>;
  deleteOrArchive(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<JudoRestResponse<void>>;
  removeFromFavorites(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<JudoRestResponse<void>>;
  takeBackVote(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<JudoRestResponse<void>>;
  vote(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: SelectAnswerVoteSelection,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnVote(): Promise<JudoRestResponse<SelectAnswerVoteSelection>>;
  getRangeOnVote(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition> | ServiceSelectAnswerVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<SelectAnswerVoteSelectionStored>>>;
}
