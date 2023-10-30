//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { ServiceDistrictQueryCustomizer, ServiceDistrict, ServiceDistrictStored } from '../data-api';

/**
 * Class Service for ServiceDistrict
 */
export interface ServiceDistrictServiceForClass {
  getTemplate(): Promise<ServiceDistrict>;

  refresh(
    target: JudoIdentifiable<ServiceDistrict>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored>;

  delete(target: JudoIdentifiable<ServiceDistrict>): Promise<void>;

  update(target: Partial<ServiceDistrictStored>): Promise<ServiceDistrictStored>;
}
