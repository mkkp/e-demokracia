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
  ServiceDistrictQueryCustomizer,
  CloseDebateOutputVoteDefinitionReferenceStored,
  ServiceCreateIssueInput,
  ServiceUserIssuesQueryCustomizer,
  ServiceIssueQueryCustomizer,
  ServiceCountyQueryCustomizer,
  ServiceIssueStored,
  ServiceUserIssues,
  ServiceIssue,
  ServiceIssueTypeQueryCustomizer,
  CreateCommentInput,
  ServiceDistrictStored,
  ServiceCountyStored,
  CreateArgumentInput,
  ServiceCityStored,
  CloseDebateInput,
  ServiceIssueTypeStored,
  ServiceCityQueryCustomizer,
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
  getRangeOnCreateIssueForIssueType(
    owner?: JudoIdentifiable<ServiceCreateIssueInput>,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
  ): Promise<Array<ServiceIssueTypeStored>>;
  getRangeOnCreateIssueForCounty(
    owner?: JudoIdentifiable<ServiceCreateIssueInput>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;
  getRangeOnCreateIssueForCity(
    owner?: JudoIdentifiable<ServiceCreateIssueInput>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;
  getRangeOnCreateIssueForDistrict(
    owner?: JudoIdentifiable<ServiceCreateIssueInput>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
}
