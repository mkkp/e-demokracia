//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import { JudoIdentifiable } from '@judo/data-api-common';
import { AdminDistrict, AdminUser, AdminDistrictStored, AdminDistrictQueryCustomizer } from '../data-api';

/**
 * Relation Service for AdminUser.residentDistrict
 */
export interface AdminUserServiceForResidentDistrict {
  getResidentDistrict(owner: JudoIdentifiable<AdminUser>, mask?: string): Promise<AdminDistrictStored>;

  updateResidentDistrict(
    owner: JudoIdentifiable<AdminUser>,
    target: Partial<AdminDistrictStored>,
  ): Promise<AdminDistrictStored>;
}
