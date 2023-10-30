//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceCity,
  ServiceDistrictQueryCustomizer,
  ServiceDistrict,
  ServiceDistrictStored,
  ServiceCityStored,
  ServiceCityQueryCustomizer,
} from '../data-api';

/**
 * Class Service for ServiceCity
 */
export interface ServiceCityServiceForClass {
  getTemplate(): Promise<ServiceCity>;

  refresh(
    target: JudoIdentifiable<ServiceCity>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<ServiceCityStored>;

  delete(target: JudoIdentifiable<ServiceCity>): Promise<void>;

  update(target: Partial<ServiceCityStored>): Promise<ServiceCityStored>;

  getDistricts(
    target: JudoIdentifiable<ServiceCity>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;

  getRangeForDistricts(
    owner?: JudoIdentifiable<ServiceCity> | ServiceCity,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
}
