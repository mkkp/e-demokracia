//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { DistrictStored, City, DistrictQueryCustomizer, District } from '../data-api';

/**
 * Relation Service for City.districts
 */
export interface CityServiceForDistricts {
  listDistricts(
    owner: JudoIdentifiable<City>,
    queryCustomizer?: DistrictQueryCustomizer,
  ): Promise<Array<DistrictStored>>;
}
