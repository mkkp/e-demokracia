//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceCity,
  ServiceDistrictQueryCustomizer,
  ServiceDistrict,
  ServiceDistrictStored,
  ServiceCounty,
  ServiceCityStored,
  ServiceCityQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServiceCounty.cities
 */
export interface ServiceCountyServiceForCities {
  listCities(
    owner: JudoIdentifiable<ServiceCounty>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;

  createCities(owner: JudoIdentifiable<ServiceCounty>, target: ServiceCity): Promise<ServiceCityStored>;

  deleteCities(owner: JudoIdentifiable<ServiceCounty>, target: JudoIdentifiable<ServiceCity>): Promise<void>;

  updateCities(owner: JudoIdentifiable<ServiceCounty>, target: Partial<ServiceCityStored>): Promise<ServiceCityStored>;
}
