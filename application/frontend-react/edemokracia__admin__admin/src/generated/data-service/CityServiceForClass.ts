//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { CityQueryCustomizer, CityStored, DistrictStored, City, District, DistrictQueryCustomizer } from '../data-api';

/**
 * Class Service for City
 */
export interface CityServiceForClass {
  refresh(target: JudoIdentifiable<City>, queryCustomizer?: CityQueryCustomizer): Promise<CityStored>;

  getDistricts(
    target: JudoIdentifiable<City>,
    queryCustomizer?: DistrictQueryCustomizer,
  ): Promise<Array<DistrictStored>>;

  getRangeForDistricts(
    owner?: JudoIdentifiable<City> | City,
    queryCustomizer?: DistrictQueryCustomizer,
  ): Promise<Array<DistrictStored>>;
}
