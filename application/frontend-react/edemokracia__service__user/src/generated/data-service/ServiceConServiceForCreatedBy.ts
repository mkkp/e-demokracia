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
  ServiceCon,
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
 * Relation Service for ServiceCon.createdBy
 */
export interface ServiceConServiceForCreatedBy {
  getCreatedBy(owner: JudoIdentifiable<ServiceCon>, mask?: string): Promise<ServiceServiceUserStored>;

  getRangeForVotes(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer: ServiceSimpleVoteQueryCustomizer,
  ): Promise<Array<ServiceSimpleVoteStored>>;

  setVotes(
    owner: JudoIdentifiable<ServiceCon>,
    target: JudoIdentifiable<ServiceSimpleVote>,
    selected: Array<JudoIdentifiable<ServiceSimpleVote>>,
  ): Promise<void>;

  addCreatedByVotes(
    owner: JudoIdentifiable<ServiceCon>,
    target: JudoIdentifiable<ServiceSimpleVote>,
    selected: Array<JudoIdentifiable<ServiceSimpleVote>>,
  ): Promise<void>;

  removeCreatedByVotes(
    owner: JudoIdentifiable<ServiceCon>,
    target: JudoIdentifiable<ServiceSimpleVote>,
    selected: Array<JudoIdentifiable<ServiceSimpleVote>>,
  ): Promise<void>;
  getRangeForActivityCounties(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;

  setActivityCounties(
    owner: JudoIdentifiable<ServiceCon>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<void>;

  addCreatedByActivityCounties(
    owner: JudoIdentifiable<ServiceCon>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<void>;

  removeCreatedByActivityCounties(
    owner: JudoIdentifiable<ServiceCon>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<void>;
  getRangeForResidentCounty(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;

  setResidentCounty(
    owner: JudoIdentifiable<ServiceCon>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<void>;

  unsetResidentCounty(owner: JudoIdentifiable<ServiceCon>, target: JudoIdentifiable<ServiceCounty>): Promise<void>;

  getRangeForActivityCities(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;

  setActivityCities(
    owner: JudoIdentifiable<ServiceCon>,
    target: JudoIdentifiable<ServiceCity>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;

  addCreatedByActivityCities(
    owner: JudoIdentifiable<ServiceCon>,
    target: JudoIdentifiable<ServiceCity>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;

  removeCreatedByActivityCities(
    owner: JudoIdentifiable<ServiceCon>,
    target: JudoIdentifiable<ServiceCity>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;
  getRangeForResidentCity(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;

  setResidentCity(
    owner: JudoIdentifiable<ServiceCon>,
    target: JudoIdentifiable<ServiceCity>,
    selected: JudoIdentifiable<ServiceCity>,
  ): Promise<void>;

  unsetResidentCity(owner: JudoIdentifiable<ServiceCon>, target: JudoIdentifiable<ServiceCity>): Promise<void>;

  getRangeForActivityDistricts(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;

  setActivityDistricts(
    owner: JudoIdentifiable<ServiceCon>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<void>;

  addCreatedByActivityDistricts(
    owner: JudoIdentifiable<ServiceCon>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<void>;

  removeCreatedByActivityDistricts(
    owner: JudoIdentifiable<ServiceCon>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<void>;
  getRangeForResidentDistrict(
    owner: JudoIdentifiable<ServiceCon>,
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;

  setResidentDistrict(
    owner: JudoIdentifiable<ServiceCon>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;

  unsetResidentDistrict(owner: JudoIdentifiable<ServiceCon>, target: JudoIdentifiable<ServiceDistrict>): Promise<void>;
}
