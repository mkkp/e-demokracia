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
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceCounty.cities
 */
export interface ServiceCountyServiceForCities {
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
  getTemplate(): Promise<JudoRestResponse<ServiceCity>>;
  create(
    owner: JudoIdentifiable<ServiceCounty>,
    target: ServiceCity,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
  validateCreate(
    owner: JudoIdentifiable<ServiceCounty>,
    target: ServiceCity,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCity>>;
  delete(target: JudoIdentifiable<ServiceCity>): Promise<JudoRestResponse<void>>;
  update(
    target: Partial<ServiceCityStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
  validateUpdate(
    owner: JudoIdentifiable<ServiceCounty>,
    target: Partial<ServiceCityStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
  listDistricts(
    owner: JudoIdentifiable<ServiceCity>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>>;
  getTemplateForDistricts(): Promise<JudoRestResponse<ServiceDistrict>>;
  createDistricts(
    owner: JudoIdentifiable<ServiceCity>,
    target: ServiceDistrict,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
  validateCreateDistricts(
    owner: JudoIdentifiable<ServiceCity>,
    target: ServiceDistrict,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceDistrict>>;
  deleteDistricts(target: JudoIdentifiable<ServiceDistrict>): Promise<JudoRestResponse<void>>;
  updateDistricts(
    owner: JudoIdentifiable<ServiceCity>,
    target: Partial<ServiceDistrictStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
  validateUpdateDistricts(
    owner: JudoIdentifiable<ServiceCity>,
    target: Partial<ServiceDistrictStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
}
