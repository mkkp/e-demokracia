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
  ServiceSelectAnswerVoteEntry,
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
 * Relation Service for ServiceSelectAnswerVoteEntry.owner
 */
export interface ServiceSelectAnswerVoteEntryServiceForOwner {
  getOwner(owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>, mask?: string): Promise<ServiceServiceUserStored>;

  getRangeForVotes(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    queryCustomizer: ServiceSimpleVoteQueryCustomizer,
  ): Promise<Array<ServiceSimpleVoteStored>>;

  setVotes(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: JudoIdentifiable<ServiceSimpleVote>,
    selected: Array<JudoIdentifiable<ServiceSimpleVote>>,
  ): Promise<void>;

  addOwnerVotes(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: JudoIdentifiable<ServiceSimpleVote>,
    selected: Array<JudoIdentifiable<ServiceSimpleVote>>,
  ): Promise<void>;

  removeOwnerVotes(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: JudoIdentifiable<ServiceSimpleVote>,
    selected: Array<JudoIdentifiable<ServiceSimpleVote>>,
  ): Promise<void>;
  getRangeForActivityCounties(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;

  setActivityCounties(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<void>;

  addOwnerActivityCounties(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<void>;

  removeOwnerActivityCounties(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<void>;
  getRangeForResidentCounty(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;

  setResidentCounty(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: JudoIdentifiable<ServiceCounty>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<void>;

  unsetResidentCounty(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: JudoIdentifiable<ServiceCounty>,
  ): Promise<void>;

  getRangeForActivityCities(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;

  setActivityCities(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: JudoIdentifiable<ServiceCity>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;

  addOwnerActivityCities(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: JudoIdentifiable<ServiceCity>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;

  removeOwnerActivityCities(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: JudoIdentifiable<ServiceCity>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;
  getRangeForResidentCity(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;

  setResidentCity(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: JudoIdentifiable<ServiceCity>,
    selected: JudoIdentifiable<ServiceCity>,
  ): Promise<void>;

  unsetResidentCity(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: JudoIdentifiable<ServiceCity>,
  ): Promise<void>;

  getRangeForActivityDistricts(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;

  setActivityDistricts(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<void>;

  addOwnerActivityDistricts(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<void>;

  removeOwnerActivityDistricts(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<void>;
  getRangeForResidentDistrict(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;

  setResidentDistrict(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: JudoIdentifiable<ServiceDistrict>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;

  unsetResidentDistrict(
    owner: JudoIdentifiable<ServiceSelectAnswerVoteEntry>,
    target: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;
}
