//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  Issue,
  CloseDebateOutputVoteDefinitionReferenceStored,
  IssueQueryCustomizer,
  CreateCommentInput,
  IssueStored,
  CreateArgumentInput,
  CloseDebateInput,
} from '../data-api';

/**
 * Class Service for Issue
 */
export interface IssueService {
  refresh(target: JudoIdentifiable<Issue>, queryCustomizer?: IssueQueryCustomizer): Promise<IssueStored>;
  createComment(owner: JudoIdentifiable<Issue>, target: CreateCommentInput): Promise<void>;
  getTemplateOnCreateComment(): Promise<CreateCommentInput>;
  removeFromFavorites(owner: JudoIdentifiable<Issue>): Promise<void>;
  addToFavorites(owner: JudoIdentifiable<Issue>): Promise<void>;
  closeDebate(
    owner: JudoIdentifiable<Issue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebate(): Promise<CloseDebateInput>;
  createProArgument(owner: JudoIdentifiable<Issue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgument(): Promise<CreateArgumentInput>;
  createConArgument(owner: JudoIdentifiable<Issue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgument(): Promise<CreateArgumentInput>;
  closeVote(owner: JudoIdentifiable<Issue>): Promise<void>;
  activate(owner: JudoIdentifiable<Issue>): Promise<void>;
  deleteOrArchive(owner: JudoIdentifiable<Issue>): Promise<void>;
}
