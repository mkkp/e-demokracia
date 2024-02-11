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
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceCity.districts
 */
export interface ServiceCityServiceForDistricts {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
  getTemplate(): Promise<JudoRestResponse<ServiceDistrict>>;
  create(
    owner: JudoIdentifiable<ServiceCity>,
    target: ServiceDistrict,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
  validateCreate(
    owner: JudoIdentifiable<ServiceCity>,
    target: ServiceDistrict,
  ): Promise<JudoRestResponse<ServiceDistrict>>;
  delete(target: JudoIdentifiable<ServiceDistrict>): Promise<JudoRestResponse<void>>;
  update(target: Partial<ServiceDistrictStored>): Promise<JudoRestResponse<ServiceDistrictStored>>;
  validateUpdate(
    owner: JudoIdentifiable<ServiceCity>,
    target: Partial<ServiceDistrictStored>,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
}
