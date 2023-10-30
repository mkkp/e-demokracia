//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
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
  ServiceServiceUser,
  ServiceSimpleVoteStored,
  ServiceCity,
  ServiceIssueCategory,
  ServiceDistrictStored,
  ServiceCountyStored,
  ServiceCounty,
  ServiceServiceUserQueryCustomizer,
  ServiceCityStored,
  ServiceSimpleVoteQueryCustomizer,
  ServiceCityQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServiceIssueCategory.owner
 */
export interface ServiceIssueCategoryServiceForOwner {
  getOwner(owner: JudoIdentifiable<ServiceIssueCategory>, mask?: string): Promise<ServiceServiceUserStored>;

  getRangeForVotes(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    queryCustomizer: ServiceSimpleVoteQueryCustomizer,
  ): Promise<Array<ServiceSimpleVoteStored>>;

  setVotes(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: JudoIdentifiable<ServiceSimpleVote>,
    selected: Array<JudoIdentifiable<ServiceSimpleVote>>,
  ): Promise<void>;

  addOwnerVotes(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: JudoIdentifiable<ServiceSimpleVote>,
    selected: Array<JudoIdentifiable<ServiceSimpleVote>>,
  ): Promise<void>;

  removeOwnerVotes(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: JudoIdentifiable<ServiceSimpleVote>,
    selected: Array<JudoIdentifiable<ServiceSimpleVote>>,
  ): Promise<void>;
  getRangeForActivityCounties(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;

  setActivityCounties(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<void>;

  addOwnerActivityCounties(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<void>;

  removeOwnerActivityCounties(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<void>;
  getRangeForResidentCounty(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;

  setResidentCounty(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<void>;

  unsetResidentCounty(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: JudoIdentifiable<ServiceCounty>,
  ): Promise<void>;

  getRangeForActivityCities(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;

  setActivityCities(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: JudoIdentifiable<ServiceCity>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;

  addOwnerActivityCities(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: JudoIdentifiable<ServiceCity>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;

  removeOwnerActivityCities(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: JudoIdentifiable<ServiceCity>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;
  getRangeForResidentCity(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;

  setResidentCity(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: JudoIdentifiable<ServiceCity>,
    selected: JudoIdentifiable<ServiceCity>,
  ): Promise<void>;

  unsetResidentCity(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: JudoIdentifiable<ServiceCity>,
  ): Promise<void>;

  getRangeForActivityDistricts(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;

  setActivityDistricts(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<void>;

  addOwnerActivityDistricts(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<void>;

  removeOwnerActivityDistricts(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<void>;
  getRangeForResidentDistrict(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;

  setResidentDistrict(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;

  unsetResidentDistrict(
    owner: JudoIdentifiable<ServiceIssueCategory>,
    target: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;
}
