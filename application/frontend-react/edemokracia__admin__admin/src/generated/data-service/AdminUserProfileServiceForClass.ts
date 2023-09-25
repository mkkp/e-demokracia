//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminUserProfileQueryCustomizer,
  AdminUserProfile,
  AdminCityQueryCustomizer,
  AdminDistrict,
  AdminCountyQueryCustomizer,
  AdminDistrictStored,
  AdminUserProfileStored,
  AdminCounty,
  AdminCountyStored,
  AdminCityStored,
  AdminCity,
  AdminDistrictQueryCustomizer,
} from '../data-api';

/**
 * Class Service for AdminUserProfile
 */
export interface AdminUserProfileServiceForClass {
  refresh(
    target: JudoIdentifiable<AdminUserProfile>,
    queryCustomizer?: AdminUserProfileQueryCustomizer,
  ): Promise<AdminUserProfileStored>;

  getActivityCounties(
    target: JudoIdentifiable<AdminUserProfile>,
    queryCustomizer?: AdminCountyQueryCustomizer,
  ): Promise<Array<AdminCountyStored>>;

  getRangeForActivityCounties(
    owner?: JudoIdentifiable<AdminUserProfile> | AdminUserProfile,
    queryCustomizer?: AdminCountyQueryCustomizer,
  ): Promise<Array<AdminCountyStored>>;

  getResidentCounty(
    target: JudoIdentifiable<AdminUserProfile>,
    queryCustomizer?: AdminCountyQueryCustomizer,
  ): Promise<AdminCountyStored>;

  getRangeForResidentCounty(
    owner?: JudoIdentifiable<AdminUserProfile> | AdminUserProfile,
    queryCustomizer?: AdminCountyQueryCustomizer,
  ): Promise<Array<AdminCountyStored>>;

  getActivityCities(
    target: JudoIdentifiable<AdminUserProfile>,
    queryCustomizer?: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>>;

  getRangeForActivityCities(
    owner?: JudoIdentifiable<AdminUserProfile> | AdminUserProfile,
    queryCustomizer?: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>>;

  getResidentCity(
    target: JudoIdentifiable<AdminUserProfile>,
    queryCustomizer?: AdminCityQueryCustomizer,
  ): Promise<AdminCityStored>;

  getRangeForResidentCity(
    owner?: JudoIdentifiable<AdminUserProfile> | AdminUserProfile,
    queryCustomizer?: AdminCityQueryCustomizer,
  ): Promise<Array<AdminCityStored>>;

  getActivityDistricts(
    target: JudoIdentifiable<AdminUserProfile>,
    queryCustomizer?: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>>;

  getRangeForActivityDistricts(
    owner?: JudoIdentifiable<AdminUserProfile> | AdminUserProfile,
    queryCustomizer?: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>>;

  getResidentDistrict(
    target: JudoIdentifiable<AdminUserProfile>,
    queryCustomizer?: AdminDistrictQueryCustomizer,
  ): Promise<AdminDistrictStored>;

  getRangeForResidentDistrict(
    owner?: JudoIdentifiable<AdminUserProfile> | AdminUserProfile,
    queryCustomizer?: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>>;
}
