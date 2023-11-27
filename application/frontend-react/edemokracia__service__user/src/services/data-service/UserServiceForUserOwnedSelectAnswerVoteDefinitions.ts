//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  CloseDebateOutputVoteDefinitionReferenceStored,
  ServiceSelectAnswerVoteDefinition,
  ServiceIssueQueryCustomizer,
  CreateArgumentInputStored,
  ServiceIssueStored,
  SelectAnswerVoteSelection,
  ServiceIssue,
  ServiceServiceUser,
  ServiceSelectAnswerVoteDefinitionStored,
  SelectAnswerVoteSelectionStored,
  CreateCommentInput,
  CreateArgumentInput,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  CloseDebateInput,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteEntryStored,
  CloseDebateOutputVoteDefinitionReference,
  ServiceServiceUserStored,
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteSelectionStored,
  SelectAnswerVoteSelectionQueryCustomizer,
  CreateCommentInputStored,
  CloseDebateInputStored,
  ServiceServiceUserQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for User.userOwnedSelectAnswerVoteDefinitions
 */
export interface UserServiceForUserOwnedSelectAnswerVoteDefinitions {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceSelectAnswerVoteDefinitionStored>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ): Promise<ServiceSelectAnswerVoteDefinitionStored>;
  update(target: Partial<ServiceSelectAnswerVoteDefinitionStored>): Promise<ServiceSelectAnswerVoteDefinitionStored>;
  getIssue(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored>;
  createProArgumentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgumentForIssue(): Promise<CreateArgumentInput>;
  createConArgumentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgumentForIssue(): Promise<CreateArgumentInput>;
  createCommentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void>;
  getTemplateOnCreateCommentForIssue(): Promise<CreateCommentInput>;
  removeFromFavoritesForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  closeDebateForIssue(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebateForIssue(): Promise<CloseDebateInput>;
  closeVoteForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  activateForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  deleteOrArchiveForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavoritesForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  listVoteEntries(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceSelectAnswerVoteEntryStored>>;
  getUserVoteEntry(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<ServiceSelectAnswerVoteEntryStored>;
  listVoteSelections(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<ServiceSelectAnswerVoteSelectionStored>>;
  getTemplateForVoteSelections(): Promise<ServiceSelectAnswerVoteSelection>;
  createVoteSelections(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: ServiceSelectAnswerVoteSelection,
  ): Promise<ServiceSelectAnswerVoteSelectionStored>;
  deleteVoteSelections(target: JudoIdentifiable<ServiceSelectAnswerVoteSelection>): Promise<void>;
  updateVoteSelections(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: Partial<ServiceSelectAnswerVoteSelectionStored>,
  ): Promise<ServiceSelectAnswerVoteSelectionStored>;
  getOwner(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;
  getRangeForOwner(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition> | ServiceSelectAnswerVoteDefinition,
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;
  setOwner(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void>;
  unsetOwner(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void>;
  vote(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>, target: SelectAnswerVoteSelection): Promise<void>;
  getTemplateOnVote(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVote(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition> | ServiceSelectAnswerVoteDefinition,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
  takeBackVote(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<void>;
  activate(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<void>;
  addToFavorites(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<void>;
  closeVote(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<void>;
  deleteOrArchive(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<void>;
  removeFromFavorites(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<void>;
}
