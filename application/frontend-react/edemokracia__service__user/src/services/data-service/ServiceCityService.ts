//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceCity
 */
export interface ServiceCityService {
  getTemplate(): Promise<ServiceCity>;
  refresh(
    target: JudoIdentifiable<ServiceCity>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<ServiceCityStored>;
  delete(target: JudoIdentifiable<ServiceCity>): Promise<void>;
  update(target: Partial<ServiceCityStored>): Promise<ServiceCityStored>;
  validateUpdate(target: Partial<ServiceCityStored>): Promise<ServiceCityStored>;
  getTemplateForDistricts(): Promise<ServiceDistrict>;
  createDistricts(
    owner: JudoIdentifiable<ServiceCity>,
    target: JudoIdentifiable<ServiceDistrict>,
  ): Promise<ServiceDistrictStored>;
  validateCreateDistricts(owner: JudoIdentifiable<ServiceCity>, target: ServiceDistrict): Promise<ServiceDistrict>;
  listDistricts(
    target: JudoIdentifiable<ServiceCity>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
  getRangeForDistricts(
    owner?: JudoIdentifiable<ServiceCity> | ServiceCity,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
  deleteDistricts(target: JudoIdentifiable<ServiceDistrict>): Promise<void>;
}
