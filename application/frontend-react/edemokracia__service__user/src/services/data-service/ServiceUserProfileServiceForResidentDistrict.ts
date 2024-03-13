//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import {
  JudoRestResponse,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceUserProfile,
} from '../data-api';
import type { CommandQueryCustomizer, JudoIdentifiable } from '../data-api/common';

/**
 * Relation Service for ServiceUserProfile.residentDistrict
 */
export interface ServiceUserProfileServiceForResidentDistrict {
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<ServiceDistrictStored>>;
  getRangeForResidentDistrict(
    owner: JudoIdentifiable<ServiceUserProfile> | ServiceUserProfile,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
    headers?: Record<string, string>,
  ): Promise<JudoRestResponse<Array<ServiceDistrictStored>>>;
  getTemplate(): Promise<JudoRestResponse<ServiceDistrict>>;
  setResidentDistrict(
    owner: JudoIdentifiable<ServiceUserProfile>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<JudoRestResponse<void>>;
  unsetResidentDistrict(owner: JudoIdentifiable<ServiceUserProfile>): Promise<JudoRestResponse<void>>;
}
