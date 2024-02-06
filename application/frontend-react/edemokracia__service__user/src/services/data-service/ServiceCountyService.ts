//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

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
  validateUpdate(target: Partial<ServiceCountyStored>): Promise<ServiceCountyStored>;
  getTemplateForCities(): Promise<ServiceCity>;
  createCities(
    owner: JudoIdentifiable<ServiceCounty>,
    target: JudoIdentifiable<ServiceCity>,
  ): Promise<ServiceCityStored>;
  validateCreateCities(owner: JudoIdentifiable<ServiceCounty>, target: ServiceCity): Promise<ServiceCity>;
  listCities(
    target: JudoIdentifiable<ServiceCounty>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;
  getRangeForCities(
    owner?: JudoIdentifiable<ServiceCounty> | ServiceCounty,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;
  deleteCities(target: JudoIdentifiable<ServiceCity>): Promise<void>;
}
