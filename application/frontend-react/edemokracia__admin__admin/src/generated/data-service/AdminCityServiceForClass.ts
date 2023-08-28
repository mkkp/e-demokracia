//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminCityQueryCustomizer,
  AdminDistrict,
  AdminDistrictStored,
  AdminCityStored,
  AdminCity,
  AdminDistrictQueryCustomizer,
} from '../data-api';

/**
 * Class Service for AdminCity
 */
export interface AdminCityServiceForClass {
  getTemplate(): Promise<AdminCity>;

  refresh(target: JudoIdentifiable<AdminCity>, queryCustomizer?: AdminCityQueryCustomizer): Promise<AdminCityStored>;

  delete(target: JudoIdentifiable<AdminCity>): Promise<void>;

  update(target: Partial<AdminCityStored>): Promise<AdminCityStored>;

  getDistricts(
    target: JudoIdentifiable<AdminCity>,
    queryCustomizer?: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>>;

  getRangeForDistricts(
    owner?: JudoIdentifiable<AdminCity> | AdminCity,
    queryCustomizer?: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>>;
}
