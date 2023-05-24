//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import { AdminDistrict, AdminDistrictStored, AdminDistrictQueryCustomizer } from '../data-api';

/**
 * Class Service for AdminDistrict
 */
export interface AdminDistrictService {
  getTemplate(): Promise<AdminDistrict>;

  refresh(
    target: JudoIdentifiable<AdminDistrict>,
    queryCustomizer?: AdminDistrictQueryCustomizer,
  ): Promise<AdminDistrictStored>;

  delete(target: JudoIdentifiable<AdminDistrict>): Promise<void>;

  update(target: Partial<AdminDistrictStored>): Promise<AdminDistrictStored>;
}
