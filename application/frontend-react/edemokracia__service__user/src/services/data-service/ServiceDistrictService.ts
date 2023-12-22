//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import { ServiceDistrict, ServiceDistrictQueryCustomizer, ServiceDistrictStored } from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceDistrict
 */
export interface ServiceDistrictService {
  getTemplate(): Promise<ServiceDistrict>;
  refresh(
    target: JudoIdentifiable<ServiceDistrict>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored>;
  delete(target: JudoIdentifiable<ServiceDistrict>): Promise<void>;
  update(target: Partial<ServiceDistrictStored>): Promise<ServiceDistrictStored>;
}
