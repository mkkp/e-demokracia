//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceCity,
  ServiceDistrictQueryCustomizer,
  ServiceUserProfileStored,
  ServiceUserProfile,
  ServiceDistrict,
  ServiceDistrictStored,
  ServiceCountyStored,
  ServiceCountyQueryCustomizer,
  ServiceUserProfileQueryCustomizer,
  ServiceCounty,
  ServiceCityStored,
  ServiceCityQueryCustomizer,
} from '../data-api';

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
  getTemplateForActivityCities(): Promise<ServiceCity>;
  listActivityCounties(
    owner: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;
  getTemplateForActivityCounties(): Promise<ServiceCounty>;
  listActivityDistricts(
    owner: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
  getTemplateForActivityDistricts(): Promise<ServiceDistrict>;
  getResidentCity(
    owner: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<ServiceCityStored>;
  getTemplateForResidentCity(): Promise<ServiceCity>;
  getResidentCounty(
    owner: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<ServiceCountyStored>;
  getTemplateForResidentCounty(): Promise<ServiceCounty>;
  getResidentDistrict(
    owner: JudoIdentifiable<ServiceUserProfile>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored>;
  getTemplateForResidentDistrict(): Promise<ServiceDistrict>;
}
