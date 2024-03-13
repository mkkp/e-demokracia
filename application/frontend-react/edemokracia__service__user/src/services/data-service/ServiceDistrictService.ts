//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import { JudoRestResponse, ServiceDistrict, ServiceDistrictQueryCustomizer, ServiceDistrictStored } from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceDistrict
 */
export interface ServiceDistrictService {
  getTemplate(): Promise<JudoRestResponse<ServiceDistrict>>;
  refresh(
    target: JudoIdentifiable<ServiceDistrict>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
  delete(target: JudoIdentifiable<ServiceDistrict>): Promise<JudoRestResponse<void>>;
  update(
    target: Partial<ServiceDistrictStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
  validateUpdate(
    target: Partial<ServiceDistrictStored>,
    queryCustomizer?: CommandQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
}
