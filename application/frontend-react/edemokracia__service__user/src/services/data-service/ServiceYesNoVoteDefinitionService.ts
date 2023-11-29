//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  CloseDebateOutputVoteDefinitionReferenceStored,
  ServiceYesNoVoteDefinitionStored,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceServiceUserStored,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceIssue,
  ServiceYesNoVoteDefinition,
  ServiceServiceUser,
  ServiceYesNoVoteEntryStored,
  ServiceYesNoVoteEntry,
  CreateCommentInput,
  CreateArgumentInput,
  ServiceServiceUserQueryCustomizer,
  YesNoVoteInput,
  CloseDebateInput,
  ServiceYesNoVoteEntryQueryCustomizer,
} from '../data-api';

/**
 * Class Service for ServiceYesNoVoteDefinition
 */
export interface ServiceYesNoVoteDefinitionService {
  refresh(
    target: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceYesNoVoteDefinitionQueryCustomizer,
  ): Promise<ServiceYesNoVoteDefinitionStored>;
  update(target: Partial<ServiceYesNoVoteDefinitionStored>): Promise<ServiceYesNoVoteDefinitionStored>;
  getIssue(
    target: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored>;
  getRangeForIssue(
    owner?: JudoIdentifiable<ServiceYesNoVoteDefinition> | ServiceYesNoVoteDefinition,
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
    target: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceYesNoVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceYesNoVoteEntryStored>>;
  getRangeForVoteEntries(
    owner?: JudoIdentifiable<ServiceYesNoVoteDefinition> | ServiceYesNoVoteDefinition,
    queryCustomizer?: ServiceYesNoVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceYesNoVoteEntryStored>>;
  getUserVoteEntry(
    target: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceYesNoVoteEntryQueryCustomizer,
  ): Promise<ServiceYesNoVoteEntryStored>;
  getRangeForUserVoteEntry(
    owner?: JudoIdentifiable<ServiceYesNoVoteDefinition> | ServiceYesNoVoteDefinition,
    queryCustomizer?: ServiceYesNoVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceYesNoVoteEntryStored>>;
  getOwner(
    target: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;
  getRangeForOwner(
    owner?: JudoIdentifiable<ServiceYesNoVoteDefinition> | ServiceYesNoVoteDefinition,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;
  setOwner(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<void>;
  unsetOwner(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<void>;
  vote(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>, target: YesNoVoteInput): Promise<void>;
  getTemplateOnVote(): Promise<YesNoVoteInput>;
  takeBackVote(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<void>;
  removeFromFavorites(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<void>;
  addToFavorites(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<void>;
  deleteOrArchive(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<void>;
  activate(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<void>;
  closeVote(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<void>;
}
