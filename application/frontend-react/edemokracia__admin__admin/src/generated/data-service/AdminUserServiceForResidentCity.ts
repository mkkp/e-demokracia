//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import {
  AdminCityQueryCustomizer,
  AdminDistrict,
  AdminUser,
  AdminDistrictStored,
  AdminCityStored,
  AdminCity,
  AdminDistrictQueryCustomizer,
} from '../data-api';

/**
 * Relation Service for AdminUser.residentCity
 */
export interface AdminUserServiceForResidentCity {
  getResidentCity(owner: JudoIdentifiable<AdminUser>, mask?: string): Promise<AdminCityStored>;

  updateResidentCity(owner: JudoIdentifiable<AdminUser>, target: Partial<AdminCityStored>): Promise<AdminCityStored>;
}
