//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getNotAccessRelationsTypes(#application)
// Path expression: 'data-service/'+#serviceRelationName(#self)+'.ts'
// Template name: relationService.ts.hbs
// Template file: data-service/relationService.ts.hbs

import type { JudoIdentifiable } from '@judo/data-api-common';
import { AdminDistrict, AdminDistrictStored, AdminCity, AdminDistrictQueryCustomizer } from '../data-api';

/**
 * Relation Service for AdminCity.districts
 */
export interface AdminCityServiceForDistricts {
  listDistricts(
    owner: JudoIdentifiable<AdminCity>,
    queryCustomizer?: AdminDistrictQueryCustomizer,
  ): Promise<Array<AdminDistrictStored>>;

  createDistricts(owner: JudoIdentifiable<AdminCity>, target: AdminDistrict): Promise<AdminDistrictStored>;

  deleteDistricts(owner: JudoIdentifiable<AdminCity>, target: JudoIdentifiable<AdminDistrict>): Promise<void>;

  updateDistricts(
    owner: JudoIdentifiable<AdminCity>,
    target: Partial<AdminDistrictStored>,
  ): Promise<AdminDistrictStored>;
}
