//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  CityQueryCustomizer,
  User,
  CityStored,
  DistrictStored,
  City,
  DistrictQueryCustomizer,
  District,
} from '../data-api';

/**
 * Relation Service for User.activityCities
 */
export interface UserServiceForActivityCities {
  listActivityCities(owner: JudoIdentifiable<User>, queryCustomizer?: CityQueryCustomizer): Promise<Array<CityStored>>;
}
