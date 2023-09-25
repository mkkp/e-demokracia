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
  AdminCountyQueryCustomizer,
  AdminCountyStored,
  AdminCounty,
  AdminCityStored,
  AdminCity,
} from '../data-api';

/**
 * Relation Service for AdminUserProfile.activityCounties
 */
export interface AdminUserProfileServiceForActivityCounties {
  listActivityCounties(
    owner: JudoIdentifiable<AdminUserProfile>,
    queryCustomizer?: AdminCountyQueryCustomizer,
  ): Promise<Array<AdminCountyStored>>;
}
