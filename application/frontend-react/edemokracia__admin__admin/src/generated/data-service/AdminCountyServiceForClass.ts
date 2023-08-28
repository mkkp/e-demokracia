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
  AdminCountyQueryCustomizer,
  AdminCounty,
  AdminCountyStored,
  AdminCityStored,
  AdminCity,
} from '../data-api';

/**
 * Class Service for AdminCounty
 */
export interface AdminCountyServiceForClass {
  getTemplate(): Promise<AdminCounty>;

  refresh(
    target: JudoIdentifiable<AdminCounty>,
    queryCustomizer?: AdminCountyQueryCustomizer,
  ): Promise<AdminCountyStored>;

  delete(target: JudoIdentifiable<AdminCounty>): Promise<void>;

  update(target: Partial<AdminCountyStored>): Promise<AdminCountyStored>;

  getCities(
    target: JudoIdentifiable<AdminCounty>,
    queryCustomizer?: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>>;

  getRangeForCities(
    owner?: JudoIdentifiable<AdminCounty> | AdminCounty,
    queryCustomizer?: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>>;
}
