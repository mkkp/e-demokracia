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
  ServiceDistrict,
  ServiceDistrictStored,
  ServiceCounty,
  ServiceCityStored,
  ServiceCityQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServiceCounty.cities
 */
export interface ServiceCountyServiceForCities {
  list(owner?: JudoIdentifiable<any>, queryCustomizer?: ServiceCityQueryCustomizer): Promise<Array<ServiceCityStored>>;
  refresh(owner?: JudoIdentifiable<any>, queryCustomizer?: ServiceCityQueryCustomizer): Promise<ServiceCityStored>;
  getTemplate(): Promise<ServiceCity>;
  create(owner: JudoIdentifiable<ServiceCounty>, target: ServiceCity): Promise<ServiceCityStored>;
  delete(target: JudoIdentifiable<ServiceCity>): Promise<void>;
  update(target: Partial<ServiceCityStored>): Promise<ServiceCityStored>;
  listDistricts(
    owner: JudoIdentifiable<ServiceCity>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
  getTemplateForDistricts(): Promise<ServiceDistrict>;
  createDistricts(owner: JudoIdentifiable<ServiceCity>, target: ServiceDistrict): Promise<ServiceDistrictStored>;
  deleteDistricts(target: JudoIdentifiable<ServiceDistrict>): Promise<void>;
  updateDistricts(
    owner: JudoIdentifiable<ServiceCity>,
    target: Partial<ServiceDistrictStored>,
  ): Promise<ServiceDistrictStored>;
}
