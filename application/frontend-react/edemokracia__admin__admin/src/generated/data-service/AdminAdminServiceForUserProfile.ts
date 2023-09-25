//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: accessRelationService.ts.hbs
// Template file: data-service/accessRelationService.ts.hbs

import {
  AdminUserProfileQueryCustomizer,
  AdminUserProfile,
  AdminCityQueryCustomizer,
  AdminDistrict,
  AdminCountyQueryCustomizer,
  AdminDistrictStored,
  AdminUserProfileStored,
  AdminCountyStored,
  AdminCounty,
  AdminCityStored,
  AdminCity,
  AdminDistrictQueryCustomizer,
} from '../data-api';

/**
 * Access Relation Service for AdminAdmin.userProfile
 */
export interface AdminAdminServiceForUserProfile {
  getUserProfile(mask?: string): Promise<AdminUserProfileStored>;
}
