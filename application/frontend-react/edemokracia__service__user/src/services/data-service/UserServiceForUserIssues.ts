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
  createConArgumentForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateConArgumentForOwnedIssues(): Promise<CreateArgumentInput>;
  createProArgumentForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;
  getTemplateOnCreateProArgumentForOwnedIssues(): Promise<CreateArgumentInput>;
  closeVoteForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  closeDebateForOwnedIssues(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebateForOwnedIssues(): Promise<CloseDebateInput>;
  createCommentForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void>;
  getTemplateOnCreateCommentForOwnedIssues(): Promise<CreateCommentInput>;
  deleteOrArchiveForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavoritesForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavoritesForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  activateForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  listActiveIssuesGlobal(
    owner: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;
  updateActiveIssuesGlobal(
    owner: JudoIdentifiable<ServiceUserIssues>,
    target: Partial<ServiceIssueStored>,
  ): Promise<ServiceIssueStored>;
  createConArgumentForActiveIssuesGlobal(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateConArgumentForActiveIssuesGlobal(): Promise<CreateArgumentInput>;
  createProArgumentForActiveIssuesGlobal(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateProArgumentForActiveIssuesGlobal(): Promise<CreateArgumentInput>;
  closeVoteForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  closeDebateForActiveIssuesGlobal(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebateForActiveIssuesGlobal(): Promise<CloseDebateInput>;
  createCommentForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void>;
  getTemplateOnCreateCommentForActiveIssuesGlobal(): Promise<CreateCommentInput>;
  deleteOrArchiveForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavoritesForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavoritesForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  activateForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  listActiveIssuesInActivityCounties(
    owner: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;
  updateActiveIssuesInActivityCounties(
    owner: JudoIdentifiable<ServiceUserIssues>,
    target: Partial<ServiceIssueStored>,
  ): Promise<ServiceIssueStored>;
  createConArgumentForActiveIssuesInActivityCounties(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateConArgumentForActiveIssuesInActivityCounties(): Promise<CreateArgumentInput>;
  createProArgumentForActiveIssuesInActivityCounties(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateProArgumentForActiveIssuesInActivityCounties(): Promise<CreateArgumentInput>;
  closeVoteForActiveIssuesInActivityCounties(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  closeDebateForActiveIssuesInActivityCounties(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebateForActiveIssuesInActivityCounties(): Promise<CloseDebateInput>;
  createCommentForActiveIssuesInActivityCounties(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<void>;
  getTemplateOnCreateCommentForActiveIssuesInActivityCounties(): Promise<CreateCommentInput>;
  deleteOrArchiveForActiveIssuesInActivityCounties(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavoritesForActiveIssuesInActivityCounties(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavoritesForActiveIssuesInActivityCounties(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  activateForActiveIssuesInActivityCounties(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  listActiveIssuesInActivityCities(
    owner: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;
  updateActiveIssuesInActivityCities(
    owner: JudoIdentifiable<ServiceUserIssues>,
    target: Partial<ServiceIssueStored>,
  ): Promise<ServiceIssueStored>;
  createConArgumentForActiveIssuesInActivityCities(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateConArgumentForActiveIssuesInActivityCities(): Promise<CreateArgumentInput>;
  createProArgumentForActiveIssuesInActivityCities(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateProArgumentForActiveIssuesInActivityCities(): Promise<CreateArgumentInput>;
  closeVoteForActiveIssuesInActivityCities(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  closeDebateForActiveIssuesInActivityCities(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebateForActiveIssuesInActivityCities(): Promise<CloseDebateInput>;
  createCommentForActiveIssuesInActivityCities(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<void>;
  getTemplateOnCreateCommentForActiveIssuesInActivityCities(): Promise<CreateCommentInput>;
  deleteOrArchiveForActiveIssuesInActivityCities(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavoritesForActiveIssuesInActivityCities(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavoritesForActiveIssuesInActivityCities(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  activateForActiveIssuesInActivityCities(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  listActiveIssuesInActivityDistricts(
    owner: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;
  updateActiveIssuesInActivityDistricts(
    owner: JudoIdentifiable<ServiceUserIssues>,
    target: Partial<ServiceIssueStored>,
  ): Promise<ServiceIssueStored>;
  createConArgumentForActiveIssuesInActivityDistricts(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateConArgumentForActiveIssuesInActivityDistricts(): Promise<CreateArgumentInput>;
  createProArgumentForActiveIssuesInActivityDistricts(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateProArgumentForActiveIssuesInActivityDistricts(): Promise<CreateArgumentInput>;
  closeVoteForActiveIssuesInActivityDistricts(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  closeDebateForActiveIssuesInActivityDistricts(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebateForActiveIssuesInActivityDistricts(): Promise<CloseDebateInput>;
  createCommentForActiveIssuesInActivityDistricts(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<void>;
  getTemplateOnCreateCommentForActiveIssuesInActivityDistricts(): Promise<CreateCommentInput>;
  deleteOrArchiveForActiveIssuesInActivityDistricts(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavoritesForActiveIssuesInActivityDistricts(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavoritesForActiveIssuesInActivityDistricts(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  activateForActiveIssuesInActivityDistricts(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  listActiveIssuesInResidentCounty(
    owner: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;
  updateActiveIssuesInResidentCounty(
    owner: JudoIdentifiable<ServiceUserIssues>,
    target: Partial<ServiceIssueStored>,
  ): Promise<ServiceIssueStored>;
  createConArgumentForActiveIssuesInResidentCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateConArgumentForActiveIssuesInResidentCounty(): Promise<CreateArgumentInput>;
  createProArgumentForActiveIssuesInResidentCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateProArgumentForActiveIssuesInResidentCounty(): Promise<CreateArgumentInput>;
  closeVoteForActiveIssuesInResidentCounty(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  closeDebateForActiveIssuesInResidentCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebateForActiveIssuesInResidentCounty(): Promise<CloseDebateInput>;
  createCommentForActiveIssuesInResidentCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<void>;
  getTemplateOnCreateCommentForActiveIssuesInResidentCounty(): Promise<CreateCommentInput>;
  deleteOrArchiveForActiveIssuesInResidentCounty(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavoritesForActiveIssuesInResidentCounty(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavoritesForActiveIssuesInResidentCounty(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  activateForActiveIssuesInResidentCounty(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  listActiveIssuesInResidentCity(
    owner: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;
  updateActiveIssuesInResidentCity(
    owner: JudoIdentifiable<ServiceUserIssues>,
    target: Partial<ServiceIssueStored>,
  ): Promise<ServiceIssueStored>;
  createConArgumentForActiveIssuesInResidentCity(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateConArgumentForActiveIssuesInResidentCity(): Promise<CreateArgumentInput>;
  createProArgumentForActiveIssuesInResidentCity(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateProArgumentForActiveIssuesInResidentCity(): Promise<CreateArgumentInput>;
  closeVoteForActiveIssuesInResidentCity(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  closeDebateForActiveIssuesInResidentCity(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebateForActiveIssuesInResidentCity(): Promise<CloseDebateInput>;
  createCommentForActiveIssuesInResidentCity(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<void>;
  getTemplateOnCreateCommentForActiveIssuesInResidentCity(): Promise<CreateCommentInput>;
  deleteOrArchiveForActiveIssuesInResidentCity(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavoritesForActiveIssuesInResidentCity(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavoritesForActiveIssuesInResidentCity(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  activateForActiveIssuesInResidentCity(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  listActiveIssuesInResidentDistrict(
    owner: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;
  updateActiveIssuesInResidentDistrict(
    owner: JudoIdentifiable<ServiceUserIssues>,
    target: Partial<ServiceIssueStored>,
  ): Promise<ServiceIssueStored>;
  createConArgumentForActiveIssuesInResidentDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateConArgumentForActiveIssuesInResidentDistrict(): Promise<CreateArgumentInput>;
  createProArgumentForActiveIssuesInResidentDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;
  getTemplateOnCreateProArgumentForActiveIssuesInResidentDistrict(): Promise<CreateArgumentInput>;
  closeVoteForActiveIssuesInResidentDistrict(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  closeDebateForActiveIssuesInResidentDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;
  getTemplateOnCloseDebateForActiveIssuesInResidentDistrict(): Promise<CloseDebateInput>;
  createCommentForActiveIssuesInResidentDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<void>;
  getTemplateOnCreateCommentForActiveIssuesInResidentDistrict(): Promise<CreateCommentInput>;
  deleteOrArchiveForActiveIssuesInResidentDistrict(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  addToFavoritesForActiveIssuesInResidentDistrict(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  removeFromFavoritesForActiveIssuesInResidentDistrict(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  activateForActiveIssuesInResidentDistrict(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  createIssue(target: ServiceCreateIssueInput): Promise<ServiceIssueStored>;
  getTemplateOnCreateIssue(): Promise<ServiceCreateIssueInput>;
}
