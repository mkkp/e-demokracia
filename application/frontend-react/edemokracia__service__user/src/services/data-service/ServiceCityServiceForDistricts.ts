//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import { ServiceCity, ServiceDistrict, ServiceDistrictQueryCustomizer, ServiceDistrictStored } from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceCity.districts
 */
export interface ServiceCityServiceForDistricts {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored>;
  getTemplate(): Promise<ServiceDistrict>;
  create(owner: JudoIdentifiable<ServiceCity>, target: ServiceDistrict): Promise<ServiceDistrictStored>;
  delete(target: JudoIdentifiable<ServiceDistrict>): Promise<void>;
  update(target: Partial<ServiceDistrictStored>): Promise<ServiceDistrictStored>;
}
