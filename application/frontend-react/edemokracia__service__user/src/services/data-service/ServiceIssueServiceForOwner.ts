//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceDistrictQueryCustomizer,
  ServiceDistrict,
  ServiceSimpleVote,
  ServiceCountyQueryCustomizer,
  ServiceServiceUserStored,
  ServiceIssue,
  ServiceServiceUser,
  ServiceSimpleVoteStored,
  ServiceCity,
  ServiceDistrictStored,
  ServiceCountyStored,
  ServiceCounty,
  ServiceServiceUserQueryCustomizer,
  ServiceCityStored,
  ServiceSimpleVoteQueryCustomizer,
  ServiceCityQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServiceIssue.owner
 */
export interface ServiceIssueServiceForOwner {
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;
  getRangeForOwner(
    owner: JudoIdentifiable<ServiceIssue> | ServiceIssue,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<Array<ServiceServiceUserStored>>;
  setOwner(owner: JudoIdentifiable<ServiceIssue>, selected: JudoIdentifiable<ServiceServiceUser>): Promise<void>;
  unsetOwner(owner: JudoIdentifiable<ServiceIssue>): Promise<void>;
  listVotes(
    owner: JudoIdentifiable<ServiceServiceUser>,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
  ): Promise<Array<ServiceSimpleVoteStored>>;
  getRangeForVotes(
    owner: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer: ServiceSimpleVoteQueryCustomizer,
  ): Promise<Array<ServiceSimpleVoteStored>>;
  setVotes(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceSimpleVote>>,
  ): Promise<void>;
  addVotes(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceSimpleVote>>,
  ): Promise<void>;
  removeVotes(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceSimpleVote>>,
  ): Promise<void>;
  listActivityCounties(
    owner: JudoIdentifiable<ServiceServiceUser>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;
  getRangeForActivityCounties(
    owner: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;
  getTemplateForActivityCounties(): Promise<ServiceCounty>;
  updateActivityCounties(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: Partial<ServiceCountyStored>,
  ): Promise<ServiceCountyStored>;
  setActivityCounties(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<void>;
  addActivityCounties(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<void>;
  removeActivityCounties(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<void>;
  getResidentCounty(
    owner: JudoIdentifiable<ServiceServiceUser>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<ServiceCountyStored>;
  getRangeForResidentCounty(
    owner: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;
  getTemplateForResidentCounty(): Promise<ServiceCounty>;
  updateResidentCounty(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: Partial<ServiceCountyStored>,
  ): Promise<ServiceCountyStored>;
  setResidentCounty(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<void>;
  unsetResidentCounty(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: JudoIdentifiable<ServiceCounty>,
  ): Promise<void>;
  listActivityCities(
    owner: JudoIdentifiable<ServiceServiceUser>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;
  getRangeForActivityCities(
    owner: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;
  getTemplateForActivityCities(): Promise<ServiceCity>;
  updateActivityCities(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: Partial<ServiceCityStored>,
  ): Promise<ServiceCityStored>;
  setActivityCities(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;
  addActivityCities(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;
  removeActivityCities(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;
  getResidentCity(
    owner: JudoIdentifiable<ServiceServiceUser>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<ServiceCityStored>;
  getRangeForResidentCity(
    owner: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;
  getTemplateForResidentCity(): Promise<ServiceCity>;
  updateResidentCity(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: Partial<ServiceCityStored>,
  ): Promise<ServiceCityStored>;
  setResidentCity(owner: JudoIdentifiable<ServiceServiceUser>, selected: JudoIdentifiable<ServiceCity>): Promise<void>;
  unsetResidentCity(owner: JudoIdentifiable<ServiceServiceUser>, target: JudoIdentifiable<ServiceCity>): Promise<void>;
  listActivityDistricts(
    owner: JudoIdentifiable<ServiceServiceUser>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
  getRangeForActivityDistricts(
    owner: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
  getTemplateForActivityDistricts(): Promise<ServiceDistrict>;
  updateActivityDistricts(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: Partial<ServiceDistrictStored>,
  ): Promise<ServiceDistrictStored>;
  setActivityDistricts(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<void>;
  addActivityDistricts(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<void>;
  removeActivityDistricts(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<void>;
  getResidentDistrict(
    owner: JudoIdentifiable<ServiceServiceUser>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored>;
  getRangeForResidentDistrict(
    owner: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
  getTemplateForResidentDistrict(): Promise<ServiceDistrict>;
  updateResidentDistrict(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: Partial<ServiceDistrictStored>,
  ): Promise<ServiceDistrictStored>;
  setResidentDistrict(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;
  unsetResidentDistrict(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;
}
