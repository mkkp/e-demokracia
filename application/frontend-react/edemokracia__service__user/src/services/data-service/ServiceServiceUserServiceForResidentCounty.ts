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
  ServiceServiceUser,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceServiceUser.residentCounty
 */
export interface ServiceServiceUserServiceForResidentCounty {
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceCountyStored>>;
  getRangeForResidentCounty(
    owner: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCountyStored>>>;
  getTemplate(): Promise<JudoRestResponse<ServiceCounty>>;
  update(
    target: Partial<ServiceCountyStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCountyStored>>;
  validateUpdate(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: Partial<ServiceCountyStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCountyStored>>;
  setResidentCounty(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<JudoRestResponse<void>>;
  unsetResidentCounty(owner: JudoIdentifiable<ServiceServiceUser>): Promise<JudoRestResponse<void>>;
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
  validateUpdateCities(
    owner: JudoIdentifiable<ServiceCounty>,
    target: Partial<ServiceCityStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
}
