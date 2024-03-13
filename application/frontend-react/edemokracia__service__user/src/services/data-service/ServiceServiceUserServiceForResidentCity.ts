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
  ServiceServiceUser,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceServiceUser.residentCity
 */
export interface ServiceServiceUserServiceForResidentCity {
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
  getRangeForResidentCity(
    owner: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>>;
  getTemplate(): Promise<JudoRestResponse<ServiceCity>>;
  update(
    target: Partial<ServiceCityStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
  validateUpdate(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: Partial<ServiceCityStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
  setResidentCity(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: JudoIdentifiable<ServiceCity>,
  ): Promise<JudoRestResponse<void>>;
  unsetResidentCity(owner: JudoIdentifiable<ServiceServiceUser>): Promise<JudoRestResponse<void>>;
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
