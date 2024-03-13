//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  JudoRestResponse,
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceSimpleVote,
  ServiceSimpleVoteQueryCustomizer,
  ServiceSimpleVoteStored,
  ServiceYesNoVoteDefinition,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceYesNoVoteDefinition.owner
 */
export interface ServiceYesNoVoteDefinitionServiceForOwner {
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceServiceUserStored>>;
  getRangeForOwner(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition> | ServiceYesNoVoteDefinition,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceServiceUserStored>>>;
  setOwner(
    owner: JudoIdentifiable<ServiceYesNoVoteDefinition>,
    selected: JudoIdentifiable<ServiceServiceUser>,
  ): Promise<JudoRestResponse<void>>;
  unsetOwner(owner: JudoIdentifiable<ServiceYesNoVoteDefinition>): Promise<JudoRestResponse<void>>;
  listActivityCities(
    owner: JudoIdentifiable<ServiceServiceUser>,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>>;
  getRangeForActivityCities(
    owner: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>>;
  getTemplateForActivityCities(): Promise<JudoRestResponse<ServiceCity>>;
  updateActivityCities(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: Partial<ServiceCityStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
  setActivityCities(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<JudoRestResponse<void>>;
  addActivityCities(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<JudoRestResponse<void>>;
  removeActivityCities(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<JudoRestResponse<void>>;
  listActivityCounties(
    owner: JudoIdentifiable<ServiceServiceUser>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCountyStored>>>;
  getRangeForActivityCounties(
    owner: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCountyStored>>>;
  getTemplateForActivityCounties(): Promise<JudoRestResponse<ServiceCounty>>;
  updateActivityCounties(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: Partial<ServiceCountyStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCountyStored>>;
  setActivityCounties(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<JudoRestResponse<void>>;
  addActivityCounties(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<JudoRestResponse<void>>;
  removeActivityCounties(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<JudoRestResponse<void>>;
  listActivityDistricts(
    owner: JudoIdentifiable<ServiceServiceUser>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>>;
  getRangeForActivityDistricts(
    owner: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>>;
  getTemplateForActivityDistricts(): Promise<JudoRestResponse<ServiceDistrict>>;
  updateActivityDistricts(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: Partial<ServiceDistrictStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
  setActivityDistricts(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<JudoRestResponse<void>>;
  addActivityDistricts(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<JudoRestResponse<void>>;
  removeActivityDistricts(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<JudoRestResponse<void>>;
  getResidentCity(
    owner: JudoIdentifiable<ServiceServiceUser>,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
  getRangeForResidentCity(
    owner: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>>;
  getTemplateForResidentCity(): Promise<JudoRestResponse<ServiceCity>>;
  updateResidentCity(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: Partial<ServiceCityStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
  setResidentCity(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: JudoIdentifiable<ServiceCity>,
  ): Promise<JudoRestResponse<void>>;
  unsetResidentCity(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: JudoIdentifiable<ServiceCity>,
  ): Promise<JudoRestResponse<void>>;
  getResidentCounty(
    owner: JudoIdentifiable<ServiceServiceUser>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceCountyStored>>;
  getRangeForResidentCounty(
    owner: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCountyStored>>>;
  getTemplateForResidentCounty(): Promise<JudoRestResponse<ServiceCounty>>;
  updateResidentCounty(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: Partial<ServiceCountyStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCountyStored>>;
  setResidentCounty(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<JudoRestResponse<void>>;
  unsetResidentCounty(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: JudoIdentifiable<ServiceCounty>,
  ): Promise<JudoRestResponse<void>>;
  getResidentDistrict(
    owner: JudoIdentifiable<ServiceServiceUser>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
  getRangeForResidentDistrict(
    owner: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>>;
  getTemplateForResidentDistrict(): Promise<JudoRestResponse<ServiceDistrict>>;
  updateResidentDistrict(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: Partial<ServiceDistrictStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
  setResidentDistrict(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<JudoRestResponse<void>>;
  unsetResidentDistrict(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: JudoIdentifiable<ServiceDistrict>,
  ): Promise<JudoRestResponse<void>>;
  listVotes(
    owner: JudoIdentifiable<ServiceServiceUser>,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceSimpleVoteStored>>>;
  getRangeForVotes(
    owner: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer: ServiceSimpleVoteQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceSimpleVoteStored>>>;
  setVotes(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceSimpleVote>>,
  ): Promise<JudoRestResponse<void>>;
  addVotes(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceSimpleVote>>,
  ): Promise<JudoRestResponse<void>>;
  removeVotes(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceSimpleVote>>,
  ): Promise<JudoRestResponse<void>>;
}
