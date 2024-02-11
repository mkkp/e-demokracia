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
  JudoRestResponse,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceCreateIssueInput,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  ServiceUserIssues,
  ServiceUserIssuesQueryCustomizer,
  ServiceUserIssuesStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceUserIssues
 */
export interface ServiceUserIssuesService {
  refresh(
    target: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceUserIssuesQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceUserIssuesStored>>;
  listActiveIssuesGlobal(
    target: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>>;
  getRangeForActiveIssuesGlobal(
    owner?: JudoIdentifiable<ServiceUserIssues> | ServiceUserIssues,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>>;
  activateForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  addToFavoritesForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  closeDebateForActiveIssuesGlobal(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<JudoRestResponse<CloseDebateOutputVoteDefinitionReferenceStored>>;
  getTemplateOnCloseDebateForActiveIssuesGlobal(): Promise<JudoRestResponse<CloseDebateInput>>;
  closeVoteForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  createCommentForActiveIssuesGlobal(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateCommentForActiveIssuesGlobal(): Promise<JudoRestResponse<CreateCommentInput>>;
  createConArgumentForActiveIssuesGlobal(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateConArgumentForActiveIssuesGlobal(): Promise<JudoRestResponse<CreateArgumentInput>>;
  createProArgumentForActiveIssuesGlobal(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateProArgumentForActiveIssuesGlobal(): Promise<JudoRestResponse<CreateArgumentInput>>;
  deleteOrArchiveForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  removeFromFavoritesForActiveIssuesGlobal(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  listActiveIssuesInActivityCities(
    target: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>>;
  getRangeForActiveIssuesInActivityCities(
    owner?: JudoIdentifiable<ServiceUserIssues> | ServiceUserIssues,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>>;
  activateForActiveIssuesInActivityCities(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  addToFavoritesForActiveIssuesInActivityCities(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  closeDebateForActiveIssuesInActivityCities(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<JudoRestResponse<CloseDebateOutputVoteDefinitionReferenceStored>>;
  getTemplateOnCloseDebateForActiveIssuesInActivityCities(): Promise<JudoRestResponse<CloseDebateInput>>;
  closeVoteForActiveIssuesInActivityCities(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  createCommentForActiveIssuesInActivityCities(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateCommentForActiveIssuesInActivityCities(): Promise<JudoRestResponse<CreateCommentInput>>;
  createConArgumentForActiveIssuesInActivityCities(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateConArgumentForActiveIssuesInActivityCities(): Promise<JudoRestResponse<CreateArgumentInput>>;
  createProArgumentForActiveIssuesInActivityCities(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateProArgumentForActiveIssuesInActivityCities(): Promise<JudoRestResponse<CreateArgumentInput>>;
  deleteOrArchiveForActiveIssuesInActivityCities(
    owner: JudoIdentifiable<ServiceIssue>,
  ): Promise<JudoRestResponse<void>>;
  removeFromFavoritesForActiveIssuesInActivityCities(
    owner: JudoIdentifiable<ServiceIssue>,
  ): Promise<JudoRestResponse<void>>;
  listActiveIssuesInActivityCounties(
    target: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>>;
  getRangeForActiveIssuesInActivityCounties(
    owner?: JudoIdentifiable<ServiceUserIssues> | ServiceUserIssues,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>>;
  activateForActiveIssuesInActivityCounties(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  addToFavoritesForActiveIssuesInActivityCounties(
    owner: JudoIdentifiable<ServiceIssue>,
  ): Promise<JudoRestResponse<void>>;
  closeDebateForActiveIssuesInActivityCounties(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<JudoRestResponse<CloseDebateOutputVoteDefinitionReferenceStored>>;
  getTemplateOnCloseDebateForActiveIssuesInActivityCounties(): Promise<JudoRestResponse<CloseDebateInput>>;
  closeVoteForActiveIssuesInActivityCounties(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  createCommentForActiveIssuesInActivityCounties(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateCommentForActiveIssuesInActivityCounties(): Promise<JudoRestResponse<CreateCommentInput>>;
  createConArgumentForActiveIssuesInActivityCounties(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateConArgumentForActiveIssuesInActivityCounties(): Promise<JudoRestResponse<CreateArgumentInput>>;
  createProArgumentForActiveIssuesInActivityCounties(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateProArgumentForActiveIssuesInActivityCounties(): Promise<JudoRestResponse<CreateArgumentInput>>;
  deleteOrArchiveForActiveIssuesInActivityCounties(
    owner: JudoIdentifiable<ServiceIssue>,
  ): Promise<JudoRestResponse<void>>;
  removeFromFavoritesForActiveIssuesInActivityCounties(
    owner: JudoIdentifiable<ServiceIssue>,
  ): Promise<JudoRestResponse<void>>;
  listActiveIssuesInActivityDistricts(
    target: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>>;
  getRangeForActiveIssuesInActivityDistricts(
    owner?: JudoIdentifiable<ServiceUserIssues> | ServiceUserIssues,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>>;
  activateForActiveIssuesInActivityDistricts(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  addToFavoritesForActiveIssuesInActivityDistricts(
    owner: JudoIdentifiable<ServiceIssue>,
  ): Promise<JudoRestResponse<void>>;
  closeDebateForActiveIssuesInActivityDistricts(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<JudoRestResponse<CloseDebateOutputVoteDefinitionReferenceStored>>;
  getTemplateOnCloseDebateForActiveIssuesInActivityDistricts(): Promise<JudoRestResponse<CloseDebateInput>>;
  closeVoteForActiveIssuesInActivityDistricts(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  createCommentForActiveIssuesInActivityDistricts(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateCommentForActiveIssuesInActivityDistricts(): Promise<JudoRestResponse<CreateCommentInput>>;
  createConArgumentForActiveIssuesInActivityDistricts(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateConArgumentForActiveIssuesInActivityDistricts(): Promise<JudoRestResponse<CreateArgumentInput>>;
  createProArgumentForActiveIssuesInActivityDistricts(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateProArgumentForActiveIssuesInActivityDistricts(): Promise<JudoRestResponse<CreateArgumentInput>>;
  deleteOrArchiveForActiveIssuesInActivityDistricts(
    owner: JudoIdentifiable<ServiceIssue>,
  ): Promise<JudoRestResponse<void>>;
  removeFromFavoritesForActiveIssuesInActivityDistricts(
    owner: JudoIdentifiable<ServiceIssue>,
  ): Promise<JudoRestResponse<void>>;
  listActiveIssuesInResidentCity(
    target: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>>;
  getRangeForActiveIssuesInResidentCity(
    owner?: JudoIdentifiable<ServiceUserIssues> | ServiceUserIssues,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>>;
  activateForActiveIssuesInResidentCity(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  addToFavoritesForActiveIssuesInResidentCity(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  closeDebateForActiveIssuesInResidentCity(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<JudoRestResponse<CloseDebateOutputVoteDefinitionReferenceStored>>;
  getTemplateOnCloseDebateForActiveIssuesInResidentCity(): Promise<JudoRestResponse<CloseDebateInput>>;
  closeVoteForActiveIssuesInResidentCity(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  createCommentForActiveIssuesInResidentCity(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateCommentForActiveIssuesInResidentCity(): Promise<JudoRestResponse<CreateCommentInput>>;
  createConArgumentForActiveIssuesInResidentCity(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateConArgumentForActiveIssuesInResidentCity(): Promise<JudoRestResponse<CreateArgumentInput>>;
  createProArgumentForActiveIssuesInResidentCity(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateProArgumentForActiveIssuesInResidentCity(): Promise<JudoRestResponse<CreateArgumentInput>>;
  deleteOrArchiveForActiveIssuesInResidentCity(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  removeFromFavoritesForActiveIssuesInResidentCity(
    owner: JudoIdentifiable<ServiceIssue>,
  ): Promise<JudoRestResponse<void>>;
  listActiveIssuesInResidentCounty(
    target: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>>;
  getRangeForActiveIssuesInResidentCounty(
    owner?: JudoIdentifiable<ServiceUserIssues> | ServiceUserIssues,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>>;
  activateForActiveIssuesInResidentCounty(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  addToFavoritesForActiveIssuesInResidentCounty(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  closeDebateForActiveIssuesInResidentCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<JudoRestResponse<CloseDebateOutputVoteDefinitionReferenceStored>>;
  getTemplateOnCloseDebateForActiveIssuesInResidentCounty(): Promise<JudoRestResponse<CloseDebateInput>>;
  closeVoteForActiveIssuesInResidentCounty(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  createCommentForActiveIssuesInResidentCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateCommentForActiveIssuesInResidentCounty(): Promise<JudoRestResponse<CreateCommentInput>>;
  createConArgumentForActiveIssuesInResidentCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateConArgumentForActiveIssuesInResidentCounty(): Promise<JudoRestResponse<CreateArgumentInput>>;
  createProArgumentForActiveIssuesInResidentCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateProArgumentForActiveIssuesInResidentCounty(): Promise<JudoRestResponse<CreateArgumentInput>>;
  deleteOrArchiveForActiveIssuesInResidentCounty(
    owner: JudoIdentifiable<ServiceIssue>,
  ): Promise<JudoRestResponse<void>>;
  removeFromFavoritesForActiveIssuesInResidentCounty(
    owner: JudoIdentifiable<ServiceIssue>,
  ): Promise<JudoRestResponse<void>>;
  listActiveIssuesInResidentDistrict(
    target: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>>;
  getRangeForActiveIssuesInResidentDistrict(
    owner?: JudoIdentifiable<ServiceUserIssues> | ServiceUserIssues,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>>;
  activateForActiveIssuesInResidentDistrict(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  addToFavoritesForActiveIssuesInResidentDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
  ): Promise<JudoRestResponse<void>>;
  closeDebateForActiveIssuesInResidentDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<JudoRestResponse<CloseDebateOutputVoteDefinitionReferenceStored>>;
  getTemplateOnCloseDebateForActiveIssuesInResidentDistrict(): Promise<JudoRestResponse<CloseDebateInput>>;
  closeVoteForActiveIssuesInResidentDistrict(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  createCommentForActiveIssuesInResidentDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateCommentForActiveIssuesInResidentDistrict(): Promise<JudoRestResponse<CreateCommentInput>>;
  createConArgumentForActiveIssuesInResidentDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateConArgumentForActiveIssuesInResidentDistrict(): Promise<JudoRestResponse<CreateArgumentInput>>;
  createProArgumentForActiveIssuesInResidentDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateProArgumentForActiveIssuesInResidentDistrict(): Promise<JudoRestResponse<CreateArgumentInput>>;
  deleteOrArchiveForActiveIssuesInResidentDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
  ): Promise<JudoRestResponse<void>>;
  removeFromFavoritesForActiveIssuesInResidentDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
  ): Promise<JudoRestResponse<void>>;
  listOwnedIssues(
    target: JudoIdentifiable<ServiceUserIssues>,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>>;
  getRangeForOwnedIssues(
    owner?: JudoIdentifiable<ServiceUserIssues> | ServiceUserIssues,
    queryCustomizer?: ServiceIssueQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueStored>>>;
  addOwnedIssues(
    owner: JudoIdentifiable<ServiceUserIssues>,
    selected: Array<JudoIdentifiable<ServiceIssue>>,
  ): Promise<JudoRestResponse<void>>;
  removeOwnedIssues(
    owner: JudoIdentifiable<ServiceUserIssues>,
    selected: Array<JudoIdentifiable<ServiceIssue>>,
  ): Promise<JudoRestResponse<void>>;
  activateForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  addToFavoritesForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  closeDebateForOwnedIssues(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CloseDebateInput,
  ): Promise<JudoRestResponse<CloseDebateOutputVoteDefinitionReferenceStored>>;
  getTemplateOnCloseDebateForOwnedIssues(): Promise<JudoRestResponse<CloseDebateInput>>;
  closeVoteForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  createCommentForOwnedIssues(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateCommentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateCommentForOwnedIssues(): Promise<JudoRestResponse<CreateCommentInput>>;
  createConArgumentForOwnedIssues(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateConArgumentForOwnedIssues(): Promise<JudoRestResponse<CreateArgumentInput>>;
  createProArgumentForOwnedIssues(
    owner: JudoIdentifiable<ServiceIssue>,
    target: CreateArgumentInput,
  ): Promise<JudoRestResponse<void>>;
  getTemplateOnCreateProArgumentForOwnedIssues(): Promise<JudoRestResponse<CreateArgumentInput>>;
  deleteOrArchiveForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  removeFromFavoritesForOwnedIssues(owner: JudoIdentifiable<ServiceIssue>): Promise<JudoRestResponse<void>>;
  createIssue(target: ServiceCreateIssueInput): Promise<JudoRestResponse<ServiceIssueStored>>;
  getTemplateOnCreateIssue(): Promise<JudoRestResponse<ServiceCreateIssueInput>>;
  getRangeOnCreateIssueForCity(
    owner?: JudoIdentifiable<ServiceCreateIssueInput>,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>>;
  getRangeOnCreateIssueForCounty(
    owner?: JudoIdentifiable<ServiceCreateIssueInput>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCountyStored>>>;
  getRangeOnCreateIssueForDistrict(
    owner?: JudoIdentifiable<ServiceCreateIssueInput>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>>;
  getRangeOnCreateIssueForIssueType(
    owner?: JudoIdentifiable<ServiceCreateIssueInput>,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceIssueTypeStored>>>;
}
