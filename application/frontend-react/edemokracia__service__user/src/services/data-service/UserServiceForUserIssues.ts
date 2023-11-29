//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceUserIssuesStored,
  CloseDebateOutputVoteDefinitionReferenceStored,
  ServiceCreateIssueInput,
  ServiceUserIssuesQueryCustomizer,
  CloseDebateOutputVoteDefinitionReference,
  ServiceIssueQueryCustomizer,
  CreateArgumentInputStored,
  ServiceIssueStored,
  ServiceUserIssues,
  ServiceIssue,
  CreateCommentInputStored,
  CreateCommentInput,
  ServiceCreateIssueInputStored,
  CreateArgumentInput,
  CloseDebateInputStored,
  CloseDebateInput,
} from '../data-api';

/**
 * Relation Service for User.userIssues
 */
export interface UserServiceForUserIssues {
  refreshForUserIssues(queryCustomizer?: ServiceUserIssuesQueryCustomizer): Promise<ServiceUserIssuesStored>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceUserIssuesQueryCustomizer,
  ): Promise<ServiceUserIssuesStored>;
  listOwnedIssues(
    owner: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;
  updateOwnedIssues(
    owner: JudoIdentifiable<ServiceUserIssues>,
    target: Partial<ServiceIssueStored>,
  ): Promise<ServiceIssueStored>;
  createProArgumentForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgumentForOwnedIssues(): Promise<CreateArgumentInput>;
  createConArgumentForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgumentForOwnedIssues(): Promise<CreateArgumentInput>;
  closeDebateForOwnedIssues(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebateForOwnedIssues(): Promise<CloseDebateInput>;
  activateForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  createCommentForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void>;
  getTemplateOnCreateCommentForOwnedIssues(): Promise<CreateCommentInput>;
  closeVoteForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavoritesForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  deleteOrArchiveForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavoritesForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  listActiveIssuesGlobal(
    owner: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;
  updateActiveIssuesGlobal(
    owner: JudoIdentifiable<ServiceUserIssues>,
    target: Partial<ServiceIssueStored>,
  ): Promise<ServiceIssueStored>;
  createProArgumentForActiveIssuesGlobal(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateProArgumentForActiveIssuesGlobal(): Promise<CreateArgumentInput>;
  createConArgumentForActiveIssuesGlobal(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateConArgumentForActiveIssuesGlobal(): Promise<CreateArgumentInput>;
  closeDebateForActiveIssuesGlobal(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebateForActiveIssuesGlobal(): Promise<CloseDebateInput>;
  activateForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  createCommentForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void>;
  getTemplateOnCreateCommentForActiveIssuesGlobal(): Promise<CreateCommentInput>;
  closeVoteForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavoritesForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  deleteOrArchiveForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavoritesForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  listActiveIssuesInActivityCounties(
    owner: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;
  updateActiveIssuesInActivityCounties(
    owner: JudoIdentifiable<ServiceUserIssues>,
    target: Partial<ServiceIssueStored>,
  ): Promise<ServiceIssueStored>;
  createProArgumentForActiveIssuesInActivityCounties(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateProArgumentForActiveIssuesInActivityCounties(): Promise<CreateArgumentInput>;
  createConArgumentForActiveIssuesInActivityCounties(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateConArgumentForActiveIssuesInActivityCounties(): Promise<CreateArgumentInput>;
  closeDebateForActiveIssuesInActivityCounties(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebateForActiveIssuesInActivityCounties(): Promise<CloseDebateInput>;
  activateForActiveIssuesInActivityCounties(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  createCommentForActiveIssuesInActivityCounties(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<void>;
  getTemplateOnCreateCommentForActiveIssuesInActivityCounties(): Promise<CreateCommentInput>;
  closeVoteForActiveIssuesInActivityCounties(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavoritesForActiveIssuesInActivityCounties(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  deleteOrArchiveForActiveIssuesInActivityCounties(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavoritesForActiveIssuesInActivityCounties(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  listActiveIssuesInActivityCities(
    owner: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;
  updateActiveIssuesInActivityCities(
    owner: JudoIdentifiable<ServiceUserIssues>,
    target: Partial<ServiceIssueStored>,
  ): Promise<ServiceIssueStored>;
  createProArgumentForActiveIssuesInActivityCities(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateProArgumentForActiveIssuesInActivityCities(): Promise<CreateArgumentInput>;
  createConArgumentForActiveIssuesInActivityCities(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateConArgumentForActiveIssuesInActivityCities(): Promise<CreateArgumentInput>;
  closeDebateForActiveIssuesInActivityCities(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebateForActiveIssuesInActivityCities(): Promise<CloseDebateInput>;
  activateForActiveIssuesInActivityCities(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  createCommentForActiveIssuesInActivityCities(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<void>;
  getTemplateOnCreateCommentForActiveIssuesInActivityCities(): Promise<CreateCommentInput>;
  closeVoteForActiveIssuesInActivityCities(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavoritesForActiveIssuesInActivityCities(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  deleteOrArchiveForActiveIssuesInActivityCities(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavoritesForActiveIssuesInActivityCities(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  listActiveIssuesInActivityDistricts(
    owner: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;
  updateActiveIssuesInActivityDistricts(
    owner: JudoIdentifiable<ServiceUserIssues>,
    target: Partial<ServiceIssueStored>,
  ): Promise<ServiceIssueStored>;
  createProArgumentForActiveIssuesInActivityDistricts(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateProArgumentForActiveIssuesInActivityDistricts(): Promise<CreateArgumentInput>;
  createConArgumentForActiveIssuesInActivityDistricts(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateConArgumentForActiveIssuesInActivityDistricts(): Promise<CreateArgumentInput>;
  closeDebateForActiveIssuesInActivityDistricts(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebateForActiveIssuesInActivityDistricts(): Promise<CloseDebateInput>;
  activateForActiveIssuesInActivityDistricts(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  createCommentForActiveIssuesInActivityDistricts(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<void>;
  getTemplateOnCreateCommentForActiveIssuesInActivityDistricts(): Promise<CreateCommentInput>;
  closeVoteForActiveIssuesInActivityDistricts(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavoritesForActiveIssuesInActivityDistricts(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  deleteOrArchiveForActiveIssuesInActivityDistricts(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavoritesForActiveIssuesInActivityDistricts(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  listActiveIssuesInResidentCounty(
    owner: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;
  updateActiveIssuesInResidentCounty(
    owner: JudoIdentifiable<ServiceUserIssues>,
    target: Partial<ServiceIssueStored>,
  ): Promise<ServiceIssueStored>;
  createProArgumentForActiveIssuesInResidentCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateProArgumentForActiveIssuesInResidentCounty(): Promise<CreateArgumentInput>;
  createConArgumentForActiveIssuesInResidentCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateConArgumentForActiveIssuesInResidentCounty(): Promise<CreateArgumentInput>;
  closeDebateForActiveIssuesInResidentCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebateForActiveIssuesInResidentCounty(): Promise<CloseDebateInput>;
  activateForActiveIssuesInResidentCounty(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  createCommentForActiveIssuesInResidentCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<void>;
  getTemplateOnCreateCommentForActiveIssuesInResidentCounty(): Promise<CreateCommentInput>;
  closeVoteForActiveIssuesInResidentCounty(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavoritesForActiveIssuesInResidentCounty(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  deleteOrArchiveForActiveIssuesInResidentCounty(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavoritesForActiveIssuesInResidentCounty(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  listActiveIssuesInResidentCity(
    owner: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;
  updateActiveIssuesInResidentCity(
    owner: JudoIdentifiable<ServiceUserIssues>,
    target: Partial<ServiceIssueStored>,
  ): Promise<ServiceIssueStored>;
  createProArgumentForActiveIssuesInResidentCity(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateProArgumentForActiveIssuesInResidentCity(): Promise<CreateArgumentInput>;
  createConArgumentForActiveIssuesInResidentCity(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateConArgumentForActiveIssuesInResidentCity(): Promise<CreateArgumentInput>;
  closeDebateForActiveIssuesInResidentCity(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebateForActiveIssuesInResidentCity(): Promise<CloseDebateInput>;
  activateForActiveIssuesInResidentCity(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  createCommentForActiveIssuesInResidentCity(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<void>;
  getTemplateOnCreateCommentForActiveIssuesInResidentCity(): Promise<CreateCommentInput>;
  closeVoteForActiveIssuesInResidentCity(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavoritesForActiveIssuesInResidentCity(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  deleteOrArchiveForActiveIssuesInResidentCity(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavoritesForActiveIssuesInResidentCity(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  listActiveIssuesInResidentDistrict(
    owner: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;
  updateActiveIssuesInResidentDistrict(
    owner: JudoIdentifiable<ServiceUserIssues>,
    target: Partial<ServiceIssueStored>,
  ): Promise<ServiceIssueStored>;
  createProArgumentForActiveIssuesInResidentDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateProArgumentForActiveIssuesInResidentDistrict(): Promise<CreateArgumentInput>;
  createConArgumentForActiveIssuesInResidentDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateConArgumentForActiveIssuesInResidentDistrict(): Promise<CreateArgumentInput>;
  closeDebateForActiveIssuesInResidentDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebateForActiveIssuesInResidentDistrict(): Promise<CloseDebateInput>;
  activateForActiveIssuesInResidentDistrict(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  createCommentForActiveIssuesInResidentDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<void>;
  getTemplateOnCreateCommentForActiveIssuesInResidentDistrict(): Promise<CreateCommentInput>;
  closeVoteForActiveIssuesInResidentDistrict(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavoritesForActiveIssuesInResidentDistrict(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  deleteOrArchiveForActiveIssuesInResidentDistrict(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavoritesForActiveIssuesInResidentDistrict(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  createIssue(target: ServiceCreateIssueInput): Promise<ServiceIssueStored>;
  getTemplateOnCreateIssue(): Promise<ServiceCreateIssueInput>;
}
