//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceServiceUser,
  ServiceCity,
  ServiceDistrictQueryCustomizer,
  ServiceDistrict,
  ServiceDistrictStored,
  ServiceCityStored,
  ServiceCityQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for ServiceServiceUser.activityCities
 */
export interface ServiceServiceUserServiceForActivityCities {
  list(owner?: JudoIdentifiable<any>, queryCustomizer?: ServiceCityQueryCustomizer): Promise<Array<ServiceCityStored>>;
  refresh(owner?: JudoIdentifiable<any>, queryCustomizer?: ServiceCityQueryCustomizer): Promise<ServiceCityStored>;
  getRangeForActivityCities(
    owner: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;
  getTemplate(): Promise<ServiceCity>;
  update(target: Partial<ServiceCityStored>): Promise<ServiceCityStored>;
  setActivityCities(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;
  addActivityCities(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: Array<JudoIdentifiable<ServiceCity>>,
  ): Promise<void>;
  removeActivityCities(
    owner: JudoIdentifiable<ServiceServiceUser>,
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
