//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import {
  JudoRestResponse,
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
  getTemplate(): Promise<JudoRestResponse<ServiceCounty>>;
  refresh(
    target: JudoIdentifiable<ServiceCounty>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceCountyStored>>;
  delete(target: JudoIdentifiable<ServiceCounty>): Promise<JudoRestResponse<void>>;
  update(target: Partial<ServiceCountyStored>): Promise<JudoRestResponse<ServiceCountyStored>>;
  validateUpdate(target: Partial<ServiceCountyStored>): Promise<JudoRestResponse<ServiceCountyStored>>;
  getTemplateForCities(): Promise<JudoRestResponse<ServiceCity>>;
  createCities(
    owner: JudoIdentifiable<ServiceCounty>,
    target: JudoIdentifiable<ServiceCity>,
  ): Promise<JudoRestResponse<ServiceCityStored>>;
  validateCreateCities(
    owner: JudoIdentifiable<ServiceCounty>,
    target: ServiceCity,
  ): Promise<JudoRestResponse<ServiceCity>>;
  listCities(
    target: JudoIdentifiable<ServiceCounty>,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>>;
  getRangeForCities(
    owner?: JudoIdentifiable<ServiceCounty> | ServiceCounty,
    queryCustomizer?: ServiceCityQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceCityStored>>>;
  deleteCities(target: JudoIdentifiable<ServiceCity>): Promise<JudoRestResponse<void>>;
}
