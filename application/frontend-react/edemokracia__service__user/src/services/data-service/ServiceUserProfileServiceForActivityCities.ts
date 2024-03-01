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
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceUserProfile,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceUserProfile.activityCities
 */
export interface ServiceUserProfileServiceForActivityCities {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
  getRangeForActivityCities(
    owner: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>>;
  getTemplate(): Promise<JudoRestResponse<ServiceCity>>;
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
  listDistricts(
    owner: JudoIdentifiable<ServiceCity>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>>;
  getTemplateForDistricts(): Promise<JudoRestResponse<ServiceDistrict>>;
  createDistricts(
    owner: JudoIdentifiable<ServiceCity>,
    target: ServiceDistrict,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
  deleteDistricts(target: JudoIdentifiable<ServiceDistrict>): Promise<JudoRestResponse<void>>;
  updateDistricts(
    owner: JudoIdentifiable<ServiceCity>,
    target: Partial<ServiceDistrictStored>,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
}
