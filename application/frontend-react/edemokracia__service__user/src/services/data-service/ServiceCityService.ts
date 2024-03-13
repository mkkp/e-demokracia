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
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceCity
 */
export interface ServiceCityService {
  getTemplate(): Promise<JudoRestResponse<ServiceCity>>;
  refresh(
    target: JudoIdentifiable<ServiceCity>,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
  delete(target: JudoIdentifiable<ServiceCity>): Promise<JudoRestResponse<void>>;
  update(
    target: Partial<ServiceCityStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
  validateUpdate(
    target: Partial<ServiceCityStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
  getTemplateForDistricts(): Promise<JudoRestResponse<ServiceDistrict>>;
  createDistricts(
    owner: JudoIdentifiable<ServiceCity>,
    target: JudoIdentifiable<ServiceDistrict>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
  validateCreateDistricts(
    owner: JudoIdentifiable<ServiceCity>,
    target: ServiceDistrict,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceDistrict>>;
  listDistricts(
    target: JudoIdentifiable<ServiceCity>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>>;
  getRangeForDistricts(
    owner?: JudoIdentifiable<ServiceCity> | ServiceCity,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>>;
  deleteDistricts(target: JudoIdentifiable<ServiceDistrict>): Promise<JudoRestResponse<void>>;
}
