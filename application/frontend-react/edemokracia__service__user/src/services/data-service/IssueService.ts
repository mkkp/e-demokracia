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
  Issue,
  IssueQueryCustomizer,
  IssueStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for Issue
 */
export interface IssueService {
  refresh(target: JudoIdentifiable<Issue>, queryCustomizer?: IssueQueryCustomizer): Promise<IssueStored>;
  activate(owner: JudoIdentifiable<Issue>): Promise<void>;
  addToFavorites(owner: JudoIdentifiable<Issue>): Promise<void>;
  closeDebate(
    owner: JudoIdentifiable<Issue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebate(): Promise<CloseDebateInput>;
  closeVote(owner: JudoIdentifiable<Issue>): Promise<void>;
  createComment(owner: JudoIdentifiable<Issue>, target: CreateCommentInput): Promise<void>;
  getTemplateOnCreateComment(): Promise<CreateCommentInput>;
  createConArgument(owner: JudoIdentifiable<Issue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgument(): Promise<CreateArgumentInput>;
  createProArgument(owner: JudoIdentifiable<Issue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgument(): Promise<CreateArgumentInput>;
  deleteOrArchive(owner: JudoIdentifiable<Issue>): Promise<void>;
  removeFromFavorites(owner: JudoIdentifiable<Issue>): Promise<void>;
}
