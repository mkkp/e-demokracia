//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

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
  ServiceUserProfile,
  ServiceUserProfileQueryCustomizer,
  ServiceUserProfileStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for User.userProfile
 */
export interface UserServiceForUserProfile {
  refreshForUserProfile(queryCustomizer?: ServiceUserProfileQueryCustomizer): Promise<ServiceUserProfileStored>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceUserProfileQueryCustomizer,
  ): Promise<ServiceUserProfileStored>;
  listActivityCities(
    owner: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;
  getRangeForActivityCities(
    owner: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;
  getTemplateForActivityCities(): Promise<ServiceCity>;
  addActivityCities(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;
  removeActivityCities(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;
  listActivityCounties(
    owner: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;
  getRangeForActivityCounties(
    owner: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;
  getTemplateForActivityCounties(): Promise<ServiceCounty>;
  addActivityCounties(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<void>;
  removeActivityCounties(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceCounty>>,
  ): Promise<void>;
  listActivityDistricts(
    owner: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
  getRangeForActivityDistricts(
    owner: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
  getTemplateForActivityDistricts(): Promise<ServiceDistrict>;
  addActivityDistricts(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<void>;
  removeActivityDistricts(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceDistrict>>,
  ): Promise<void>;
  getResidentCity(
    owner: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<ServiceCityStored>;
  getRangeForResidentCity(
    owner: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;
  getTemplateForResidentCity(): Promise<ServiceCity>;
  setResidentCity(owner: JudoIdentifiable<ServiceUserProfile>, selected: JudoIdentifiable<ServiceCity>): Promise<void>;
  unsetResidentCity(owner: JudoIdentifiable<ServiceUserProfile>, target: JudoIdentifiable<ServiceCity>): Promise<void>;
  getResidentCounty(
    owner: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<ServiceCountyStored>;
  getRangeForResidentCounty(
    owner: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;
  getTemplateForResidentCounty(): Promise<ServiceCounty>;
  setResidentCounty(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<void>;
  unsetResidentCounty(
    owner: JudoIdentifiable<ServiceUserProfile>,
    target: JudoIdentifiable<ServiceCounty>,
  ): Promise<void>;
  getResidentDistrict(
    owner: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored>;
  getRangeForResidentDistrict(
    owner: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
  getTemplateForResidentDistrict(): Promise<ServiceDistrict>;
  setResidentDistrict(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;
  unsetResidentDistrict(
    owner: JudoIdentifiable<ServiceUserProfile>,
    target: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;
}
