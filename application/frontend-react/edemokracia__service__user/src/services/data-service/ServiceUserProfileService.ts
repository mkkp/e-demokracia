//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

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
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceUserProfile
 */
export interface ServiceUserProfileService {
  refresh(
    target: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceUserProfileQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceUserProfileStored>>;
  update(
    target: Partial<ServiceUserProfileStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceUserProfileStored>>;
  validateUpdate(
    target: Partial<ServiceUserProfileStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceUserProfileStored>>;
  getTemplateForActivityCities(): Promise<JudoRestResponse<ServiceCity>>;
  listActivityCities(
    target: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>>;
  getRangeForActivityCities(
    owner?: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>>;
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
  getTemplateForActivityCounties(): Promise<JudoRestResponse<ServiceCounty>>;
  listActivityCounties(
    target: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCountyStored>>>;
  getRangeForActivityCounties(
    owner?: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCountyStored>>>;
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
  getTemplateForActivityDistricts(): Promise<JudoRestResponse<ServiceDistrict>>;
  listActivityDistricts(
    target: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>>;
  getRangeForActivityDistricts(
    owner?: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>>;
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
  getTemplateForResidentCity(): Promise<JudoRestResponse<ServiceCity>>;
  getResidentCity(
    target: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
  getRangeForResidentCity(
    owner?: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>>;
  setResidentCity(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: JudoIdentifiable<ServiceCity>,
  ): Promise<JudoRestResponse<void>>;
  unsetResidentCity(owner: JudoIdentifiable<ServiceUserProfile>): Promise<JudoRestResponse<void>>;
  getTemplateForResidentCounty(): Promise<JudoRestResponse<ServiceCounty>>;
  getResidentCounty(
    target: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceCountyStored>>;
  getRangeForResidentCounty(
    owner?: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCountyStored>>>;
  setResidentCounty(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<JudoRestResponse<void>>;
  unsetResidentCounty(owner: JudoIdentifiable<ServiceUserProfile>): Promise<JudoRestResponse<void>>;
  getTemplateForResidentDistrict(): Promise<JudoRestResponse<ServiceDistrict>>;
  getResidentDistrict(
    target: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
  getRangeForResidentDistrict(
    owner?: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>>;
  setResidentDistrict(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<JudoRestResponse<void>>;
  unsetResidentDistrict(owner: JudoIdentifiable<ServiceUserProfile>): Promise<JudoRestResponse<void>>;
}
