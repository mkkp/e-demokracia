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
  ServiceDistrictQueryCustomizer,
  ServiceDistrict,
  ServiceDistrictStored,
} from '../data-api';

/**
 * Relation Service for ServiceServiceUser.residentDistrict
 */
export interface ServiceServiceUserServiceForResidentDistrict {
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored>;
  getRangeForResidentDistrict(
    owner: JudoIdentifiable<ServiceServiceUser> | ServiceServiceUser,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
  getTemplate(): Promise<ServiceDistrict>;
  update(target: Partial<ServiceDistrictStored>): Promise<ServiceDistrictStored>;
  setResidentDistrict(
    owner: JudoIdentifiable<ServiceServiceUser>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;
  unsetResidentDistrict(owner: JudoIdentifiable<ServiceServiceUser>): Promise<void>;
}
