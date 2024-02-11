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
  JudoRestResponse,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for Issue
 */
export interface IssueService {
  refresh(
    target: JudoIdentifiable<Issue>,
    queryCustomizer?: IssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<IssueStored>>;
  activate(owner: JudoIdentifiable<Issue>): Promise<JudoRestResponse<void>>;
  addToFavorites(owner: JudoIdentifiable<Issue>): Promise<JudoRestResponse<void>>;
  closeDebate(
    owner: JudoIdentifiable<Issue>,
    target: CloseDebateInput,
  ): Promise<JudoRestResponse<CloseDebateOutputVoteDefinitionReferenceStored>>;
  getTemplateOnCloseDebate(): Promise<JudoRestResponse<CloseDebateInput>>;
  closeVote(owner: JudoIdentifiable<Issue>): Promise<JudoRestResponse<void>>;
  createComment(owner: JudoIdentifiable<Issue>, target: CreateCommentInput): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateComment(): Promise<JudoRestResponse<CreateCommentInput>>;
  createConArgument(owner: JudoIdentifiable<Issue>, target: CreateArgumentInput): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateConArgument(): Promise<JudoRestResponse<CreateArgumentInput>>;
  createProArgument(owner: JudoIdentifiable<Issue>, target: CreateArgumentInput): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateProArgument(): Promise<JudoRestResponse<CreateArgumentInput>>;
  deleteOrArchive(owner: JudoIdentifiable<Issue>): Promise<JudoRestResponse<void>>;
  removeFromFavorites(owner: JudoIdentifiable<Issue>): Promise<JudoRestResponse<void>>;
}
