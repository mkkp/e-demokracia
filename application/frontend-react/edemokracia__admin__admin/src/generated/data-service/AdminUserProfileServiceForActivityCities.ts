//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminUserProfile,
  AdminCityQueryCustomizer,
  AdminDistrict,
  AdminDistrictStored,
  AdminCityStored,
  AdminCity,
  AdminDistrictQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for AdminUserProfile.activityCities
 */
export interface AdminUserProfileServiceForActivityCities {
  listActivityCities(
    owner: JudoIdentifiable<AdminUserProfile>,
    queryCustomizer?: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>>;
}
