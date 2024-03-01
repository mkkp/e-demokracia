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
  ServiceUserProfile,
  ServiceUserProfileQueryCustomizer,
  ServiceUserProfileStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for User.userProfile
 */
export interface UserServiceForUserProfile {
  refreshForUserProfile(
    queryCustomizer?: ServiceUserProfileQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceUserProfileStored>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceUserProfileQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceUserProfileStored>>;
  update(target: Partial<ServiceUserProfileStored>): Promise<JudoRestResponse<ServiceUserProfileStored>>;
  validateUpdate(target: Partial<ServiceUserProfileStored>): Promise<JudoRestResponse<ServiceUserProfileStored>>;
  listActivityCities(
    owner: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>>;
  getRangeForActivityCities(
    owner: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>>;
  getTemplateForActivityCities(): Promise<JudoRestResponse<ServiceCity>>;
  validateUpdateActivityCities(
    owner: JudoIdentifiable<ServiceUserProfile>,
    target: Partial<ServiceCityStored>,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
  setActivityCities(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<JudoRestResponse<void>>;
  addActivityCities(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<JudoRestResponse<void>>;
  removeActivityCities(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<JudoRestResponse<void>>;
  listActivityCounties(
    owner: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCountyStored>>>;
  getRangeForActivityCounties(
    owner: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCountyStored>>>;
  getTemplateForActivityCounties(): Promise<JudoRestResponse<ServiceCounty>>;
  validateUpdateActivityCounties(
    owner: JudoIdentifiable<ServiceUserProfile>,
    target: Partial<ServiceCountyStored>,
  ): Promise<JudoRestResponse<ServiceCountyStored>>;
  setActivityCounties(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<JudoRestResponse<void>>;
  addActivityCounties(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<JudoRestResponse<void>>;
  removeActivityCounties(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<JudoRestResponse<void>>;
  listActivityDistricts(
    owner: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>>;
  getRangeForActivityDistricts(
    owner: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>>;
  getTemplateForActivityDistricts(): Promise<JudoRestResponse<ServiceDistrict>>;
  validateUpdateActivityDistricts(
    owner: JudoIdentifiable<ServiceUserProfile>,
    target: Partial<ServiceDistrictStored>,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
  setActivityDistricts(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<JudoRestResponse<void>>;
  addActivityDistricts(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<JudoRestResponse<void>>;
  removeActivityDistricts(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<JudoRestResponse<void>>;
  getResidentCity(
    owner: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
  getRangeForResidentCity(
    owner: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>>;
  getTemplateForResidentCity(): Promise<JudoRestResponse<ServiceCity>>;
  validateUpdateResidentCity(
    owner: JudoIdentifiable<ServiceUserProfile>,
    target: Partial<ServiceCityStored>,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
  setResidentCity(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: JudoIdentifiable<ServiceCity>,
  ): Promise<JudoRestResponse<void>>;
  unsetResidentCity(
    owner: JudoIdentifiable<ServiceUserProfile>,
    target: JudoIdentifiable<ServiceCity>,
  ): Promise<JudoRestResponse<void>>;
  getResidentCounty(
    owner: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceCountyStored>>;
  getRangeForResidentCounty(
    owner: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCountyStored>>>;
  getTemplateForResidentCounty(): Promise<JudoRestResponse<ServiceCounty>>;
  validateUpdateResidentCounty(
    owner: JudoIdentifiable<ServiceUserProfile>,
    target: Partial<ServiceCountyStored>,
  ): Promise<JudoRestResponse<ServiceCountyStored>>;
  setResidentCounty(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<JudoRestResponse<void>>;
  unsetResidentCounty(
    owner: JudoIdentifiable<ServiceUserProfile>,
    target: JudoIdentifiable<ServiceCounty>,
  ): Promise<JudoRestResponse<void>>;
  getResidentDistrict(
    owner: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
  getRangeForResidentDistrict(
    owner: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>>;
  getTemplateForResidentDistrict(): Promise<JudoRestResponse<ServiceDistrict>>;
  validateUpdateResidentDistrict(
    owner: JudoIdentifiable<ServiceUserProfile>,
    target: Partial<ServiceDistrictStored>,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
  setResidentDistrict(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<JudoRestResponse<void>>;
  unsetResidentDistrict(
    owner: JudoIdentifiable<ServiceUserProfile>,
    target: JudoIdentifiable<ServiceDistrict>,
  ): Promise<JudoRestResponse<void>>;
}
