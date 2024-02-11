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
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceSelectAnswerVoteDefinition
 */
export interface ServiceSelectAnswerVoteDefinitionService {
  refresh(
    target: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceSelectAnswerVoteDefinitionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteDefinitionStored>>;
  update(
    target: Partial<ServiceSelectAnswerVoteDefinitionStored>,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteDefinitionStored>>;
  validateUpdate(
    target: Partial<ServiceSelectAnswerVoteDefinitionStored>,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteDefinitionStored>>;
  getIssue(
    target: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceIssueStored>>;
  getRangeForIssue(
    owner?: JudoIdentifiable<ServiceSelectAnswerVoteDefinition> | ServiceSelectAnswerVoteDefinition,
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
    target: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  getRangeForOwner(
    owner?: JudoIdentifiable<ServiceSelectAnswerVoteDefinition> | ServiceSelectAnswerVoteDefinition,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>>;
  setOwner(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>>;
  unsetOwner(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<JudoRestResponse<void>>;
  getUserVoteEntry(
    target: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceSelectAnswerVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteEntryStored>>;
  getRangeForUserVoteEntry(
    owner?: JudoIdentifiable<ServiceSelectAnswerVoteDefinition> | ServiceSelectAnswerVoteDefinition,
    queryCustomizer?: ServiceSelectAnswerVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceSelectAnswerVoteEntryStored>>>;
  listVoteEntries(
    target: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceSelectAnswerVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceSelectAnswerVoteEntryStored>>>;
  getRangeForVoteEntries(
    owner?: JudoIdentifiable<ServiceSelectAnswerVoteDefinition> | ServiceSelectAnswerVoteDefinition,
    queryCustomizer?: ServiceSelectAnswerVoteEntryQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceSelectAnswerVoteEntryStored>>>;
  getTemplateForVoteSelections(): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelection>>;
  createVoteSelections(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<ServiceSelectAnswerVoteSelection>,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelectionStored>>;
  validateCreateVoteSelections(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: ServiceSelectAnswerVoteSelection,
  ): Promise<JudoRestResponse<ServiceSelectAnswerVoteSelection>>;
  listVoteSelections(
    target: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceSelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceSelectAnswerVoteSelectionStored>>>;
  getRangeForVoteSelections(
    owner?: JudoIdentifiable<ServiceSelectAnswerVoteDefinition> | ServiceSelectAnswerVoteDefinition,
    queryCustomizer?: ServiceSelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceSelectAnswerVoteSelectionStored>>>;
  deleteVoteSelections(target: JudoIdentifiable<ServiceSelectAnswerVoteSelection>): Promise<JudoRestResponse<void>>;
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
    owner?: ServiceSelectAnswerVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<SelectAnswerVoteSelectionStored>>>;
}
