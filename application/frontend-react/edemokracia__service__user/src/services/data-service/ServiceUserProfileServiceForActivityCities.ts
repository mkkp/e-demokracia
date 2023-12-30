//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceUserProfile,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceUserProfile.activityCities
 */
export interface ServiceUserProfileServiceForActivityCities {
  list(owner?: JudoIdentifiable<any>, queryCustomizer?: ServiceCityQueryCustomizer): Promise<Array<ServiceCityStored>>;
  refresh(owner?: JudoIdentifiable<any>, queryCustomizer?: ServiceCityQueryCustomizer): Promise<ServiceCityStored>;
  getRangeForActivityCities(
    owner: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;
  getTemplate(): Promise<ServiceCity>;
  addActivityCities(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;
  removeActivityCities(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;
  listDistricts(
    owner: JudoIdentifiable<ServiceCity>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
  getTemplateForDistricts(): Promise<ServiceDistrict>;
  createDistricts(owner: JudoIdentifiable<ServiceCity>, target: ServiceDistrict): Promise<ServiceDistrictStored>;
  deleteDistricts(target: JudoIdentifiable<ServiceDistrict>): Promise<void>;
  updateDistricts(
    owner: JudoIdentifiable<ServiceCity>,
    target: Partial<ServiceDistrictStored>,
  ): Promise<ServiceDistrictStored>;
}
