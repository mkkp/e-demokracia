//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.relationTypes
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import {
  ServiceDistrictQueryCustomizer,
  ServiceUserProfile,
  ServiceDistrict,
  ServiceDistrictStored,
} from '../data-api';

/**
 * Relation Service for ServiceUserProfile.activityDistricts
 */
export interface ServiceUserProfileServiceForActivityDistricts {
  list(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
  refresh(
    owner?: JudoIdentifiable<any>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored>;
  getTemplate(): Promise<ServiceDistrict>;
}
