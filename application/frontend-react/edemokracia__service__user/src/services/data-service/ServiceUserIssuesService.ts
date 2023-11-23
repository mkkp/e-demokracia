//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceUserIssuesStored,
  CloseDebateOutputVoteDefinitionReferenceStored,
  ServiceCreateIssueInput,
  ServiceUserIssuesQueryCustomizer,
  CreateCommentInput,
  ServiceIssueQueryCustomizer,
  CreateArgumentInput,
  ServiceIssueStored,
  CloseDebateInput,
  ServiceUserIssues,
  ServiceIssue,
} from '../data-api';

/**
 * Class Service for ServiceUserIssues
 */
export interface ServiceUserIssuesService {
  refresh(
    target: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceUserIssuesQueryCustomizer,
  ): Promise<ServiceUserIssuesStored>;

  listOwnedIssues(
    target: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  getRangeForOwnedIssues(
    owner?: JudoIdentifiable<ServiceUserIssues> | ServiceUserIssues,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

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
    target: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  getRangeForActiveIssuesGlobal(
    owner?: JudoIdentifiable<ServiceUserIssues> | ServiceUserIssues,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

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
    target: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  getRangeForActiveIssuesInActivityCounties(
    owner?: JudoIdentifiable<ServiceUserIssues> | ServiceUserIssues,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

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
    target: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  getRangeForActiveIssuesInActivityCities(
    owner?: JudoIdentifiable<ServiceUserIssues> | ServiceUserIssues,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

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
    target: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  getRangeForActiveIssuesInActivityDistricts(
    owner?: JudoIdentifiable<ServiceUserIssues> | ServiceUserIssues,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

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
    target: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  getRangeForActiveIssuesInResidentCounty(
    owner?: JudoIdentifiable<ServiceUserIssues> | ServiceUserIssues,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

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
    target: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  getRangeForActiveIssuesInResidentCity(
    owner?: JudoIdentifiable<ServiceUserIssues> | ServiceUserIssues,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

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
    target: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

  getRangeForActiveIssuesInResidentDistrict(
    owner?: JudoIdentifiable<ServiceUserIssues> | ServiceUserIssues,
    queryCustomizer?: ServiceIssueQueryCustomizer,
  ): Promise<Array<ServiceIssueStored>>;

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
