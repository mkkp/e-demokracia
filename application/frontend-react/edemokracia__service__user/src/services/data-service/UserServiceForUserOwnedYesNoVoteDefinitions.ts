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
  ServiceYesNoVoteDefinitionStored,
  CloseDebateOutputVoteDefinitionReference,
  ServiceIssueQueryCustomizer,
  CreateArgumentInputStored,
  ServiceIssueStored,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceIssue,
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteEntryStored,
  CreateCommentInputStored,
  ServiceYesNoVoteEntry,
  CreateCommentInput,
  CreateArgumentInput,
  CloseDebateInputStored,
  YesNoVoteInput,
  CloseDebateInput,
  YesNoVoteInputStored,
  ServiceYesNoVoteEntryQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for User.userOwnedYesNoVoteDefinitions
 */
export interface UserServiceForUserOwnedYesNoVoteDefinitions {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceYesNoVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceYesNoVoteDefinitionStored>>;

  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceYesNoVoteDefinitionQueryCustomizer,
  ): Promise<ServiceYesNoVoteDefinitionStored>;

  update(target: Partial<ServiceYesNoVoteDefinitionStored>): Promise<ServiceYesNoVoteDefinitionStored>;

  getIssue(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored>;

  createProArgumentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateProArgumentForIssue(): Promise<CreateArgumentInput>;

  createConArgumentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateConArgumentForIssue(): Promise<CreateArgumentInput>;

  addToFavoritesForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  deleteOrArchiveForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  createCommentForIssue(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void>;

  getTemplateForCreateCommentForIssue(): Promise<CreateCommentInput>;

  removeFromFavoritesForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  activateForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  closeDebateForIssue(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;

  getTemplateForCloseDebateForIssue(): Promise<CloseDebateInput>;

  closeVoteForIssue(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  listVoteEntries(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceYesNoVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceYesNoVoteEntryStored>>;

  getUserVoteEntry(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    queryCustomizer?: ServiceYesNoVoteEntryQueryCustomizer,
  ): Promise<ServiceYesNoVoteEntryStored>;

  vote(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>, target: YesNoVoteInput): Promise<void>;

  getTemplateForVote(): Promise<YesNoVoteInput>;

  takeBackVote(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<void>;
}
