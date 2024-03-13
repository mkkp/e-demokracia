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
  ServiceUserProfile,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceUserProfile.activityCounties
 */
export interface ServiceUserProfileServiceForActivityCounties {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCountyStored>>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceCountyStored>>;
  getRangeForActivityCounties(
    owner: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCountyStored>>>;
  getTemplate(): Promise<JudoRestResponse<ServiceCounty>>;
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
  listCities(
    owner: JudoIdentifiable<ServiceCounty>,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>>;
  getTemplateForCities(): Promise<JudoRestResponse<ServiceCity>>;
  createCities(
    owner: JudoIdentifiable<ServiceCounty>,
    target: ServiceCity,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
  deleteCities(target: JudoIdentifiable<ServiceCity>): Promise<JudoRestResponse<void>>;
  updateCities(
    owner: JudoIdentifiable<ServiceCounty>,
    target: Partial<ServiceCityStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
}
