//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceSelectAnswerVoteEntryStored,
  CloseDebateOutputVoteDefinitionReferenceStored,
  ServiceSelectAnswerVoteDefinition,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceServiceUserStored,
  SelectAnswerVoteSelection,
  ServiceSelectAnswerVoteEntry,
  ServiceIssue,
  ServiceServiceUser,
  ServiceSelectAnswerVoteSelectionStored,
  SelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionStored,
  SelectAnswerVoteSelectionStored,
  CreateCommentInput,
  CreateArgumentInput,
  ServiceServiceUserQueryCustomizer,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  CloseDebateInput,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
  ServiceSelectAnswerVoteSelection,
} from '../data-api';

/**
 * Class Service for ServiceSelectAnswerVoteDefinition
 */
export interface ServiceSelectAnswerVoteDefinitionService {
  refresh(
    target: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ): Promise<ServiceSelectAnswerVoteDefinitionStored>;
  update(target: Partial<ServiceSelectAnswerVoteDefinitionStored>): Promise<ServiceSelectAnswerVoteDefinitionStored>;
  getIssue(
    target: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored>;
  getRangeForIssue(
    owner?: JudoIdentifiable<ServiceSelectAnswerVoteDefinition> | ServiceSelectAnswerVoteDefinition,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;
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
    target: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;
  getRangeForOwner(
    owner?: JudoIdentifiable<ServiceSelectAnswerVoteDefinition> | ServiceSelectAnswerVoteDefinition,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;
  setOwner(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void>;
  unsetOwner(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<void>;
  getUserVoteEntry(
    target: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<ServiceSelectAnswerVoteEntryStored>;
  getRangeForUserVoteEntry(
    owner?: JudoIdentifiable<ServiceSelectAnswerVoteDefinition> | ServiceSelectAnswerVoteDefinition,
    queryCustomizer?: ServiceSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceSelectAnswerVoteEntryStored>>;
  listVoteEntries(
    target: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceSelectAnswerVoteEntryStored>>;
  getRangeForVoteEntries(
    owner?: JudoIdentifiable<ServiceSelectAnswerVoteDefinition> | ServiceSelectAnswerVoteDefinition,
    queryCustomizer?: ServiceSelectAnswerVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceSelectAnswerVoteEntryStored>>;
  getTemplateForVoteSelections(): Promise<ServiceSelectAnswerVoteSelection>;
  createVoteSelections(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    target: JudoIdentifiable<ServiceSelectAnswerVoteSelection>,
  ): Promise<ServiceSelectAnswerVoteSelectionStored>;
  listVoteSelections(
    target: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>,
    queryCustomizer?: ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<ServiceSelectAnswerVoteSelectionStored>>;
  getRangeForVoteSelections(
    owner?: JudoIdentifiable<ServiceSelectAnswerVoteDefinition> | ServiceSelectAnswerVoteDefinition,
    queryCustomizer?: ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<ServiceSelectAnswerVoteSelectionStored>>;
  deleteVoteSelections(target: JudoIdentifiable<ServiceSelectAnswerVoteSelection>): Promise<void>;
  activate(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<void>;
  addToFavorites(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<void>;
  closeVote(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<void>;
  deleteOrArchive(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<void>;
  removeFromFavorites(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<void>;
  takeBackVote(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>): Promise<void>;
  vote(owner: JudoIdentifiable<ServiceSelectAnswerVoteDefinition>, target: SelectAnswerVoteSelection): Promise<void>;
  getTemplateOnVote(): Promise<SelectAnswerVoteSelection>;
  getRangeOnVote(
    owner?: ServiceSelectAnswerVoteDefinitionStored,
    queryCustomizer?: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<Array<SelectAnswerVoteSelectionStored>>;
}
