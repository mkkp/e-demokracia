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
  ServiceCountyStored,
  ServiceCountyQueryCustomizer,
  ServiceCounty,
  ServiceCityStored,
  ServiceCityQueryCustomizer,
} from '../data-api';

/**
 * Class Service for ServiceCounty
 */
export interface ServiceCountyService {
  getTemplate(): Promise<ServiceCounty>;

  refresh(
    target: JudoIdentifiable<ServiceCounty>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<ServiceCountyStored>;

  delete(target: JudoIdentifiable<ServiceCounty>): Promise<void>;

  update(target: Partial<ServiceCountyStored>): Promise<ServiceCountyStored>;

  getTemplateForCities(): Promise<ServiceCity>;

  createCities(
    owner: JudoIdentifiable<ServiceCounty>,
    target: JudoIdentifiable<ServiceCity>,
  ): Promise<ServiceCityStored>;

  getCities(
    target: JudoIdentifiable<ServiceCounty>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;

  getRangeForCities(
    owner?: JudoIdentifiable<ServiceCounty> | ServiceCounty,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;

  deleteCities(target: JudoIdentifiable<ServiceCity>): Promise<void>;
}
