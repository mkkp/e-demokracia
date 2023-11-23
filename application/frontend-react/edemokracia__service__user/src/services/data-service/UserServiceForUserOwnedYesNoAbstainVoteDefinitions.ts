//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  YesNoAbstainVoteInputStored,
  CloseDebateOutputVoteDefinitionReferenceStored,
  CloseDebateOutputVoteDefinitionReference,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceIssueQueryCustomizer,
  YesNoAbstainVoteInput,
  CreateArgumentInputStored,
  ServiceYesNoAbstainVoteDefinition,
  ServiceIssueStored,
  ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ServiceIssue,
  CreateCommentInputStored,
  CreateCommentInput,
  CreateArgumentInput,
  CloseDebateInputStored,
  ServiceYesNoAbstainVoteEntryStored,
  ServiceYesNoAbstainVoteEntry,
  CloseDebateInput,
} from '../data-api';

/**
 * Relation Service for User.userOwnedYesNoAbstainVoteDefinitions
 */
export interface UserServiceForUserOwnedYesNoAbstainVoteDefinitions {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ): Promise<Array<ServiceYesNoAbstainVoteDefinitionStored>>;

  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ): Promise<ServiceYesNoAbstainVoteDefinitionStored>;

  update(target: Partial<ServiceYesNoAbstainVoteDefinitionStored>): Promise<ServiceYesNoAbstainVoteDefinitionStored>;

  getIssue(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
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
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    queryCustomizer?: ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<Array<ServiceYesNoAbstainVoteEntryStored>>;

  getUserVoteEntry(
    owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>,
    queryCustomizer?: ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ): Promise<ServiceYesNoAbstainVoteEntryStored>;

  vote(owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>, target: YesNoAbstainVoteInput): Promise<void>;

  getTemplateForVote(): Promise<YesNoAbstainVoteInput>;

  takeBackVote(owner: JudoIdentifiable<ServiceYesNoAbstainVoteDefinition>): Promise<void>;
}
