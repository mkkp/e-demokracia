//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import {
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
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceServiceUser
 */
export interface ServiceServiceUserService {
  refresh(
    target: JudoIdentifiable<ServiceServiceUser>,
    queryCustomizer?: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored>;
  update(target: Partial<ServiceServiceUserStored>): Promise<ServiceServiceUserStored>;
  validateUpdate(target: Partial<ServiceServiceUserStored>): Promise<ServiceServiceUserStored>;
  getTemplateForActivityCities(): Promise<ServiceCity>;
  listActivityCities(
    target: JudoIdentifiable<ServiceServiceUser>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;
  getRangeForActivityCities(
    owner?: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;
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
  getTemplateForActivityCounties(): Promise<ServiceCounty>;
  listActivityCounties(
    target: JudoIdentifiable<ServiceServiceUser>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;
  getRangeForActivityCounties(
    owner?: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;
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
  getTemplateForActivityDistricts(): Promise<ServiceDistrict>;
  listActivityDistricts(
    target: JudoIdentifiable<ServiceServiceUser>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
  getRangeForActivityDistricts(
    owner?: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
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
  getTemplateForResidentCity(): Promise<ServiceCity>;
  getResidentCity(
    target: JudoIdentifiable<ServiceServiceUser>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<ServiceCityStored>;
  getRangeForResidentCity(
    owner?: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;
  setResidentCity(owner: JudoIdentifiable<ServiceServiceUser>, selected: JudoIdentifiable<ServiceCity>): Promise<void>;
  unsetResidentCity(owner: JudoIdentifiable<ServiceServiceUser>): Promise<void>;
  getTemplateForResidentCounty(): Promise<ServiceCounty>;
  getResidentCounty(
    target: JudoIdentifiable<ServiceServiceUser>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<ServiceCountyStored>;
  getRangeForResidentCounty(
    owner?: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;
  setResidentCounty(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<void>;
  unsetResidentCounty(owner: JudoIdentifiable<ServiceServiceUser>): Promise<void>;
  getTemplateForResidentDistrict(): Promise<ServiceDistrict>;
  getResidentDistrict(
    target: JudoIdentifiable<ServiceServiceUser>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored>;
  getRangeForResidentDistrict(
    owner?: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
  setResidentDistrict(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;
  unsetResidentDistrict(owner: JudoIdentifiable<ServiceServiceUser>): Promise<void>;
  listVotes(
    target: JudoIdentifiable<ServiceServiceUser>,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
  ): Promise<Array<ServiceSimpleVoteStored>>;
  getRangeForVotes(
    owner?: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer?: ServiceSimpleVoteQueryCustomizer,
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
}
