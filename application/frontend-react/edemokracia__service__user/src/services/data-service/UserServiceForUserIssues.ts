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

  getTemplateForCreateProArgumentForOwnedIssues(): Promise<CreateArgumentInput>;

  createConArgumentForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>, target: CreateArgumentInput): Promise<void>;

  getTemplateForCreateConArgumentForOwnedIssues(): Promise<CreateArgumentInput>;

  addToFavoritesForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  deleteOrArchiveForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  createCommentForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void>;

  getTemplateForCreateCommentForOwnedIssues(): Promise<CreateCommentInput>;

  removeFromFavoritesForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  activateForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  closeDebateForOwnedIssues(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;

  getTemplateForCloseDebateForOwnedIssues(): Promise<CloseDebateInput>;

  closeVoteForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

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

  getTemplateForCreateProArgumentForActiveIssuesGlobal(): Promise<CreateArgumentInput>;

  createConArgumentForActiveIssuesGlobal(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;

  getTemplateForCreateConArgumentForActiveIssuesGlobal(): Promise<CreateArgumentInput>;

  addToFavoritesForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  deleteOrArchiveForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  createCommentForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>, target: CreateCommentInput): Promise<void>;

  getTemplateForCreateCommentForActiveIssuesGlobal(): Promise<CreateCommentInput>;

  removeFromFavoritesForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  activateForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  closeDebateForActiveIssuesGlobal(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;

  getTemplateForCloseDebateForActiveIssuesGlobal(): Promise<CloseDebateInput>;

  closeVoteForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

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

  getTemplateForCreateProArgumentForActiveIssuesInActivityCounties(): Promise<CreateArgumentInput>;

  createConArgumentForActiveIssuesInActivityCounties(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;

  getTemplateForCreateConArgumentForActiveIssuesInActivityCounties(): Promise<CreateArgumentInput>;

  addToFavoritesForActiveIssuesInActivityCounties(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  deleteOrArchiveForActiveIssuesInActivityCounties(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  createCommentForActiveIssuesInActivityCounties(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<void>;

  getTemplateForCreateCommentForActiveIssuesInActivityCounties(): Promise<CreateCommentInput>;

  removeFromFavoritesForActiveIssuesInActivityCounties(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  activateForActiveIssuesInActivityCounties(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  closeDebateForActiveIssuesInActivityCounties(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;

  getTemplateForCloseDebateForActiveIssuesInActivityCounties(): Promise<CloseDebateInput>;

  closeVoteForActiveIssuesInActivityCounties(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

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

  getTemplateForCreateProArgumentForActiveIssuesInActivityCities(): Promise<CreateArgumentInput>;

  createConArgumentForActiveIssuesInActivityCities(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;

  getTemplateForCreateConArgumentForActiveIssuesInActivityCities(): Promise<CreateArgumentInput>;

  addToFavoritesForActiveIssuesInActivityCities(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  deleteOrArchiveForActiveIssuesInActivityCities(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  createCommentForActiveIssuesInActivityCities(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<void>;

  getTemplateForCreateCommentForActiveIssuesInActivityCities(): Promise<CreateCommentInput>;

  removeFromFavoritesForActiveIssuesInActivityCities(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  activateForActiveIssuesInActivityCities(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  closeDebateForActiveIssuesInActivityCities(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;

  getTemplateForCloseDebateForActiveIssuesInActivityCities(): Promise<CloseDebateInput>;

  closeVoteForActiveIssuesInActivityCities(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

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

  getTemplateForCreateProArgumentForActiveIssuesInActivityDistricts(): Promise<CreateArgumentInput>;

  createConArgumentForActiveIssuesInActivityDistricts(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;

  getTemplateForCreateConArgumentForActiveIssuesInActivityDistricts(): Promise<CreateArgumentInput>;

  addToFavoritesForActiveIssuesInActivityDistricts(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  deleteOrArchiveForActiveIssuesInActivityDistricts(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  createCommentForActiveIssuesInActivityDistricts(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<void>;

  getTemplateForCreateCommentForActiveIssuesInActivityDistricts(): Promise<CreateCommentInput>;

  removeFromFavoritesForActiveIssuesInActivityDistricts(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  activateForActiveIssuesInActivityDistricts(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  closeDebateForActiveIssuesInActivityDistricts(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;

  getTemplateForCloseDebateForActiveIssuesInActivityDistricts(): Promise<CloseDebateInput>;

  closeVoteForActiveIssuesInActivityDistricts(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

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

  getTemplateForCreateProArgumentForActiveIssuesInResidentCounty(): Promise<CreateArgumentInput>;

  createConArgumentForActiveIssuesInResidentCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;

  getTemplateForCreateConArgumentForActiveIssuesInResidentCounty(): Promise<CreateArgumentInput>;

  addToFavoritesForActiveIssuesInResidentCounty(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  deleteOrArchiveForActiveIssuesInResidentCounty(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  createCommentForActiveIssuesInResidentCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<void>;

  getTemplateForCreateCommentForActiveIssuesInResidentCounty(): Promise<CreateCommentInput>;

  removeFromFavoritesForActiveIssuesInResidentCounty(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  activateForActiveIssuesInResidentCounty(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  closeDebateForActiveIssuesInResidentCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;

  getTemplateForCloseDebateForActiveIssuesInResidentCounty(): Promise<CloseDebateInput>;

  closeVoteForActiveIssuesInResidentCounty(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

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

  getTemplateForCreateProArgumentForActiveIssuesInResidentCity(): Promise<CreateArgumentInput>;

  createConArgumentForActiveIssuesInResidentCity(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;

  getTemplateForCreateConArgumentForActiveIssuesInResidentCity(): Promise<CreateArgumentInput>;

  addToFavoritesForActiveIssuesInResidentCity(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  deleteOrArchiveForActiveIssuesInResidentCity(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  createCommentForActiveIssuesInResidentCity(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<void>;

  getTemplateForCreateCommentForActiveIssuesInResidentCity(): Promise<CreateCommentInput>;

  removeFromFavoritesForActiveIssuesInResidentCity(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  activateForActiveIssuesInResidentCity(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  closeDebateForActiveIssuesInResidentCity(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;

  getTemplateForCloseDebateForActiveIssuesInResidentCity(): Promise<CloseDebateInput>;

  closeVoteForActiveIssuesInResidentCity(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

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

  getTemplateForCreateProArgumentForActiveIssuesInResidentDistrict(): Promise<CreateArgumentInput>;

  createConArgumentForActiveIssuesInResidentDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<void>;

  getTemplateForCreateConArgumentForActiveIssuesInResidentDistrict(): Promise<CreateArgumentInput>;

  addToFavoritesForActiveIssuesInResidentDistrict(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  deleteOrArchiveForActiveIssuesInResidentDistrict(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  createCommentForActiveIssuesInResidentDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<void>;

  getTemplateForCreateCommentForActiveIssuesInResidentDistrict(): Promise<CreateCommentInput>;

  removeFromFavoritesForActiveIssuesInResidentDistrict(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  activateForActiveIssuesInResidentDistrict(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  closeDebateForActiveIssuesInResidentDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<CloseDebateOutputVoteDefinitionReferenceStored>;

  getTemplateForCloseDebateForActiveIssuesInResidentDistrict(): Promise<CloseDebateInput>;

  closeVoteForActiveIssuesInResidentDistrict(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;

  createIssue(target: ServiceCreateIssueInput): Promise<ServiceIssueStored>;

  getTemplateForCreateIssue(): Promise<ServiceCreateIssueInput>;
}
