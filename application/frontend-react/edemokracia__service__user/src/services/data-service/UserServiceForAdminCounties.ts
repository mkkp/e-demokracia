//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

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
 * Relation Service for User.adminCounties
 */
export interface UserServiceForAdminCounties {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;
  refresh(owner?: JudoIdentifiable<any>, queryCustomizer?: ServiceCountyQueryCustomizer): Promise<ServiceCountyStored>;
  getTemplate(): Promise<ServiceCounty>;
  create(target: ServiceCounty): Promise<ServiceCountyStored>;
  validateCreate(target: ServiceCounty): Promise<ServiceCounty>;
  delete(target: JudoIdentifiable<ServiceCounty>): Promise<void>;
  update(target: Partial<ServiceCountyStored>): Promise<ServiceCountyStored>;
  validateUpdate(target: Partial<ServiceCountyStored>): Promise<ServiceCountyStored>;
  listCities(
    owner: JudoIdentifiable<ServiceCounty>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;
  getTemplateForCities(): Promise<ServiceCity>;
  createCities(owner: JudoIdentifiable<ServiceCounty>, target: ServiceCity): Promise<ServiceCityStored>;
  validateCreateCities(owner: JudoIdentifiable<ServiceCounty>, target: ServiceCity): Promise<ServiceCity>;
  deleteCities(target: JudoIdentifiable<ServiceCity>): Promise<void>;
  updateCities(owner: JudoIdentifiable<ServiceCounty>, target: Partial<ServiceCityStored>): Promise<ServiceCityStored>;
  validateUpdateCities(
    owner: JudoIdentifiable<ServiceCounty>,
    target: Partial<ServiceCityStored>,
  ): Promise<ServiceCityStored>;
}
