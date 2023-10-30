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
  ServiceDistrictStored,
  ServiceCountyStored,
  ServiceCounty,
  ServiceRatingVoteEntry,
  ServiceServiceUserQueryCustomizer,
  ServiceCityStored,
  ServiceSimpleVoteQueryCustomizer,
  ServiceCityQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServiceRatingVoteEntry.owner
 */
export interface ServiceRatingVoteEntryServiceForOwner {
  getOwner(owner: JudoIdentifiable<ServiceRatingVoteEntry>, mask?: string): Promise<ServiceServiceUserStored>;

  getRangeForVotes(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    queryCustomizer: ServiceSimpleVoteQueryCustomizer,
  ): Promise<Array<ServiceSimpleVoteStored>>;

  setVotes(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    target: JudoIdentifiable<ServiceSimpleVote>,
    selected: Array<JudoIdentifiable<ServiceSimpleVote>>,
  ): Promise<void>;

  addOwnerVotes(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    target: JudoIdentifiable<ServiceSimpleVote>,
    selected: Array<JudoIdentifiable<ServiceSimpleVote>>,
  ): Promise<void>;

  removeOwnerVotes(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    target: JudoIdentifiable<ServiceSimpleVote>,
    selected: Array<JudoIdentifiable<ServiceSimpleVote>>,
  ): Promise<void>;
  getRangeForActivityCounties(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;

  setActivityCounties(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<void>;

  addOwnerActivityCounties(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<void>;

  removeOwnerActivityCounties(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<void>;
  getRangeForResidentCounty(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;

  setResidentCounty(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<void>;

  unsetResidentCounty(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    target: JudoIdentifiable<ServiceCounty>,
  ): Promise<void>;

  getRangeForActivityCities(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;

  setActivityCities(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    target: JudoIdentifiable<ServiceCity>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;

  addOwnerActivityCities(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    target: JudoIdentifiable<ServiceCity>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;

  removeOwnerActivityCities(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    target: JudoIdentifiable<ServiceCity>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;
  getRangeForResidentCity(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;

  setResidentCity(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    target: JudoIdentifiable<ServiceCity>,
    selected: JudoIdentifiable<ServiceCity>,
  ): Promise<void>;

  unsetResidentCity(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    target: JudoIdentifiable<ServiceCity>,
  ): Promise<void>;

  getRangeForActivityDistricts(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;

  setActivityDistricts(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<void>;

  addOwnerActivityDistricts(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<void>;

  removeOwnerActivityDistricts(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<void>;
  getRangeForResidentDistrict(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;

  setResidentDistrict(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;

  unsetResidentDistrict(
    owner: JudoIdentifiable<ServiceRatingVoteEntry>,
    target: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;
}
