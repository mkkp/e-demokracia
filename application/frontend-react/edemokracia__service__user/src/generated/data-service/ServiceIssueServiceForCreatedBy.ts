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
 * Relation Service for ServiceIssue.createdBy
 */
export interface ServiceIssueServiceForCreatedBy {
  getCreatedBy(owner: JudoIdentifiable<ServiceIssue>, mask?: string): Promise<ServiceServiceUserStored>;

  getRangeForVotes(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer: ServiceSimpleVoteQueryCustomizer,
  ): Promise<Array<ServiceSimpleVoteStored>>;

  setVotes(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceSimpleVote>,
    selected: Array<JudoIdentifiable<ServiceSimpleVote>>,
  ): Promise<void>;

  addCreatedByVotes(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceSimpleVote>,
    selected: Array<JudoIdentifiable<ServiceSimpleVote>>,
  ): Promise<void>;

  removeCreatedByVotes(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceSimpleVote>,
    selected: Array<JudoIdentifiable<ServiceSimpleVote>>,
  ): Promise<void>;
  getRangeForActivityCounties(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;

  setActivityCounties(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<void>;

  addCreatedByActivityCounties(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<void>;

  removeCreatedByActivityCounties(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<void>;
  getRangeForResidentCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;

  setResidentCounty(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<void>;

  unsetResidentCounty(owner: JudoIdentifiable<ServiceIssue>, target: JudoIdentifiable<ServiceCounty>): Promise<void>;

  getRangeForActivityCities(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;

  setActivityCities(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceCity>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;

  addCreatedByActivityCities(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceCity>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;

  removeCreatedByActivityCities(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceCity>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;
  getRangeForResidentCity(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;

  setResidentCity(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceCity>,
    selected: JudoIdentifiable<ServiceCity>,
  ): Promise<void>;

  unsetResidentCity(owner: JudoIdentifiable<ServiceIssue>, target: JudoIdentifiable<ServiceCity>): Promise<void>;

  getRangeForActivityDistricts(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;

  setActivityDistricts(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<void>;

  addCreatedByActivityDistricts(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<void>;

  removeCreatedByActivityDistricts(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<void>;
  getRangeForResidentDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;

  setResidentDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;

  unsetResidentDistrict(
    owner: JudoIdentifiable<ServiceIssue>,
    target: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;
}
