//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
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
  getResidentDistrict(owner: JudoIdentifiable<ServiceServiceUser>, mask?: string): Promise<ServiceDistrictStored>;

  updateResidentDistrict(
    owner: JudoIdentifiable<ServiceServiceUser>,
    target: Partial<ServiceDistrictStored>,
  ): Promise<ServiceDistrictStored>;
}
