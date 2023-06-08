//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminCityQueryCustomizer,
  AdminDistrict,
  AdminDistrictStored,
  AdminCounty,
  AdminCityStored,
  AdminCity,
  AdminDistrictQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for AdminCounty.cities
 */
export interface AdminCountyServiceForCities {
  listCities(
    owner: JudoIdentifiable<AdminCounty>,
    queryCustomizer?: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>>;

  createCities(owner: JudoIdentifiable<AdminCounty>, target: AdminCity): Promise<AdminCityStored>;

  deleteCities(owner: JudoIdentifiable<AdminCounty>, target: JudoIdentifiable<AdminCity>): Promise<void>;

  updateCities(owner: JudoIdentifiable<AdminCounty>, target: Partial<AdminCityStored>): Promise<AdminCityStored>;
}
