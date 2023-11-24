//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceCity,
  ServiceUserProfile,
  ServiceCountyStored,
  ServiceCountyQueryCustomizer,
  ServiceCounty,
  ServiceCityStored,
  ServiceCityQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServiceUserProfile.residentCounty
 */
export interface ServiceUserProfileServiceForResidentCounty {
  refresh(owner?: JudoIdentifiable<any>, queryCustomizer?: ServiceCountyQueryCustomizer): Promise<ServiceCountyStored>;
  getTemplate(): Promise<ServiceCounty>;
  listCities(
    owner: JudoIdentifiable<ServiceCounty>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;
  getTemplateForCities(): Promise<ServiceCity>;
  createCities(owner: JudoIdentifiable<ServiceCounty>, target: ServiceCity): Promise<ServiceCityStored>;
  deleteCities(target: JudoIdentifiable<ServiceCity>): Promise<void>;
  updateCities(owner: JudoIdentifiable<ServiceCounty>, target: Partial<ServiceCityStored>): Promise<ServiceCityStored>;
}
