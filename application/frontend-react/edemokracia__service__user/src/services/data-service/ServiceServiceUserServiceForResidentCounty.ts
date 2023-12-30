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
  ServiceServiceUser,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceServiceUser.residentCounty
 */
export interface ServiceServiceUserServiceForResidentCounty {
  refresh(owner?: JudoIdentifiable<any>, queryCustomizer?: ServiceCountyQueryCustomizer): Promise<ServiceCountyStored>;
  getRangeForResidentCounty(
    owner: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;
  getTemplate(): Promise<ServiceCounty>;
  update(target: Partial<ServiceCountyStored>): Promise<ServiceCountyStored>;
  setResidentCounty(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: JudoIdentifiable<ServiceCounty>,
  ): Promise<void>;
  unsetResidentCounty(owner: JudoIdentifiable<ServiceServiceUser>): Promise<void>;
  listCities(
    owner: JudoIdentifiable<ServiceCounty>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;
  getTemplateForCities(): Promise<ServiceCity>;
  createCities(owner: JudoIdentifiable<ServiceCounty>, target: ServiceCity): Promise<ServiceCityStored>;
  deleteCities(target: JudoIdentifiable<ServiceCity>): Promise<void>;
  updateCities(owner: JudoIdentifiable<ServiceCounty>, target: Partial<ServiceCityStored>): Promise<ServiceCityStored>;
}
